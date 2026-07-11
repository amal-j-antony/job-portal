import { initializeAccount } from '@/redux/authSlice'
import { getUserByEmailAPI } from '@/services/authAPI'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function Auth() {

  const [account,setAccount] = useState({
    email: "",
    password: "",

  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

   const [localUserData,setLocalUserData] = useState(JSON.parse(localStorage.getItem("account")))

  const handleLogin = async () => {
    const result = await getUserByEmailAPI(account.email)
    console.log(result.data);
    console.log(result.data[0].name);
    
    if (result.data.password == account.password) {
      const accDataStore = {
        name: result.data[0].name ,
        email: result.data[0].email ,
        accountID: result.data[0].id ,
        role: result.data[0].role
      }
      console.log(accDataStore);
      
      alert("login success")
      localStorage.setItem("account",JSON.stringify(accDataStore))
      dispatch(initializeAccount(accDataStore))
      navigate(`/${localUserData.role}/${localUserData.id}/dashboard`)
    }
  }
  useEffect(()=> {
    localUserData && localUserData.id != "" && navigate(`/${localUserData.role}/${localUserData.id}/dashboard`)
  })
  

  return (
    <>
        <main className='flex flex-col justify-center items-center w-full min-h-[90vh]'>
            
                
                <section className="p-10 rounded-3xl shadow-lg flex flex-col items-center gap-5 bg-zinc-100">
                    <h1 className='text-4xl font-bold' >Login</h1>
                    <input onChange={(e)=>setAccount({...account, email: e.target.value})} type="text" placeholder='Enter Email' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <input onChange={(e)=>setAccount({...account, password: e.target.valu})} type="password" placeholder='Enter Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <button onClick={handleLogin} className='bg-blue-900 w-100 py-2 rounded-xl text-white cursor-pointer'>Login</button>
                    <Link to={"/register"} className='cursor-pointer'>Dont have an account? <u>Register Now</u></Link>
                </section>
            
        </main>
        
    </>
  )
}

export default Auth