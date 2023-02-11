import React from "react";
import rndm from "../assets/rndm.png"
import acquire from "../assets/acquire.com.png"

export default function Display(){
    return(
        <div className="m-5 mt-5 pt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 border-t-2 border-cyan-500">
            <img src={rndm} alt="" className="ease-out duration-300 hover:scale-125 hover:flex justify-center" />
            <img src={acquire} alt="" />
        </div>
    )
}