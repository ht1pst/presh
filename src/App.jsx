import { useState } from 'react'
import Hero from './Home/Hero'
import Section2 from './Home/Section2'
import Section3 from './Home/Section3'
import Section4 from './Home/Section4'
import AboutSec1 from './About/AboutSec1'
import Section5 from './Home/Section5'
import Section6 from './Home/Section6'
import Contact from './Contact/Contact'
import Projects from './Project/Projects'
import Testimony from './Home/Testimony'
import Testimony2 from './About/Testimony2'
import Footer2 from './About/Footer2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
function App() {
 

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Section2 />
              <Testimony/>
              <Section3 />
              
              <Section5 />
              <Section6 />
            </>
          }
        />

        <Route
          path="/about"
          element={
          <>
          <AboutSec1 />
          <Testimony2/>
          <Footer2/>
</>
          }
        />

          <Route
          path="/contact"
          element={<Contact/>}
        />


        
          <Route
          path="/projects"
          element={<Projects/>}
        />


      </Routes>
    </Router>
  )
}

export default App
