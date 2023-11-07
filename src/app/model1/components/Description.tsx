import { useData } from "@/app/contexts/data";

function Description (){
    const data = useData();
    return (
        <section className="w-full flex h-[20%]">
           {data.description&& <p>{data.description}</p>}
        </section>
    )
}

export default Description;