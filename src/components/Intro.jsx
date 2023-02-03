import React, { useEffect, useRef } from "react";
import head from "../assets/headshot.png";
import left from "../assets/left.png";
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
    //   }, []);

    return (
        <div className="h-screen flex sm:grid grid-cols-6 bg-[url('./src/assets/grr.jpg')] bg-cover md:m-10  rounded-md overflow-hidden">
            <div className="col-span-5 align-center flex">
                <div className="text-left space-y-3 p-10 my-auto align-center bg-black">
                    <p className="rounded-full bg-slate-400 border-dashed text-[#213] text-center w-8">1</p>
                    <p className="text-xs" data-aos="fade-right" data-aos-duration="300">Junior Frontend Developer and UI Designer</p>
                    <h1 className="text-6xl" data-aos="fade-up" data-aos-duration="500">Malik Awesu</h1>
                </div>                
               
            </div>
            <div className="col-span-1 p-10 my-auto">
                <div className="leading-loose sm:flex justify-center sm:rotate-90 py-auto my-auto gap-20">
                    <p className=" hover:text-slate-500" data-aos="fade-left" data-aos-duration="500">UI Design</p>
                    <p className="hover:text-slate-500" data-aos="fade-left" data-aos-duration="700">Web Development</p>
                    <p className="hover:text-slate-500" data-aos="fade-left" data-aos-duration="900">Contact me</p>
                </div>
            </div>
            
        </div>
        


        )
}