import React, { useEffect, useRef } from "react";
import head from "../assets/headshot.png";
import left from "../assets/left.png";
import start from "../assets/start.jpg";
// import AOS from "aos";
// import "aos/dist/aos.css"


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
        <div className="h-screen m-3 md:m-10 p-2 md:p-5 border-2 border-cyan-500 border-solid rounded-lg">
            <div className="h-screen align-center items-center flex sm:grid grid-cols-6 bg-black p-5 bg-cover bg-50 rounded-lg overflow-hidden">
                <div className="col-span-5 align-center items-center m-auto flex-col space-y-3">
                        <p className="rounded-full bg-slate-400 border-dashed font-extrabold text-[#213] text-center w-8">1</p>
                        <p className="text-xs">Junior Frontend Developer and UI Designer</p>
                        <h1 className="text-7xl">Malik Awesu</h1>               
                </div>
                <div className="col-span-1 p-10 my-auto">
                    <div className="leading-loose sm:flex justify-center sm:rotate-90 py-auto my-auto gap-20">
                        <p className=" hover:text-slate-500" data-aos="fade-left" data-aos-duration="300">UI Design</p>
                        <p className="hover:text-slate-500" data-aos="fade-left" data-aos-duration="500">Web Development</p>
                        <p className="hover:text-slate-500" data-aos="fade-left" data-aos-duration="700">Contact me</p>
                    </div>
                </div>
            
        </div>
        </div>
        
        


        )
}