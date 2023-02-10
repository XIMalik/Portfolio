import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Section from './components/Sections'
import Form from './components/Form'
import mercy from "./assets/mercy.png"
import wheel from "./assets/wheels.png"
import web from "./assets/iPhone 14 - 1.png"
import webb from "./assets/iPhone 14 - 3.png"
import webbb from "./assets/iPhone 14 - 4.png"
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header className="overflow-hidden" /> */}
      <Intro className="overflow-hidden"/>
      <Contact className="overflow-hidden"/>
      <div className='gap-3'>
      <Section 
      image = {web}
      image2 ={webb}
      image3 ={webbb}
      title = 'Cashapp'
      short = 'With design inspiration from kuda, Cashapp 2 is a mobile banking app that does everything you need.'
      address = ''
      link = 'Check out cashapp'
      />
      <Section 
      image = {web}
      image2 ={webb}
      image3 ={webbb}
      title = 'Cashapp'
      short = 'With design inspiration from kuda, Cashapp 2 is a mobile banking app that does everything you need.'
      address = ''
      link = 'Check out cashapp'
      />
      </div>
      

          
      <Form className="overflow-hidden"/>
    </>
  )
}

export default App
