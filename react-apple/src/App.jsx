import ValueSection from "./assets/components/ValueSection.jsx";
import Footer from "./assets/components/Footer.jsx";
import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

import Navbar from "./assets/components/Navbar.jsx";
import HeroSection from "./assets/components/HeroSection.jsx";
import CardSlider from "./assets/components/CardSlider.jsx";
import Section from "./assets/components/Section.jsx";
import Product from "./assets/components/Product.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <HeroSection/>
      <CardSlider/>
      <Section/>
      <Product/>
      <ValueSection/>
      <Footer/>
    </>
  )
}

export default App;