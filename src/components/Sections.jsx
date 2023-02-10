import React, {useEffect, useRef} from "react"
import head from "../assets/headshot.png"
import web from "../assets/iPhone 14 - 1.png"
import webb from "../assets/iPhone 14 - 2.png"
import webbb from "../assets/iPhone 14 - 4.png"



export default function Section(props){
    return(
        <div className="flex-wrap lg:flex items-center justify-center m-10 rounded-lg rounded-b-">
            <div className="w-4/4 lg:w-1/4 bg-[url('./src/assets/start.jpg')] bg-cover h-full rounded-t-lg border-b-0 border-r-2 lg:border-b-2 lg:border-r-0 lg:rounded-l-lg lg:rounded-r-none  border-solid border-2 border-cyan-500">
                <div className="text-left p-10 space-y-5">
                    <h1 className="text-5xl">{props.title}</h1>
                    <p className="text-lg">{props.short}</p>
                    <p className="text-md"><a href={props.address}>check it out</a></p>
                </div>
            </div>
            <div className="flex flex-wrap flex-col justify-center items-center md:flex-row gap-10 w-4/4 lg:w-3/4 rounded-br-lg rounded-bl-lg md:rounded-lg p-5 bg-gradient-to-tr from-cyan-500 to-{}">
                <div className="">
                    <img src={props.image} alt="" className="w-28 md:w-48 ease-out duration-500 rounded-2xl hover:scale-125" href="www.google.com" />
                </div>
                <div className="">
                    <img src={props.image2} alt="" className="w-28 md:w-48 ease-out duration-300 rounded-2xl hover:scale-125" />
                </div>
                <div className="">
                    <img src={props.image3} alt="" className="w-28 md:w-48 ease-out duration-300 rounded-2xl hover:scale-125" />
                </div>
            </div>
        </div>
    )
}
    
