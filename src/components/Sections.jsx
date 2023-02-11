import React, {useEffect, useRef} from "react"
import head from "../assets/headshot.png"
import web from "../assets/iPhone 14 - 1.png"
import webb from "../assets/iPhone 14 - 2.png"
import webbb from "../assets/iPhone 14 - 4.png"



export default function Section(props){
    return(
        <div className="flex-wrap lg:flex items-center justify-center m-5 rounded-lg">
            <div className="w-4/4 lg:w-1/4 bg-[url('./src/assets/start.jpg')] bg-cover h-full rounded-t-lg lg:rounded-l-lg lg:rounded-r-none">
                <div className="text-left p-10 space-y-5">
                    <h1 className="text-5xl text-cyan-500">{props.title}</h1>
                    <p className="text-lg">{props.short}</p>
                    <p className="text-md"><a href={props.address}>check it out</a></p>
                </div>
            </div>
            <div className="grid grid-cols-1 place-items-center sm:grid-cols-3 gap-3 w-4/4 lg:w-3/4 rounded-br-lg rounded-bl-lg md:rounded-lg p-5 border-2 border-solid border-cyan-500">
                <div className="">
                    <img src={props.image} alt="" className="w-36 sm:w-48 ease-out duration-500 rounded-2xl hover:scale-125" href="www.google.com" />
                </div>
                <div className="">
                    <img src={props.image2} alt="" className="w-36 sm:w-48 ease-out duration-300 rounded-2xl hover:scale-125" />
                </div>
                <div className="">
                    <img src={props.image3} alt="" className="w-36 sm:w-48 ease-out duration-300 rounded-2xl hover:scale-125" />
                </div>
            </div>
        </div>
    )
}
    
