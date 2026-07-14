import { skills } from '@/assets/jobSkills'
import React, { useEffect, useState } from 'react'
import {
    Combobox,
    ComboboxChip,
    ComboboxChips,
    ComboboxChipsInput,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    ComboboxValue,
    useComboboxAnchor,
} from "@/components/ui/combobox"
import { BackspaceIcon } from '@phosphor-icons/react'


function SkillInput({ setTabs, addInfo ,tab, profileData }) {
    const skillNamesRaw = skills.map(item => item.name)
    const skillNames = [...new Set(skillNamesRaw)]
    const [selectedSkills, setSelectedSKills] = useState([])
    console.log(selectedSkills);

    const anchor = useComboboxAnchor()
    useEffect(() => {
        tab == "project" ? addInfo(selectedSkills, "projectSkills") : addInfo(selectedSkills, "skills");
    }, [selectedSkills]);

    useEffect(()=>{
        setSelectedSKills(profileData.skills)
    },[])

    return (
        <>
            <div className="bg-slate-50 rounded-3xl flex flex-col  gap-5 p-10">
                <span>Added skills: {
                    profileData.skills.map((item)=>(
                        <span>{item}, </span>
                    ))
                    }</span>
                <div className="">
                    <Combobox
                        value={selectedSkills}
                        onValueChange={setSelectedSKills}
                        multiple
                        items={skillNames}>
                        <ComboboxChips ref={anchor} >
                            <ComboboxValue >
                                {
                                    (values) => (

                                        values.length == 0 ? (
                                            <>
                                                Select skill
                                                <ComboboxChipsInput className="w-full" />
                                            </>
                                        )
                                            :
                                            <>
                                                {
                                                    values.map((value, index) => (
                                                        <ComboboxChip key={index} >{value}</ComboboxChip>
                                                    ))
                                                }
                                                <ComboboxChipsInput className="w-full" />
                                            </>
                                    )
                                }
                            </ComboboxValue>
                            <div className='group '>
                                <button onClick={() => setSelectedSKills([])} className="text-xl "><BackspaceIcon /></button>
                                <span className="opacity-0 absolute -bottom-10 p-1 group-hover:opacity-100 duration-1000 bg-slate-100">Clear selection</span>
                            </div>

                        </ComboboxChips>
                        {/* <ComboboxInput placeholder="Select a skill" /> */}
                        <ComboboxContent ancho={anchor}>
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
            </div>

        </>
    )
}

export default SkillInput