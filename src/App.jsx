import Footer from "./components/layout/Footer"
import Navbar from "./components/layout/Navbar"
import ScrollTopBtn from "./components/layout/ScrollTopBtn"
import WhatsAppButton from "./components/layout/WhatsAppBtn"
import AppRoutes from "./routes/AppRoutes"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <AppRoutes></AppRoutes>
    <ScrollTopBtn></ScrollTopBtn>
    <WhatsAppButton></WhatsAppButton>
    <Footer></Footer>
    </>
  )
}

export default App