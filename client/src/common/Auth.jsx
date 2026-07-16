import { initializeAccount } from '@/redux/authSlice'
import { getUserByEmailAPI } from '@/services/authAPI'
import { ArrowLeftIcon, EyeClosedIcon, EyeIcon, EyeSlashIcon } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'


function Auth() {
  const [hidden,setHidden] = useState(true)
  const [account, setAccount] = useState({
    email: "",
    password: "",

  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const reduxAccData = useSelector(state => state.authReducer)
  console.log(reduxAccData);

  const [reduxUserData, setReduxUserData] = useState({})

  const handleLogin = async () => {
    const result = await getUserByEmailAPI(account.email)
    console.log("getUserByEmailAPI", result.data);
    console.log(result.data[0].name);

    if (result.data[0].password == account.password) {
      const accDataStore = {
        name: result.data[0].name,
        email: result.data[0].email,
        accountID: result.data[0].id,
        role: result.data[0].role
      }
      console.log("accDataStore",accDataStore);

      toast.success("login success", { position: "top-center" })
      localStorage.setItem("account", JSON.stringify(accDataStore))
      dispatch(initializeAccount(accDataStore))
      navigate(`/${accDataStore.role}/${accDataStore.id}/dashboard`)
      console.log("navigate success");
      
    }else{
      toast.error("Login failed. Please check your input",{position:"top-center"})
    }
  }

  useEffect(() => {
    setReduxUserData(reduxAccData)
  }, [reduxAccData])

  useEffect(() => {
    reduxAccData.accountID != "" && navigate(`/${reduxUserData.role}/${reduxUserData.accountID}/dashboard`)
  }, [reduxUserData])




  return (
    <>
      <main className='flex flex-col justify-center items-center w-full min-h-[90vh]'>


        <section className="p-10 rounded-3xl shadow-lg flex flex-col items-center gap-5 bg-zinc-100">
          <div className='flex w-full hover:underline '>
            <Link to={"/"} className='flex gap-2 items-center '><ArrowLeftIcon /> Back</Link>
          </div>
          <img className='h-50' src="output-onlinegiftools.gif" alt="" />
          <h1 className='text-4xl font-bold' >Login to Nextra</h1>
          <input onChange={(e) => setAccount({ ...account, email: e.target.value })} type="text" placeholder='Enter Email' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
          <div className='relative'>
            <input onChange={(e) => setAccount({ ...account, password: e.target.value })} type={hidden ? "password" : "text"} placeholder='Enter Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
            {
              hidden ?
              <EyeSlashIcon onClick={()=>setHidden(!hidden)} className='absolute right-5 top-1/3 text-2xl text-zinc-400 cursor-pointer' />
              :
              <EyeIcon onClick={()=>setHidden(!hidden)} className='absolute right-5 top-1/3 text-2xl text-zinc-400 cursor-pointer' />
            }
          </div>
          <button onClick={handleLogin} className='bg-blue-900 w-100 py-2 rounded-xl text-white cursor-pointer'>Login</button>
          <Link to={"/register"} className='cursor-pointer'>Dont have an account? <u>Register Now</u></Link>
        </section>

      </main>

    </>
  )
}

export default Auth