import NavBar from "./components/NavBar"
import Features from "./pages/Features"
import Hero from "./pages/Hero"
const Home = () => {
  return (
    <div className="font-sans">
      <NavBar />
      <Hero />
      <Features />
    </div>
  )
}

export default Home