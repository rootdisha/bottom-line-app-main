import React from 'react'
import Header from '../Components/Header'
import Aboutus from "../Components/Aboutus"
import Brand from "../Components/Brand"
import StatsSection from "../Components/StatsSection"
import PortfolioSection from "../Components/PortfolioSection"
import ServiceGridfrom from "../Components/ServiceGrid.jsx"
import Testimonial from "../Components/Testimonial.jsx"
import ContactFAQ from "../Components/ContactFAQ.jsx"
import YearsOfOrganization from '../Components/YearsOfOrganization.jsx'
import TeamCarousel from '../Components/TeamCarousel.jsx'
import ServicesGrid from '../Components/ServicesGrid.jsx'

const Home = () => {
  return (
    <div>
      <Header />
      <ServicesGrid />
      <Aboutus />
      <Brand />
      <StatsSection />
      <TeamCarousel />
      <ServiceGridfrom />
      <YearsOfOrganization />
      <PortfolioSection />
      <Testimonial />
      <ContactFAQ />
    </div>
  )
}

export default Home