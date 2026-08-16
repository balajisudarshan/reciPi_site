import NavBar from "./components/NavBar"
import Features from "./pages/Features"
import Hero from "./pages/Hero"
import Screenshots from "./pages/Screenshots"
const Home = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Features />
      <Screenshots />
    </div>
  )
}

export default Home