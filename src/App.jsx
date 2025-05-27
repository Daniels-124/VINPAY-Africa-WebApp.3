import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { Features } from './components/Features';
import HowItWorks from './components/HowItWorks';

function App() {
   return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
    </div>
  );
}

export default App
