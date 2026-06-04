import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedScroll from './components/FeaturedScroll';
import ClientLogos from './components/ClientLogos';
import StatsImpact from './components/StatsImpact';
import Services from './components/Services';
import AICapabilities from './components/AICapabilities';
import TechStack from './components/TechStack';
import Process from './components/Process';
import Work from './components/Work';
import Industries from './components/Industries';
import Manifesto from './components/Manifesto';
import Guarantee from './components/Guarantee';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import GlobalPresence from './components/GlobalPresence';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
    <div className="bg-white min-h-screen text-[#0f0f0f] relative antialiased scroll-smooth selection:bg-[#6c2bd9] selection:text-white">
      <Navbar />
      <Hero />
      <FeaturedScroll />
      <ClientLogos />
      <StatsImpact />
      <Services />
      <AICapabilities />
      <TechStack />
      <Process />
      <Work />
      <Industries />
      <Manifesto />
      <Guarantee />
      <Awards />
      <Testimonials />
      <FAQ />
      <Contact />
      <GlobalPresence />
      <Footer />
    </div>
    </ThemeProvider>
  );
}
