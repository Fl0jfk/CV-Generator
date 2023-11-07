"use client"

import { DataProvider } from "../contexts/data";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";

function Model1(){
    return (
        <DataProvider>
            <div className="h-screen w-screen flex">
                <section id="left" className="w-[40%] h-full p-8 bg-[#d5d6f8] text-[#463a80] flex flex-col justify-between">
                    <Profile/>
                    <Skills/>
                    <SoftSkills/>
                </section>
                <section id="right" className="w-[60%] h-full p-8 bg-[#463a80] text-[#d5d6f8]">

                </section>
            </div>
        </DataProvider>
    )
}

export default Model1;