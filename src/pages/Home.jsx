import Clients from "../components/home/Clients"
import HeroSection from "../components/home/HeroSection"
import ServicesSection from "../components/home/ServiceSection"
import WhyChooseUs from "../components/home/WhyChooseUs"

function Home() {
  return (
    <>
        <HeroSection></HeroSection>
        <ServicesSection></ServicesSection>
        <WhyChooseUs></WhyChooseUs>
        <Clients></Clients>
    </>
  )
}

export default Home