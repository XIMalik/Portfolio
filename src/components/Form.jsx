import React, { useRef } from "react";
import pic2 from "../assets/pic2.jpg"


export default function Form(){


    return(
        <div className="lg:grid grid-cols-2 align-center h-screen">
            <div className="hidden lg:block bg-[#161313] p-10 md:h-screen">
                <img src={pic2} alt="" className=" mx-auto md:block object-cover h-[100%] w-[100%] hidden"/>
            </div>

            <form 
            netlify
            action="post" 
            name="contact v1" 
            data-netlify="true"
            onSubmit="submit"

            className="bg-[url('/assets/pic2.png')] grid grid-cols-2 w-fit mx-auto gap-5 p-4">
                
                <input 
                type="hidden" 
                name="form-name" 
                value="contact v1"
                />

                <div className="space-y-2 col-span-2 field">
                    <h1 className="text-2xl md:text-5xl">Get in touch</h1>
                    <p className="text-slate-400">Lets work together on your project</p>
                </div>

                <div className="gap-5 flex justify-center col-span-2">
                    <div className="w-1/2 space-y-2 field">
                        <label htmlFor="name" className="text-left text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Johnny Depp" className="pb-3 pt-3 pl-5 text-zinc-300 block w-full rounded focus:outline-none focus:shadow-md focus:border-10 shadow-slate-900 bg-[#201f1f] placeholder-gray-800" />
                    </div>
                    <div className="w-1/2 space-y-2 field">
                        <label htmlFor="job" className="text-left text-gray-600">Job</label>
                        <input type="text" name="job" id="job" placeholder="UI Design" className="pb-3 pt-3 pl-5 text-zinc-300 block px-4 py-2 w-full rounded placeholder-gray-800 focus:outline-none focus:shadow-md focus:border-10 focus:border-red-500 shadow-slate-900 bg-[#201f1f]"  />
                    </div>

                </div>
                <div className="col-span-2 space-y-2 field">
                    <label htmlFor="email" className="text-gray-600">Email address</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="col-span-2 pb-3 pt-3 pl-5 text-zinc-300 block px-4 py-2 w-full rounded placeholder-gray-800 focus:outline-none focus:shadow-md focus:border-1 focus:border-red-500 shadow-slate-900 bg-[#201f1f]" />
                </div>
                <div className="col-span-2 space-y-2 field">
                    <label htmlFor="inquiry" className="text-gray-600">Drop an inquiry</label>
                    <textarea placeholder="Tell me what you have in mind" name="inquiry" id="inquiry" cols="30" rows="5" className="block placeholder-gray-800 focus:outline-none w-full col-span-2 rounded-lg bg-[#201f1f] p-5"></textarea>
                </div>
                
                <button className="text-center col-span-2 bg-slate-900 pt-3 pb-3 rounded-md transition-colors ease-in-out delay-300 duration-300 hover:bg-gradient-to-r from-slate-900 to-pink-500 hover:cursor-pointer" type="submit">Submit</button>
                
            </form>
        </div>
            
    )
}