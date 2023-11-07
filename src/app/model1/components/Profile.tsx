import { useData } from "@/app/contexts/data";
import Image from "next/image";
import BungeeShade from 'next/font/local';

const BS = BungeeShade({src: "../../assets/fonts/Bungee_Shade/BungeeShade-Regular.ttf"})

function Profile (){
    const data = useData();
    const infoProfile = data.profile;
    return (
        <section className="w-full h-[43%] flex flex-col gap-1">
            <h2 className={`${BS.className} text-3xl`}>{infoProfile.firstname}</h2>
            <h2 className={`${BS.className} text-3xl`}>{infoProfile.lastname}</h2>
            <p className="text-2xl font-light">{infoProfile.profession}</p>
           {infoProfile.memoji&&<Image src={infoProfile.memoji} width={150} height={100} alt="Photo de profil" className="rounded-full"/>}
            <div className="flex gap-2 items-center mt-[-30px]">
                <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20px" height="20px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" xmlSpace="preserve">
                    <path fill="#463a80" d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24	C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"/>
                </svg>
                <p className="font-light">{infoProfile.address}</p>
            </div>
            <div className="flex gap-2 items-center">
                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#463a80"/>
                </svg>
                <p className="font-light">{infoProfile.phoneNumber}</p>
            </div>
            <div className="flex gap-2 items-center">
                <svg width="20px" height="20px" viewBox="0 -3.5 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Icon-Set-Filled" transform="translate(-414.000000, -261.000000)" fill="#463a80">
                            <path d="M430,275.916 L426.684,273.167 L415.115,285.01 L444.591,285.01 L433.235,273.147 L430,275.916 L430,275.916 Z M434.89,271.89 L445.892,283.329 C445.955,283.107 446,282.877 446,282.634 L446,262.862 L434.89,271.89 L434.89,271.89 Z M414,262.816 L414,282.634 C414,282.877 414.045,283.107 414.108,283.329 L425.147,271.927 L414,262.816 L414,262.816 Z M445,261 L415,261 L430,273.019 L445,261 L445,261 Z" id="mail"></path>
                        </g>
                    </g>
                </svg>
                <p className="font-light">{infoProfile.mail}</p>
            </div>
        </section>
    )
}

export default Profile;