import { useData } from "@/app/contexts/data";
import { Interest } from "@/app/contexts/data";

function Interests (){
    const data = useData();
    return (
        <section className="flex flex-col w-full h-[10%] gap-1">
        <div className="flex items-center gap-4">
            <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.1579 8.60503C20.614 10.1139 20.614 13.8861 18.1579 15.395L11.5263 19.4689C9.07017 20.9778 6 19.0917 6 16.074L6 7.92602C6 4.90827 9.07018 3.02218 11.5263 4.53105L18.1579 8.60503Z" stroke="#d5d6f8" strokeWidth="1.5"/>
            </svg>
           <h1 className="text-2xl">Intêrets</h1>
       </div>
       <div className="flex flex-wrap gap-2">
       {data.interests.map((interest : Interest) =>(
               <div key={interest.id} className="flex flex-col gap-[1px] rounded-lg border p-1 shadow-lg font-light">
                   <p>{interest.name}</p>
               </div>
           ))}
       </div>
   </section>
    )
}

export default Interests