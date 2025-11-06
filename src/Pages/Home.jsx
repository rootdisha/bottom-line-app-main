import React from 'react'
import Header from '../Components/Header'
import ServicesGrid from '../Components/ServicesGrid.jsx'
import Aboutus from "../Components/Aboutus"
import Brand from "../Components/Brand"
import StatsSection from "../Components/StatsSection"
import Testimonial from "../Components/Testimonial.jsx"
import ContactFAQ from "../Components/ContactFAQ.jsx"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <Header />

      {/* Solutions & Services Overview */}
      <ServicesGrid />

      {/* Brief About Us */}
      <Aboutus />

      {/* Client Logos */}
      <Brand />

      {/* Stats/Metrics */}
      <StatsSection />

      {/* Client Testimonials */}
      <Testimonial />

      {/* Contact & FAQ */}
      <ContactFAQ />
    </div>
  )
}

export default Home