import Hero from "./components/Hero";
import Facilities from "./components/Facilities";
import AboutTurf from "./components/AboutTurf";
import Gallery from "./components/Gallery";  // ← NEW
import Location from "./components/Location";
import { WhatsAppButton } from "./components/common/WhatsAppButton";
import Footer from "./components/Footer";

const App = () => {
  const whatsappNumber = '919740265652';
  
  return (
    <div className="min-h-screen font-sans antialiased bg-gradient-to-br from-black via-gray-900 to-emerald-900/10">
      <WhatsAppButton number={whatsappNumber} />
      
      <Hero number={whatsappNumber} />
      <Facilities number={whatsappNumber} />
      <AboutTurf number={whatsappNumber} />
      <Gallery />  {/* ← ADD HERE */}
      <Location />
      <Footer />
      
    </div>
  );
};

export default App;
