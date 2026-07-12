import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { useSelector } from 'react-redux';
import { addJobPostAPI } from '@/services/jobPostAPI';


function AddNewJob() {
    const sessionInfo = useSelector(state => state.authReducer)
    const [employmentTypeValue, setEmploymentTypeValue] = useState("")
    const employmentTypes = ["Full-time", "Part-Time", "Contract", "InternShip", "Freelance"]
    const workMode = ["On-Site", "Remote", "Hybrid"]

    const [jobPostData, setJobPostData] = useState({
        jobTitle: "",
        jobDescription: "",
        experience: 0,
        location: "",
        employmentType: "",
        workMode: "",
        minSalary: "",
        maxSalary: "",
        companyId: sessionInfo.id
    })

    console.log(jobPostData);
    console.log(employmentTypeValue);

    const addJobPost = async () => {
        const hasEmptyValue = Object.values(jobPostData).some(v => v === '' )

        if(hasEmptyValue){
            alert("Please fill all fields")
        }else{
            try {
                const result = await addJobPostAPI(jobPostData)
                console.log(result);
                if (result.status > 199 && result.status < 300) {
                    alert("Job successfully added")
                }
                
            } catch (error) {
                
            }
        }
    }

    const addInfo = (e, value) => {

        if (value == "employmentType" || value == "workMode") {
            setJobPostData({
                ...jobPostData, [value]: e
            })
        } else {
            setJobPostData({
                ...jobPostData, [value]: e.target.value
            })
        }


    }

    return (
        <>
            <div className='grid grid-cols-12'>
                <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
                    <Sidebar activeTab={"joblisting"} />
                </div>
                <div className='col-span-10 bg-[#f5f7fb] px-[100px] pt-[40px]'>
                    <div className='flex justify-between pb-[40px]'>
                        <div>
                            <h1 className='text-3xl font-bold'>Add New Job LIsting</h1>
                            {/* <p className='text-gray-500'>Manage all your active and inactive job posts.</p> */}
                        </div>
                        <Link to={"/joblisting"} className='bg-[#03045e] text-white font-bold py-2 px-4 rounded-lg flex justify-center items-center cursor-pointer'><IoArrowBackSharp /> Back</Link>
                    </div>
                    <div className="flex flex-col w-2/3 gap-5 bg-white p-10 rounded-3xl">
                        <div className='flex justify-between items-center text-lg'>
                            <h1>Enter Job Title</h1>
                            <input onChange={(e) => addInfo(e, "jobTitle")} value={addInfo.jobTitle} type="text" placeholder='Job Title' className='border border-zinc-300 rounded-xl py-2 px-4 w-3/5' />
                        </div>
                        <div className='flex justify-between  text-lg'>
                            <h1>Enter Job Description </h1>
                            <textarea onChange={(e) => addInfo(e, "jobDescription")} value={addInfo.jobDescription} type="text" placeholder='Job Description' className='border border-zinc-300 rounded-xl py-2 px-4 w-3/5 h-100' />
                        </div>
                        <div className='flex justify-between items-center text-lg'>
                            <h1>Enter Minimum Experience <br />(in yrs)</h1>
                            <input onChange={(e) => addInfo(e, "experience")} value={addInfo.experience} type="number" placeholder='Enter experience' className='border border-zinc-300 rounded-xl py-2 px-4 w-3/5' />
                        </div>
                        <div className='flex justify-between items-center text-lg'>
                            <h1>Enter Location</h1>
                            <input onChange={(e) => addInfo(e, "location")} value={addInfo.location} type="text" placeholder='Enter Location' className='border border-zinc-300 rounded-xl py-2 px-4 w-3/5' />
                        </div>
                        <div className='flex justify-between items-center text-lg'>
                            <h1>Select Employment Type</h1>
                            <Combobox

                                value={employmentTypeValue}
                                onValueChange={setEmploymentTypeValue}
                                onInputValueChange={(e) => addInfo(e, "employmentType")}
                                items={employmentTypes}>
                                <ComboboxInput showClear className="w-3/5 rounded-xl py-2 px-4 h-10 text-lg placeholder:text-lg" placeholder="Select an employment type" />
                                <ComboboxContent className="text-lg">
                                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                                    <ComboboxList>
                                        {(item) => (
                                            <ComboboxItem key={item} value={item}>
                                                {item}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                </ComboboxContent>
                            </Combobox>
                        </div>

                        <div className='flex justify-between items-center text-lg'>
                            <h1>Select work mode</h1>
                            <Combobox
                                onInputValueChange={(e) => addInfo(e, "workMode")}
                                items={workMode}>
                                <ComboboxInput showClear className="w-3/5 rounded-xl py-2 px-4 h-10 text-lg placeholder:text-lg" placeholder="Select work mode" />
                                <ComboboxContent className="text-lg">
                                    <ComboboxEmpty>No items found.</ComboboxEmpty>
                                    <ComboboxList>
                                        {(item) => (
                                            <ComboboxItem key={item} value={item}>
                                                {item}
                                            </ComboboxItem>
                                        )}
                                    </ComboboxList>
                                </ComboboxContent>
                            </Combobox>
                        </div>

                        <div className='flex justify-between items-center text-lg'>
                            <h1>Salary Range</h1>
                            <div className='flex w-3/5 gap-4'>
                                <input onChange={(e) => addInfo(e, "minSalary")} value={addInfo.minSalary} type="number" placeholder='Min' className='border border-zinc-300 rounded-xl p-2 w-1/3 ' />
                                <input onChange={(e) => addInfo(e, "maxSalary")} value={addInfo.maxSalary} type="number" placeholder='Max' className='border border-zinc-300 rounded-xl p-2 w-1/3 ' />
                            </div>
                        </div>
                        <div className="flex w-full justify-center gap-5">
                            <button onClick={addJobPost} className="bg-blue-700 text-white p-3 rounded-2xl cursor-pointer">Submit</button>
                            <button onClick={() => setJobPostData({
                                jobTitle: "",
                                jobDescription: "",
                                experience: 0,
                                location: "",
                                employmentType: "",
                                workMode: "",
                                minSalary: "",
                                maxSalary: ""
                            })} className="bg-foreground text-white p-3 rounded-2xl cursor-pointer">Reset</button>
                        </div>
                    </div>



                </div>

            </div>

        </>
    )
}

export default AddNewJob