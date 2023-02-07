import React, {useEffect, useRef} from "react"
import head from "../assets/headshot.png"
import left from "../assets/left.png"


export default function Section(props){


      const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    return(
            <div className="">
                <div className="text-left">
                </div> 
                
                <div className="">
                    <div class="flex justify-center mt-2" data-aos= "fade-left" data-aos-duration="100">
                        <div class="bg-black flex flex-col md:flex-row md:max-w-xl rounded-lg ease-in duration-200 hover:bg-[#070b1c] shadow-lg">
                                <img class=" w-full h-72 hover:h-69 md:h-auto object-cover md:w-52 rounded-t-lg md:rounded-none md:rounded-l-lg" src={props.image} alt="" />
                            <div class="p-6 flex flex-col justify-start roounded">
                            <h1 className="text-sm mb-2 text-left text-slate-600" data-aos= "fade-left" data-aos-duration="300">Project {props.number}</h1>
                                <h5 class="text-gray-100 text-4xl font-medium mb-2">{props.title}</h5>
                                <p class="text-gray-700 text-base mb-4">
                                    {props.description}
                                </p>
                                <p class="text-gray-600 text-xs">{props.tex}</p>
                                <p className="text-sm text-slate-300 hover:text-slate-700 w-fit">{props.link}</p>
                            </div>
                        </div>
                    </div>
            
                </div>                
            </div>                
    )
}