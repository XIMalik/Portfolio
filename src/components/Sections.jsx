import React, {useEffect, useRef} from "react"
import head from "../assets/headshot.png"
import web from "../assets/iPhone 14 - 1.png"
import webb from "../assets/iPhone 14 - 2.png"
import webbb from "../assets/iPhone 14 - 4.png"



export default function Section(props){
    return(
        <div className="flex bg-red-300 items-center pt-28 pb-28">
            <div className="flex w-1/4">
                <h5 className="rotate-90 mt-10">{props.desc}</h5>
                <div>
                    <h1 className="text-3xl">{props.title}</h1>
                    <p>{props.short}</p>
                </div>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center md:flex-row gap-10 w-3/4">
                <div className="">
                    <img src={props.image} alt="" className="w-48 ease-out duration-300 rounded-2xl hover:w-52" />
                </div>
                <div className="">
                    <img src={props.image} alt="" className="w-48 ease-out duration-300 rounded-2xl hover:w-52" />
                </div>
                <div className="">
                    <img src={props.image} alt="" className="w-48 ease-out duration-300 rounded-2xl hover:w-52" />
                </div>
            </div>
        </div>
    )
}
    //   const ref = useRef(null);

    // const handleClick = () => {
    //     ref.current?.scrollIntoView({behavior: 'smooth'});
    // };

    // return(
    //         <div className="">
    //             <div className="text-left">
    //             </div> 
                
    //             <div className="mb-5 lg:mb-">
    //                 <div class="flex justify-center mt-2" data-aos= "fade-left" data-aos-duration="100">
    //                     <div class="bg-[#00080D] flex flex-col md:flex-row md:max-w-xl rounded-lg ease-in duration-200 hover:bg-[#070b1c]">
    //                             <img class=" w-full h-72 hover:h-69 md:h-auto object-cover md:w-52 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
    //                         <div class="p-6 flex flex-col justify-start roounded">
    //                         <h1 className="text-sm mb-2 text-left text-slate-600" data-aos= "fade-left" data-aos-duration="300">Project {props.number}</h1>
    //                             <h5 class="text-gray-100 text-4xl font-medium mb-2">{props.title}</h5>
    //                             <p class="text-gray-700 text-base mb-4">
    //                                 {props.description}
    //                             </p>
    //                             <p class="text-gray-600 text-xs">{props.tex}</p>
    //                             <p className="text-sm text-slate-300 hover:text-slate-700 w-fit">{props.link}</p>
    //                         </div>
    //                     </div>
    //                 </div>
            
    //             </div>                
    //         </div>                
    
