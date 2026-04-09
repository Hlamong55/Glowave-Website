import Clients from "../components/home/Clients"
import CTASection from "../components/home/CTASection"
import HeroSection from "../components/home/HeroSection"
import ServicesSection from "../components/home/ServiceSection"
import Testimonials from "../components/home/Testimonials"
import WhyChooseUs from "../components/home/WhyChooseUs"

function Home() {
  return (
    <>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <WhyChooseUs></WhyChooseUs>
        <Clients></Clients>
        <Testimonials></Testimonials>
        <CTASection></CTASection>
    </>
  )
}

export default Home