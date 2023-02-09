import React, { useRef } from "react";
//import { useForm } from "react-hook-form"
import pic2 from "../assets/pic2.jpg"
//import emailjs from "@emailjs/browser"
import { data } from "autoprefixer";


export default function Form(){

    // const handleSubmit = (event) => {
    //     event.preventDefault();
      
    //     const myForm = event.target;
    //     const formData = new FormData(myForm);
        
    //     fetch("/", {
    //       method: "POST",
    //       headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //       body: new URLSearchParams(formData).toString(),
    //     })
    //       .then(() => console.log("Form successfully submitted"))
    //       .catch((error) => alert(error));
    //   };
      
    //   document
    //     .querySelector("form")
    //     .addEventListener("submit", handleSubmit);

    return(
        <div className="lg:grid grid-cols-2 align-center h-screen">
            <div className="hidden lg:block bg-[#161313] p-10 md:h-screen">
                <img src={pic2} alt="" className=" mx-auto md:block object-cover h-[100%] w-[100%] hidden"/>
            </div>
            <form action="POST" data-netlify="true" className="bg-[url('/assets/pic2.png')] grid grid-cols-2 w-fit mx-auto gap-5 p-4">
                <div className="space-y-2 col-span-2 ">
                    <h1 className="text-2xl md:text-5xl">Get in touch</h1>
                    <p className="text-slate-400">Lets work together on your project</p>
                </div>

                <div className="gap-5 flex justify-center col-span-2">
                    <div className="w-1/2 space-y-2">
                        <label htmlFor="name" className="text-left text-gray-600">Name</label>
                        <input type="text" name="name" id="name" placeholder="Johnny Depp" className="pb-3 pt-3 pl-5 text-zinc-300 block w-full rounded focus:outline-none focus:shadow-md focus:border-10 shadow-slate-900 bg-[#201f1f] placeholder-gray-800" />
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label htmlFor="name" className="text-left text-gray-600">Job</label>
                        <input type="text" name="job" id="job" placeholder="UI Design" className="pb-3 pt-3 pl-5 text-zinc-300 block px-4 py-2 w-full rounded placeholder-gray-800 focus:outline-none focus:shadow-md focus:border-10 focus:border-red-500 shadow-slate-900 bg-[#201f1f]"  />
                    </div>

                </div>
                <div className="col-span-2 space-y-2">
                    <label htmlFor="mail" className="text-gray-600">Email address</label>
                    <input type="email" name="email" id="email" placeholder="johndoe@gmail.com" className="col-span-2 pb-3 pt-3 pl-5 text-zinc-300 block px-4 py-2 w-full rounded placeholder-gray-800 focus:outline-none focus:shadow-md focus:border-1 focus:border-red-500 shadow-slate-900 bg-[#201f1f]" />
                </div>
                <div className="col-span-2 space-y-2">
                    <label htmlFor="mail" className="text-gray-600">Drop an inquiry</label>
                    <textarea placeholder="Tell me what you have in mind" name="inquiry" id="inquiry" cols="30" rows="5" className="block placeholder-gray-800 focus:outline-none w-full col-span-2 rounded-lg bg-[#201f1f] p-5"></textarea>
                </div>
                
                <div className="field">
                    <div data-netlify-recaptcha="true"></div>
                </div>
                
                <input className="text-center col-span-2 bg-slate-900 pt-3 pb-3 rounded-md transition-colors ease-in-out delay-300 duration-300 hover:bg-gradient-to-r from-slate-900 to-pink-500 hover:cursor-pointer" type="submit"/>
                {/* <div className="col-span-2 text-block text-center space-y-2">
                    <p className="text-sm text-center colspan-2">{errors.name && <p> ✴︎ Please enter your name</p>}</p>
                    <p className="text-sm text-center colspan-2">{errors.mail && <p> :\ Invalid email address</p>}</p>
                    <p className="text-sm text-center colspan-2">{errors.request && <p>  ..Let me know any question you may have</p>}</p>
                    <p className="text-sm text-center colspan-2">{errors.job && <p>What do you want to build or?</p>}</p>
                </div> */}
                
            </form>
        </div>
            
    )
}

// function App() {
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm();
  
//     return (
//       <form onSubmit={handleSubmit((data) => console.log(data))}>
//         <input {...register('firstName')} />
//         <input {...register('lastName', { required: true })} />
//         {errors.lastName && <p>Last name is required.</p>}
//         <input {...register('age', { pattern: /\d+/ })} />
//         {errors.age && <p>Please enter number for age.</p>}
//         <input type="submit" />
//       </form>
//     );
//   }