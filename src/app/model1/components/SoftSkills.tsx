import { useData } from "@/app/contexts/data"

function SoftSkills(){
    const data = useData();
    return (
        <section className="w-full flex flex-col h-[20%] gap-2">
            <div className="flex items-center gap-2">
                <svg fill="#463a80" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" xmlSpace="preserve">
                    <g>
                        <path d="M77.3,55.7L70,44.9l0-0.9c0-13.2-10.8-24-24-24c-1.9,0-3.8,0.2-5.7,0.7C29.7,23.1,22,32.9,22,44c0,4.9,1.2,9.3,3.6,12.7c4.2,6,7,10.8,5.3,17.3c-0.4,1.5-0.1,3,0.9,4.2c0.9,1.2,2.2,1.8,3.7,1.8h19.7c2.3,0,4.3-1.6,4.7-3.8c0.1-0.4,0.2-0.8,0.2-1.2c0.2-1.2,1.2-2,2.4-2h1.4c2.2,0,4.1-1.3,4.7-3.4c0.6-2.3,1.4-5.6,1.5-9.6h5.2c0.9,0,1.8-0.8,2.2-1.6C77.9,57.6,77.8,56.3,77.3,55.7z M61.4,42c-0.8,1.3-2.4,2-4.7,2c-12.3,0-13.2,9-13.2,13.3c0,2-1.6,3.7-3.6,3.7h-0.3c-1.7,0-3.1-1.2-3.5-2.9c-0.4-1.8-1.6-2.8-2.8-3.7c-0.8-0.6-1.6-1.2-2-2.1c-1.1-2.3-2.2-5-2.2-8.4c0-7.8,5.4-14.6,12.7-16.3c1.4-0.3,2.7-0.5,4.1-0.5c6.8,0,12.9,4.1,15.5,10.3C61.5,37.7,62.6,40.1,61.4,42z"/>
                    </g>
                </svg>
                <h2 className="text-2xl font-bold">Soft Skills</h2>       
            </div>
            <div className="flex flex-wrap gap-2">
                {data.softskills.map((softskill : {id:number, name: string}) =>(
                     <div key={softskill.id} className="border text-center rounded-lg border-[#463a80] p-1 shadow-lg">
                        <p className="font-light">{softskill.name}</p>
                     </div>
                ))}
            </div>
        </section>
    )
}

export default SoftSkills;