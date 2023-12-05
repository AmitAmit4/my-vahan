import React from 'react'
// import PracticeOne from './PracticeOne'
import VahaanFeatures from './VahaanFeatures'
import WhyChooseVahaan from './WhyChooseVahaan'
import VahanPhones from './VahanPhones'
import OurTestimonials from './OurTestimonials'
import VahanFeaturesOne from './VahanFeaturesOne'
import SectionFirst from './SectionFirst'

const Home = () => {
  return (
    <>
      {/* <PracticeOne/> */}
        <SectionFirst/>
        <VahaanFeatures/>
        <WhyChooseVahaan/>
        <VahanPhones/>
        <OurTestimonials/>
        <VahanFeaturesOne/>
    </>
  )
}

export default Home
