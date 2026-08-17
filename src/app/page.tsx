import NavBar from "./components/NavBar"
import Features from "./pages/Features"
import Hero from "./pages/Hero"
import Screenshots from "./pages/Screenshots"
import Footer from "./components/Footer"

const Home = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Features />
      <Screenshots />
      <Footer />
    </div>
  )
}

export default Home