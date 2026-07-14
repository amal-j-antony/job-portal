import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { MdOutlineFileUpload } from "react-icons/md";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { addCompanyProfileAPI, getProfileByCompanyID_API, updateCompanyProfileAPI } from '@/services/companyAPI';
import { useSelector } from 'react-redux';

function Interview() {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [errors, setErrors] = useState({})
    const [logo, setLogo] = useState("")
    const [companyProfile, setCompanyProfile] = useState({
        companyImage: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
        companyName: "",
        industry: "",
        companySize: "",
        yearFounded: "",
        website: "",
        aboutCompany: "",
        linkedIn: "",
        facebook: "",
        twitter: "",
        github: "",
        email: "",
        phone: "",
        address: {
            street: "",
            city: "",
            state: "",
            country: "",
            pincode: ""
        }
    })
    console.log("companyProfile", companyProfile);

    const reduxAccData = useSelector(state => state.authReducer)

    const getCompanyProfile = async () => {
        if (reduxAccData.accountID) {
            const result = await getProfileByCompanyID_API(reduxAccData.accountID)
            console.log("getProfileByCompanyID_API",result);
            if(result.data.length == 1){
                setCompanyProfile(result.data[0])
            }
        }
    }


    const addInfo = (e, value) => {
        const address = ["street", "city", "state", "country", "pincode"]
        if (value == "companyImage") {
            setCompanyProfile({
                ...companyProfile,
                [value]: e
            })
        } else if (address.includes(value)) {
            setCompanyProfile({
                ...companyProfile,
                address: {
                    ...companyProfile.address,
                    [value]: e.target.value
                }
            })
        } else {
            setCompanyProfile({
                ...companyProfile,
                [value]: e.target.value
            })
        }
    }






    const validate = () => {
        const newErrors = {

        }
        if (!companyProfile.companyName.trim()) {
            newErrors.companyName = "Company Name required"
        }
        if (companyProfile.companyImage == "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305") {
            newErrors.companyImage = "Logo image required"
        }
        if (!companyProfile.industry.trim()) {
            newErrors.industry = "Industry required"
        }
        if (!companyProfile.aboutCompany.trim()) {
            newErrors.aboutCompany = "About company section required"
        }
        if (!companyProfile.linkedIn.trim()) {
            newErrors.linkedIn = "Linkeidn required"
        }
        if (!companyProfile.email.trim()) {
            newErrors.email = "Company email required"
        }
        if (!companyProfile.address.street.trim()) {
            newErrors.address ??= {}
            newErrors.address.street = "Street Name required"
        }
        if (!companyProfile.address.city.trim()) {
            newErrors.address ??= {}
            newErrors.address.city = "City Name required"
        }
        if (!companyProfile.address.state.trim()) {
            newErrors.address ??= {}
            newErrors.address.state = "state Name required"
        }
        if (!companyProfile.address.country.trim()) {
            newErrors.address ??= {}
            newErrors.address.country = "country Name required"
        }
        if (!companyProfile.address.pincode.trim()) {
            newErrors.address ??= {}
            newErrors.address.pincode = "Pincode required"
        }
        console.log("newErrors", newErrors);

        setErrors(newErrors)
        console.log("errors", errors);

        if (Object.keys(newErrors).length > 0) {
            return false
        } else {
            setErrors({})
            return true
        }

    }


    const submitProfile = async () => {

        const validationStatus = validate()
        if (!validationStatus) {
            alert("Please fill all required fields")
            return
        }

        if (companyProfile.id) {
            const result = await updateCompanyProfileAPI(companyProfile.id, companyProfile)
            console.log("updateCompanyProfileAPI", result);

        } else {
            const result = await addCompanyProfileAPI({
                ...companyProfile,
                id: crypto.randomUUID()
            })
            console.log("addCompanyProfileAPI", result);

        }
    }

    const resetForm = () => {
        setCompanyProfile({
            companyImage: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen.jpg?ts=1672291305",
            companyName: "",
            industry: "",
            companySize: "",
            yearFounded: "",
            website: "",
            aboutCompany: "",
            linkedIn: "",
            facebook: "",
            twitter: "",
            github: "",
            email: "",
            phone: "",
            address: {
                street: "",
                city: "",
                state: "",
                country: "",
                pincode: ""
            }
        })
    }

    useEffect(()=>{
        getCompanyProfile()
    },[reduxAccData])
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-2 bg-[#03045e] h-screen sticky top-0'>
                <Sidebar activeTab={"profile"} />
            </div>
            <div className='col-span-10 bg-[#f5f7fb] px-[100px] pt-[40px]'>
                <div className='flex justify-between pb-[40px]'>
                    <div>
                        <h1 className='text-3xl font-bold'>Comapny Profile</h1>
                        <p className='text-gray-500'>View and update your Company Profile.</p>
                    </div>
                </div>
                <div className=' bg-white mt-[5px] p-4 rounded-2xl flex gap-4'>
                    <img src={companyProfile?.companyImage} style={{ width: "100px", height: "100px" }} alt="" />
                    <div>
                        <h1 className='font-black'>Company Logo</h1>
                        <p className='text-gray-500'>Upload your logo JPG,PNG.</p>
                        <h1 className='text-gray-500' >(Max size 2MB)</h1>
                        <button onClick={() => setDialogOpen(true)} className='outline outline-2 outline-blue-500 px-3 py-1 rounded-md text-blue-500 flex items-center gap-2 cursor-pointer'><MdOutlineFileUpload className='text-lg ' />upload Logo</button>
                        {
                            errors.companyImage && <h1 className='text-red-500 font-bold pt-5'>{errors.companyImage}</h1>
                        }
                    </div>
                </div>
                <div className='grid grid-cols-12 mt-[20px] px-3 gap-4'>
                    <div className='col-span-6'>
                        <div className='bg-white p-3 rounded-2xl shadow-lg'>
                            <h1 className='font-black text-lg'>Company Information</h1>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Company Name</label>
                                <input value={companyProfile.companyName} onChange={(e) => addInfo(e, "companyName")} type="text" placeholder='company name' className='border border-gray-300 rounded-sm p-1' />
                                {
                                    errors.companyName && <h1 className='text-red-500 font-bold pt-5'>{errors.companyName}</h1>
                                }
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Industry</label>
                                <input value={companyProfile.industry} onChange={(e) => addInfo(e, "industry")} type="text" placeholder='Industry' className='border border-gray-300 rounded-sm p-1' />
                                {
                                    errors.industry && <h1 className='text-red-500 font-bold pt-5'>{errors.industry}</h1>
                                }
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Company size</label>
                                <input value={companyProfile.companySize} onChange={(e) => addInfo(e, "companySize")} type="text" placeholder='Number' className='border border-gray-300 rounded-sm p-1' />

                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Found year</label>
                                <input value={companyProfile.yearFounded} onChange={(e) => addInfo(e, "yearFounded")} type="text" placeholder='year' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Website</label>
                                <input value={companyProfile.website} onChange={(e) => addInfo(e, "website")} type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                        </div>
                        <div className='bg-white mt-[10px] rounded-2xl p-3 shadow-lg'>
                            <h1 className='font-black text-lg'>About Company</h1>
                            <textarea value={companyProfile.aboutCompany} onChange={(e) => addInfo(e, "aboutCompany")} className='w-full border rounded-md border-gray-300' name="" id=""></textarea>
                            {
                                errors.aboutCompany && <h1 className='text-red-500 font-bold'>{errors.aboutCompany}</h1>
                            }
                        </div>
                        <div className='bg-white mt-[10px] rounded-2xl p-3 shadow-lg mb-[20px]'>
                            <h1 className='font-black text-lg'>Social Links</h1>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>LinkedIn</label>
                                <input value={companyProfile.linkedIn} onChange={(e) => addInfo(e, "linkedIn")} type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                                {
                                    errors.linkedIn && <h1 className='text-red-500 font-bold '>{errors.linkedIn}</h1>
                                }
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>FaceBook</label>
                                <input value={companyProfile.facebook} onChange={(e) => addInfo(e, "facebook")} type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>Twitter</label>
                                <input value={companyProfile.twitter} onChange={(e) => addInfo(e, "twitter")} type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                            <div className='flex justify-between items-center mt-3'>
                                <label htmlFor="" className='font-bold'>GitHub</label>
                                <input value={companyProfile.github} onChange={(e) => addInfo(e, "github")} type="text" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            </div>
                        </div>
                    </div>
                    <div className='col-span-6 bg-white rounded-2xl p-3 mb-[20px] shadow-lg'>
                        <h1 className='font-black text-lg'>Contact Details</h1>

                        <div className='flex justify-between items-center mt-3'>

                            <label htmlFor="" className='font-bold'>Email</label>
                            <input value={companyProfile.email} onChange={(e) => addInfo(e, "email")} type="email" placeholder='link' className='border border-gray-300 rounded-sm p-1' />
                            {
                                errors.email && <h1 className='text-red-500 font-bold'>{errors.email}</h1>
                            }
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Phone Number</label>
                            <input value={companyProfile.phone} onChange={(e) => addInfo(e, "phone")} type="text" placeholder='+91 93768275' className='border border-gray-300 rounded-sm p-1' />
                        </div>
                        <h1 className='mt-3 font-black text-lg'>Address</h1>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Street</label>
                            <input value={companyProfile?.address?.street} onChange={(e) => addInfo(e, "street")} type="text" placeholder='kochi' className='border border-gray-300 rounded-sm p-1' />
                            {
                                errors?.address?.street && <h1 className='text-red-500 font-bold'>{errors.address.street}</h1>
                            }
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>City</label>
                            <input value={companyProfile?.address?.city} onChange={(e) => addInfo(e, "city")} type="text" placeholder='eranakulam' className='border border-gray-300 rounded-sm p-1' />
                            {
                                errors?.address?.city && <h1 className='text-red-500 font-bold '>{errors.address.city}</h1>
                            }
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>State/Province</label>
                            <input value={companyProfile?.address?.state} onChange={(e) => addInfo(e, "state")} type="text" placeholder='kerala' className='border border-gray-300 rounded-sm p-1' />
                            {
                                errors?.address?.state && <h1 className='text-red-500 font-bold '>{errors.address.state}</h1>
                            }
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Country</label>
                            <input value={companyProfile?.address?.country} onChange={(e) => addInfo(e, "country")} type="text" placeholder='china' className='border border-gray-300 rounded-sm p-1' />
                            {
                                errors?.address?.country && <h1 className='text-red-500 font-bold pt-5'>{errors.address.country}</h1>
                            }
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <label htmlFor="" className='font-bold'>Zip/Postal Code</label>
                            <input value={companyProfile?.address?.pincode} onChange={(e) => addInfo(e, "pincode")} type="text" placeholder='671123' className='border border-gray-300 rounded-sm p-1' />
                            {
                                errors?.address?.pincode && <h1 className='text-red-500 font-bold pt-5'>{errors.address.pincode}</h1>
                            }
                        </div>
                    </div>
                </div>
                <div className='flex justify-end gap-4 py-3 mb-[10px]'>
                    <button className=' px-3 py-1 rounded-lg outline outline-[#03045e]'>Reset</button>
                    <button onClick={submitProfile} className=' px-3 py-1 rounded-lg bg-[#03045e] text-white cursor-pointer'>Save Changes</button>
                </div>
            </div>
            <Dialog
                open={dialogOpen}
            >

                <DialogContent showCloseButton={false}>
                    <DialogHeader>
                        <p className='text-lg'>Add image URL for company logo</p>
                    </DialogHeader>
                    <input onChange={(e) => setLogo(e.target.value)} className='py-2 border' type="text" value={logo} />
                    <div className='grid grid-cols-2 gap-2 w-full'>
                        <button onClick={() => setDialogOpen(false)} className='rounded py-2 cursor-pointer bg-foreground text-white' >Cancel</button>
                        <button onClick={() => {
                            addInfo(logo, "companyImage")
                            setDialogOpen(false)
                        }} className='rounded py-2 cursor-pointer bg-blue-600 text-white' >Submit</button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Interview

