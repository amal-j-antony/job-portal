import { PlusIcon } from '@phosphor-icons/react'
import React, { useEffect, useState } from 'react'
import SkillInput from './Input/SkillInput'
import PersonalDetailsInput from './Input/PersonalDetailsInput'
import WorkExperience from './Input/WorkExperience'
import ProjectsInput from './Input/ProjectsInput'
import { addCandidateProfileAPI, editCandidateDataAPI, getCandidateByIdAPI } from '@/services/candidateAPI'
import { useSelector } from 'react-redux'

function CandidateProfile() {
    const [profileData, setProfileData] = useState({
        profileImage: "https://res.cloudinary.com/dwaaoyztz/image/upload/v1783783482/user_s1wtzw.png",
        fullName: "",
        location: "",
        linkedin: "",
        github: "",
        phone: "",
        email: "",
        skills: [],
        workExperience: [],
        projects: []
    })

    const [editMode, setEditMode] = useState(false)
    let isExisting = false
    console.log("existingProfile",isExisting);
    
    const getProfile = async () => {
        try {
            const result = await getCandidateByIdAPI(reduxAccData.accountID)
            console.log(result.data);
            if (result.status > 199 && result.status < 300) {
                isExisting = true
                console.log("existingprofile",isExisting);
                
                setProfileData(result.data[0])
                if (result.data.profileImage == "") {
                    setProfileData(
                        {
                            ...profileData,
                            profileImage: result.data.profileImage
                        }
                    )
                }
            }


        } catch (error) {
            console.log(error);
        }
    }

    const [tabs, setTabs] = useState("")

    const reduxAccData = useSelector(state => state.authReducer)


    console.log(profileData);
    console.log(profileData.workExperience);


    const addInfo = (e, value) => {

        if (value == "skills") {
            setProfileData({
                ...profileData, [value]: e
            })
        } else {
            setProfileData({
                ...profileData, [value]: e.target.value
            })
        }


    }

    const handleSubmit = async () => {

        const hasEmptyVal = Object.values(profileData).some(val => val == '' || val == [])
        if (hasEmptyVal) {
            alert("Please fill all sections")
        } else {
            if (!profileData.id) {
                try {
                    const result = await addCandidateProfileAPI({
                        ...profileData,
                        candidateID: reduxUserData.accountID
                    })
                    if (result.status > 199 && result.status < 300) {
                        console.log("success");
                    }
                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    const result = await editCandidateDataAPI(profileData.id,profileData)
                    if (result.status > 199 && result.status < 300) {
                        alert("Profile updated successfully");
                    }
                } catch (error) {

                }
            }
        }
    }

    console.log(reduxAccData);
    const [reduxUserData, setReduxUserData] = useState({})
    console.log(reduxUserData);
    useEffect(() => {
        setReduxUserData(reduxAccData)
    }, [reduxAccData])

    useEffect(() => {
        getProfile()
    }, [reduxAccData])

    return (
        <>
            <div className="col-span-10 ">
                <div className="  grid grid-cols-12 gap">
                    <div className="col-span-9 p-10 ">
                        <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                            <li className='text-3xl font-bold'>Personal Details</li>


                            <PersonalDetailsInput setTabs={setTabs} profileData={profileData} setProfileData={setProfileData} addInfo={addInfo} editMode={editMode} />

                        </ul>
                        <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                            <li className='text-3xl font-bold'>Technical Skills</li>

                            <SkillInput setTabs={setTabs} profileData={profileData} setProfileData={setProfileData} addInfo={addInfo} />

                        </ul>
                        <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                            <li className='text-3xl font-bold'>Work Experience</li>


                            <WorkExperience setTabs={setTabs} profileData={profileData} setProfileData={setProfileData} addInfo={addInfo} />

                        </ul>
                        <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                            <li className='text-3xl font-bold'>Projects</li>
                            <ProjectsInput setTabs={setTabs} profileData={profileData} setProfileData={setProfileData} addInfo={addInfo} />
                        </ul>

                        {/* <ul className='bg-slate-50 rounded-3xl shadow-lg p-10 mb-10'>
                            <li className='text-3xl font-bold'>Education</li>
                            <li className='flex items-center gap-2 p-4'> <span className='border px-2 text-xl rounded border-foreground'>+</span> Add Projects</li>
                        </ul> */}

                        <button onClick={handleSubmit} className="bg-blue-500 text-white p-10 w-full rounded-3xl shadow-lg text-2xl cursor-pointer">Update Profile</button>
                    </div>
                    <div className="col-span-3 pt-10 sticky top-0 h-10 ">
                        <div className="bg-white rounded-3xl shadow-lg group relative">
                            <img className='p-10 rounded-full object-cover h-100 w-100' src={profileData.profileImage} alt="" />
                            <div className='flex gap-3 p-5'>
                                <button className="px-1 rounded-xl py-4 text-center bg-blue-600 text-white">Update profile picture</button>
                                <button className="px-1 rounded-xl py-4 text-center bg-blue-900 text-white">Delete profile picture</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CandidateProfile