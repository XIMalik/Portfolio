import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Intro from './components/Intro'
import Section from './components/Sections'
import Form from './components/Form'
import Display from './components/Display'
import mercy from "./assets/mercy.png"
import wheel from "./assets/wheels.png"
import web from "./assets/iPhone 14 - 1.png"
import webb from "./assets/iPhone 14 - 3.png"
import webbb from "./assets/iPhone 14 - 4.png"
import Contact from './components/Contact'
// import {BrowserRouter as Router, Switch, Link} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header className="overflow-hidden" /> */}
      <Intro className="overflow-hidden"/>
      <Contact className="overflow-hidden"/>
      <div className='gap-2'>
        <h1 className='text-center text-2xl text-cyan-500 m-10'>UI DESIGNS</h1>
      <Section 
      image = {web}
      image2 ={webb}
      image3 ={webbb}
      title = 'Cashapp'
      short = 'With design inspiration from kuda, Cashapp 2 is a mobile banking app that does everything you need.'
      address = ''
      link = 'Check out cashapp'
      /></div>
      <Display />

      

          
      <Form className="overflow-hidden"/>
    </>
  )
}

export default App
