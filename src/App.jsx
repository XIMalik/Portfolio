import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Section from './components/Sections'
import Form from './components/Form'
import head from "./assets/headshot.png"
import left from "./assets/left.png"
import home from "./assets/home.png"
import web from "./assets/webb.png"
import mercy from "./assets/mercy.png"
import wheel from "./assets/wheels.png"
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header className="overflow-hidden" />
      <Intro className="overflow-hidden"/>
      <Contact className="overflow-hidden"/>
     <div className="lg:grid grid-cols-2 bg-[url('./src/assets/star.jpg')] gap-5 p-10 mb-2 ease-in duration-300 overflow-hidden">
                <div className="text-left pl-5 col-span-2 space-y-2">
                    <h1 className="text-5xl" data-aos= "fade-left" data-aos-duration="300">User Interface Designs</h1>
                    <h1 className="text-lg text-slate-300" data-aos= "fade-left" data-aos-duration="300">Made with Figma</h1>
                </div>
                <Section 
              title= "Cashapp 2"
              description="Built with inspiration from the Kuda App, Cashapp 2 is my take at a modern and pleasing online banking experience"
              image={home}
              number="1"
              link="www.google.com"
              onClick={console.log("Hello World")}
          />
          <Section 
              title= "Cashapp 2 Web"
              description= "A landing advertising page for Cashapp 2, this page highlghts features of the app and engages the user throughout."
              image={web}
              number="2"
              link="www.google.com"
          />
          <Section 
              title= "Wheelhouse"
              description="Built with inspiration from the Kuda App, Cashapp 2 is my take at a modern and pleasing online banking experience"
              image={wheel}
              number="3"
              link="www.google.com"
          />
          <Section 
              title= "Carslot"
              description= "A passion project I made, imagining an application where it was as easy as swiping to buy or rent luxury cars."
              image={mercy}
              number="3"
              link="www.google.com"
          />        
                </div>
          
      <Form className="overflow-hidden"/>
    </>
  )
}

export default App
