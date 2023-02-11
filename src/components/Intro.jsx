import React, { useEffect, useRef } from "react";
import head from "../assets/headshot.png";
import left from "../assets/left.png";
import start from "../assets/start.jpg";

export default function Intro (){

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'});
    };

    const when = Date()
    const [personsname, setPersonsName] = React.useState("Malik")
    console.log(personsname)

    function changeIt(){
        setPersonsName("Lacy")
    }

    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    //   }, []) flex-col sm:grid grid-cols-6;

    return (
        <div className="h-3/4 lg:h-3/6 m-3 md:m-10 p-2 md:p-2 border-2 rounded-lg border-cyan-500 border-solid">
            <div className="h-3/4 lg:h-4/6 text-left md:align-center items-center sm:flex justify-between p-5 bg-cover bg-50 overflow-hidden">
                <div className="align-center items-center m-auto flex-col space-y-3">
                        <p className="rounded-full bg-slate-400 border-dashed font-extrabold text-[#213] text-center w-8">1</p>
                        <p className="text-xs">Junior Frontend Developer and UI Designer</p>
                        <h1 className="text-7xl">Malik Awesu</h1>     
                        <p className="text-xs text-cyan-900">I love building shit</p>
          
                </div>
                <div className="pt-10 pb-10">
                    <div className="leading-loose sm:flex text-left justify-between items-center align-center py-auto my-auto gap-20 mr-10">
                        <p className=" hover:text-cyan-500">UI Design</p>
                        <p className="hover:text-cyan-500">Web Development</p>
                        <p className="hover:text-cyan-500">Contact me</p>
                    </div>
                </div>
            
        </div>
        </div>
        
        


        )
}