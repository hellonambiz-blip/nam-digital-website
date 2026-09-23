import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhoWeHelp from './components/WhoWeHelp';
import OurWork from './components/OurWork';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhoWeHelp />
        <OurWork />
        <HowItWorks />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
