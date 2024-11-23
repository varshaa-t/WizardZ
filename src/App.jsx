import Brands from './sections/Brands'
import HeroSection from './sections/HeroSection'
import Navbar from './sections/Navbar'

function App() {

  return (
    <div className="font-space-grotesk px-20 py-1">
      <Navbar/>
      <HeroSection/>
      <Brands/>
    </div>
  )
}

export default App
