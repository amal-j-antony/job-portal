import { initializeAccount } from '@/redux/authSlice'
import { addAccountAPI, getUserByEmailAPI } from '@/services/authAPI'
import { ArrowLeftIcon } from '@phosphor-icons/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [registerData, setRegisterData] = useState({
        step: 0,
        role: "",
        name: "",
        email: "",
        password: "",
        confirm: ""
    })

    const registerAccount = async () => {
        const { step, role, name, email, password, confirm } = registerData

        if (name && email.includes("@") && password && password == confirm) {
            const checkEmail = await getUserByEmailAPI(email)
            console.log(checkEmail);

            if (checkEmail.data.length != 0) {
                alert("Error: An Account exists with this email already")
            } else {
                const accountData = {
                    name,
                    email,
                    role,
                    password
                }

                const accDataStore = {
                    name,
                    email,
                    role
                }
                const result = await addAccountAPI(accountData)
                alert("success")
                console.log(result);
                localStorage.setItem("account",JSON.stringify(result.data))
                dispatch(initializeAccount(accDataStore))
                navigate(`/${role}/${result.data.id}/dashboard`)              
            }
        } else {
            alert("Enter all Details")
        }
    }


    return (
        <main className='flex flex-col justify-center items-center w-full min-h-[90vh]'>
            {
                registerData.role == 0 &&
                // Choose account type
                <section className='flex flex-col items-center gap-5'>
                    <h1 className='text-4xl'>Register Account</h1>
                    <h1>Select applicable option</h1>
                    <div className="">
                        <div className="flex gap-5">
                            <div onClick={() => {
                                setRegisterData({
                                    step: 1,
                                    role: "candidate"
                                })
                            }} className='flex-1  border border-slate-400 hover:bg-blue-900 p-5 duration-500 hover:text-white rounded-3xl text-center cursor-pointer'>
                                <h1>I want to apply for jobs</h1>
                                <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783532863/Business_Plan-amico_oz63qm.png" className='h-50 mx-auto' alt="image" />
                            </div>
                            <div onClick={() => {
                                setRegisterData({
                                    step: 1,
                                    role: "company"
                                })
                            }} className='flex-1 border border-slate-400 p-5 rounded-3xl text-center hover:bg-blue-900 duration-500 hover:text-white cursor-pointer'>
                                <h1>I want to hire talent for my firm</h1>
                                <img src="https://res.cloudinary.com/dwaaoyztz/image/upload/v1783532865/Business_Plan-cuate_kcpohl.png" className='h-50 mx-auto' alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            }



            {
                
                registerData.step == 1 &&
                <section className="p-10 rounded-3xl shadow-lg flex flex-col items-center gap-5 bg-zinc-100">
                <div className="w-full">
                    <span onClick={() => setRegisterData({
                        step: 0,
                        role: ""
                    })} className='flex items-center gap-2 cursor-pointer hover:underline'><ArrowLeftIcon /> back</span>
                </div>
                <h1 className='text-4xl font-bold ' >Register {
                    registerData.role == "candidate" ? <span>Candidate</span> : <span>Company</span>
                } Account</h1>
                <input onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })} type="text" placeholder='Enter Name' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                <input onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} type="text" placeholder='Enter Email' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                {
                    !registerData?.email?.includes("@") ? !registerData.email == "" ?
                    <h1 className='text-red-500'>Enter Valid email</h1> : <></> : <></>
                }
                <input onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })} type="password" placeholder='Enter Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                <input onChange={(e) => setRegisterData({ ...registerData, confirm: e.target.value })} type="password" placeholder='Confirm Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                {
                    registerData?.password != registerData.confirm &&
                    <h1 className='text-red-500'>Passwords must match</h1>
                }
                <button onClick={registerAccount} className='bg-blue-900 w-100 py-2 rounded-xl text-white cursor-pointer text-center'>Register Now</button>
                <Link to={"/login"} >Already have an account? <u>Login</u></Link>

            </section>
}

            {/* {
                // company register
                registerData.role == "company" &&
                <section className="p-10 rounded-3xl shadow-lg flex flex-col items-center gap-5 bg-zinc-100">
                    <div className="w-full">
                        <span onClick={() => setRegisterData({
                            step: 0,
                            role: ""
                        })} className='flex items-center gap-2 cursor-pointer hover:underline'><ArrowLeftIcon/> back</span>
                    </div>
                    <h1 className='text-4xl font-bold ' >Register Organization Account</h1>
                    <input type="text" placeholder='Enter Company Name' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <input type="text" placeholder='Enter Company Email' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <input type="password" placeholder='Enter Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    <input type="password" placeholder='Confirm Password' className='w-100 border p-4 rounded-xl placeholder:text-center text-center' />
                    
                    <button className='bg-blue-900 w-100 py-2 rounded-xl text-white cursor-pointer'>Register Now</button>

                </section>
            } */}

        </main>
    )
}

export default Register