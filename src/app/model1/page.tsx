"use client"

import { DataProvider } from "../contexts/data";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import SoftSkills from "./components/SoftSkills";
import Language from "./components/Languages";
import Description from "./components/Description";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Interests from "./components/Interest";

function Model1(){
    return (
        <DataProvider>
            <div className="h-screen w-screen flex w-[1000px] max-w-[1000px] min-w-[1000px] mx-auto">
                <section id="left" className="w-[45%] h-full p-8 bg-[#d5d6f8] text-[#463a80] flex flex-col justify-stretch">
                    <Profile/>
                    <Skills/>
                    <SoftSkills/>
                    <Language/>
                </section>
                <section id="right" className="w-[55%] h-full p-8 bg-[#463a80] text-[#d5d6f8]">
                    <Description/>
                    <Experiences/>
                    <Education/>
                    <Interests/>
                </section>
            </div>
        </DataProvider>
    )
}

export default Model1;