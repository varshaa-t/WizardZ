import Brands from './sections/Brands'
import CaseStudy from './sections/CaseStudy'
import Contact from './sections/Contact'
import HeroSection from './sections/HeroSection'
import Navbar from './sections/Navbar'
import Services from './sections/Services'

function App() {

  return (
    <div className="font-space-grotesk px-20 py-1">
      <Navbar/>
      <HeroSection/>
      <Brands/>
      <Services/>
      <Contact/>
      <CaseStudy/>
    </div>
  )
}

export default App
