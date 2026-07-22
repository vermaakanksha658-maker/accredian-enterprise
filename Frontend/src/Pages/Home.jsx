import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Herosession'
import TrackRecord from '../Components/Track'
import ProvenPartnerships from '../Components/Proven'
import Acredian from '../Components/Acredian'
import DomainExpertise from '../Components/Domain'
import CourseSegmentation from '../Components/Course'
import SkillEnhancement from '../Components/Skill'
import CATFramework from '../Components/CAT'
import DeliverResults from '../Components/Deliver'
import Footer from '../Components/Footer'
import CTASection from '../Components/CTA'
import Testimonials from '../Components/Testimonial'
import FAQ from '../Components/FAQ'

function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <TrackRecord/>
      <ProvenPartnerships/>
      <Acredian/>
      <DomainExpertise/>
      <CourseSegmentation/>
      <SkillEnhancement/>
      <CATFramework/>
      <DeliverResults/>
      <FAQ/>
      <Testimonials/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Home
