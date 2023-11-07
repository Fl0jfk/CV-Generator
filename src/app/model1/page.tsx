"use client"

import { DataProvider } from "../contexts/data";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Language from "./components/Languages";
import Description from "./components/Description";

function Model1(){
    return (
        <DataProvider>
            <div className="h-screen w-screen flex">
                <section id="left" className="w-[40%] h-full p-6 bg-[#d5d6f8] text-[#463a80] flex flex-col justify-stretch">
                    <Profile/>
                    <Skills/>
                    <SoftSkills/>
                    <Language/>
                </section>
                <section id="right" className="w-[60%] h-full p-8 bg-[#463a80] text-[#d5d6f8]">
                    <Description/>
                </section>
            </div>
        </DataProvider>
    )
}

export default Model1;