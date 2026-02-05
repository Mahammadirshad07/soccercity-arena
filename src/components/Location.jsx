import { MapPin, Navigation, ExternalLink, Globe, Star } from 'lucide-react';

const Location = () => {
  // Encoded Google Maps URL for: Ring Road, Moodbidri, Opp to Kundar Wash & Care
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Ring+Road+Moodbidri+Kundar+Wash+and+Care";
  
  return (
    <section id="location" className="py-20 sm:py-32 bg-black relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Address Details */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div>
              <h3 className="text-emerald-500 font-bold uppercase tracking-[0.3em] text-[10px] sm:text-xs mb-4">
                The Battleground
              </h3>
              <h2 className="text-4xl sm:text-6xl font-black text-white uppercase italic leading-tight">
                FIND US ON <br />
                <span className="text-neutral-700 text-3xl sm:text-5xl">RING ROAD</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Address Card */}
              <div className="flex items-start gap-4 p-6 bg-neutral-900/40 border border-neutral-800 rounded-3xl transition-all hover:border-emerald-500/30">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-emerald-400 w-6 h-6" />
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold uppercase tracking-tight mb-1">Location Address</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed font-medium">
                    Soccer City Arena, Ring Road,<br />
                    Moodbidri, Karnataka 574227
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    <Star size={12} className="text-emerald-400 fill-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">Opp. Kundar Wash & Care</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-900/20 border border-neutral-800/50 rounded-2xl text-center lg:text-left">
                  <div className="text-xl font-black text-white italic tracking-tighter">MOODBIDRI</div>
                  <div className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest">Center City</div>
                </div>
                <div className="p-4 bg-neutral-900/20 border border-neutral-800/50 rounded-2xl text-center lg:text-left">
                  <div className="text-xl font-black text-white italic tracking-tighter">PARKING</div>
                  <div className="text-[9px] text-neutral-500 uppercase font-bold tracking-widest">Free On-site</div>
                </div>
              </div>
            </div>

            <a 
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-300 group shadow-xl active:scale-95 w-full sm:w-auto justify-center"
            >
              <Navigation className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Open in Google Maps
            </a>
          </div>

          {/* Right Side: Map UI Card */}
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/30 to-blue-500/30 rounded-[2.5rem] blur opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-neutral-900 border border-neutral-800 rounded-[2rem] overflow-hidden shadow-2xl">
              {/* Floating UI Overlay */}
              <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center pointer-events-none">
                <div className="bg-black/70 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest">Live Arena Status</span>
                </div>
              </div>

              {/* Interaction Area */}
              <div className="aspect-square sm:aspect-video lg:aspect-[4/5] relative bg-[#1a1a1a]">
                {/* Visual Placeholder for Map */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000')] bg-cover bg-center opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700"></div>
                
                {/* Animated Map Pin Effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-8 bg-emerald-500/20 rounded-full animate-ping"></div>
                    <div className="absolute -inset-4 bg-emerald-500/40 rounded-full animate-pulse"></div>
                    <div className="relative w-12 h-12 bg-emerald-500 rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] border-2 border-white/20">
                      <MapPin className="text-black -rotate-45 w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Open in Maps Overlay */}
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]"
                >
                  <div className="bg-white text-black px-6 py-3 rounded-xl font-bold uppercase text-xs tracking-widest flex items-center gap-2 shadow-2xl">
                    <ExternalLink size={16} />
                    Click to Navigate
                  </div>
                </a>

                {/* Bottom Card Labels */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/80 backdrop-blur-xl border border-white/5 rounded-[1.5rem] flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-neutral-500 text-[9px] font-black uppercase tracking-widest">Ring Road Location</div>
                    <div className="text-white text-[11px] font-bold">Opp. Kundar Wash & Care</div>
                  </div>
                  <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center text-emerald-400 border border-white/5">
                    <Navigation size={18} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;