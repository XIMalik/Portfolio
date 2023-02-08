import React, { useRef } from "react";
import { useForm } from "react-hook-form"
import pic2 from "../assets/pic2.jpg"
import emailjs from "@emailjs/browser"
import { data } from "autoprefixer";


export default function Form(){

    const {register, handleSubmit, formState: { errors }} = useForm();

    const form = useRef();

//     const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_htqu2g8', 'template_fq4k5y9', form.current, 'TKeBOdyaaEsd3EBUX')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//   };

    return(
        <div className="lg:grid grid-cols-2 align-center h-screen">
            <div className="hidden lg:block bg-[#161313] p-10 md:h-screen">
                <img src={pic2} alt="" className=" mx-auto md:block object-cover h-[100%] w-[100%] hidden" data-aos="fade-left"/>
            </div>
            <form ref={form} onSubmit={handleSubmit(data)} className="bg-[url('/assets/pic2.png')] grid grid-cols-2 w-fit mx-auto gap-5 p-4">
                <div className="space-y-2 col-span-2 ">
                    <h1 className="text-2xl md:text-5xl">Get in touch</h1>
                    <p className="text-slate-400">Lets work together on your project</p>
                </div>

                <div className="gap-5 flex justify-center col-span-2">
                    <div className="w-1/2 space-y-2">
                        <label htmlFor="firstname" className="text-left text-gray-600">Name</label>
                        <input className="pb-3 pt-3 pl-5 text-zinc-300 block w-full rounded focus:outline-none focus:shadow-md focus:border-10 shadow-slate-900 bg-[#201f1f] placeholder-gray-800" type="text" name="firstname" placeholder="Johnny Depp" {...register('name', { required: true, minLength: 3 })} />
                    </div>
                    <div className="w-1/2 space-y-2">
                        <label htmlFor="firstname" className="text-left text-gray-600">Job</label>
                        <input className="pb-3 pt-3 pl-5 text-zinc-300 block px-4 py-2 w-full rounded placeholder-gray-800 focus:outline-none focus:shadow-md focus:border-10 focus:border-red-500 shadow-slate-900 bg-[#201f1f]" type="text" name="firstname" placeholder="UI Design" {...register('job', { required: true, minLength: 2 })} />
                    </div>

                </div>
                <div className="col-span-2 space-y-2">
                    <label htmlFor="mail" className="text-gray-600">Email address</label>
                    <input className="col-span-2 pb-3 pt-3 pl-5 text-zinc-300 block px-4 py-2 w-full rounded placeholder-gray-800 focus:outline-none focus:shadow-md focus:border-1 focus:border-red-500 shadow-slate-900 bg-[#201f1f]" type="text" placeholder="johndoe@gmail.com" {...register('mail', { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
                </div>
                <div className="col-span-2 space-y-2">
                    <label htmlFor="mail" className="text-gray-600">Drop an inquiry</label>
                    <textarea className="block placeholder-gray-800 focus:outline-none w-full col-span-2 rounded-lg bg-[#201f1f] p-5" placeholder="Let me know what you have in mind" name="" id="" cols="30" rows="5" {...register('request', { required: true })}></textarea>
                </div>
                <input className="text-center col-span-2 bg-slate-900 pt-3 pb-3 rounded-md transition-colors ease-in-out delay-300 duration-300 hover:bg-gradient-to-r from-slate-900 to-pink-500 hover:cursor-pointer" type="submit"/>
                <div className="col-span-2 text-block text-center space-y-2">
                    <p className="text-sm text-center colspan-2">{errors.name && <p> ✴︎ Please enter your name</p>}</p>
                    <p className="text-sm text-center colspan-2">{errors.mail && <p> :\ Invalid email address</p>}</p>
                    <p className="text-sm text-center colspan-2">{errors.request && <p>  ..Let me know any question you may have</p>}</p>
                    <p className="text-sm text-center colspan-2">{errors.job && <p>What do you want to build or?</p>}</p>
                </div>
                
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