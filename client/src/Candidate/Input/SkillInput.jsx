import { skills } from '@/assets/jobSkills'
import React, { useState } from 'react'
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


function SkillInput({ setTabs }) {
    const skillNamesRaw = skills.map(item => item.name)
    const skillNames = [...new Set(skillNamesRaw)]
    const [selectedSkills, setSelectedSKills] = useState([])
    console.log(selectedSkills);
    
    const anchor = useComboboxAnchor()
    return (
        <>
            <main className='z-5 fixed inset-0 bg-black/20 backdrop-blur flex justify-center items-center'>
                <div className="bg-slate-50 rounded-3xl p-10 flex flex-col w-120 gap-5">
                    <div className='flex justify-between'>
                        <h1>Add Technical skills</h1>
                        <span onClick={() => setTabs("")} className='cursor-pointer' ><u>Close</u></span>
                    </div>
                    <div className="">
                        <Combobox
                            value={selectedSkills}
                            onValueChange={setSelectedSKills}
                            multiple
                            items={skillNames}>
                            <ComboboxChips  ref={anchor} >
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
                                                        values.map((value,index) => (
                                                            <ComboboxChip key={index} >{value}</ComboboxChip>
                                                        ))
                                                    }
                                                    <ComboboxChipsInput  className="w-full" />
                                                </>
                                        )
                                    }
                                </ComboboxValue>
                                <div className='group '>
                                    <button onClick={()=>setSelectedSKills([])} className="text-xl "><BackspaceIcon/></button>
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
                    <button className='p-1 rounded bg-foreground text-white'>Confirm</button>
                </div>
            </main>

        </>
    )
}

export default SkillInput