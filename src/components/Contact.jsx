import React from "react";

export default function Contact(props){
    return(

        <div className="my-10 m-10 flex justify-evenly align-center items-center rounded-full border-2 border-solid border-cyan-500 bg-[url('./src/assets/star.jpg')]">
            <div>
                <h1 className="hidden lg:block text-xl">Technologies I work with</h1>
            </div>
                <div>
                    <div className="flex justify-center align-center gap-3 py-5 px-10">

                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105" />   
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"  className="w-16 sm:w-16 ease-out duration-100 hover:scale-105"/>
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105" />
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105"/>
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-16 sm:w-16 ease-out duration-100 hover:scale-105"/>
                    </div>
                </div>
                </div>
            </div>
    )
};