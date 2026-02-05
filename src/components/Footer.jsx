import { Instagram, Facebook, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-16 pb-8 border-t border-neutral-900 relative overflow-hidden">
      {/* Huge Background Brand Text - Hidden on small mobile to avoid horizontal scroll bugs, visible on tablet+ */}
      <div className="absolute -bottom-6 left-0 w-full opacity-[0.03] pointer-events-none select-none overflow-hidden hidden sm:block">
        <h2 className="text-[18vw] font-black text-white uppercase italic whitespace-nowrap leading-none">
          SOCCER CITY MOODBIDRI
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
          
          {/* Brand Info - Centered on Mobile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h3 className="text-3xl font-black italic text-white tracking-tighter">
              SOCCER <span className="text-emerald-500">CITY.</span>
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed max-w-xs sm:max-w-sm">
              The premier sports destination in Moodbidri. Experience FIFA-grade turf and our pro-gaming lounge designed for champions.
            </p>
            <div className="flex gap-5">
              {[Instagram, Facebook, Globe].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-11 h-11 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Location Info - Clearer Visual Hierarchy for Mobile */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] bg-neutral-900 px-4 py-1.5 rounded-full border border-neutral-800">
              The Location
            </h4>
            <div className="space-y-5 w-full">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3 group">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MapPin className="text-emerald-500" size={18} />
                </div>
                <p className="text-neutral-400 text-sm italic font-medium">
                  Ring Road, Moodbidri,<br />
                  <span className="text-emerald-400/80 not-italic font-bold text-xs uppercase">Opp. Kundar Wash & Care</span><br />
                  Karnataka 574227
                </p>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Phone className="text-emerald-500" size={18} />
                </div>
                <p className="text-white text-base font-black italic tracking-wider">+91 00000 00000</p>
              </div>
            </div>
          </div>

          {/* Quick Links - Organized in 2 columns on Mobile */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-white text-[10px] font-black uppercase tracking-[0.3em] bg-neutral-900 px-4 py-1.5 rounded-full border border-neutral-800">
              Quick Navigation
            </h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-x-12 gap-y-4 text-xs font-black uppercase tracking-[0.15em] text-neutral-500 w-full max-w-[280px] md:max-w-none mx-auto md:mx-0">
              <li>
                <a href="#" className="flex items-center justify-center md:justify-start gap-2 hover:text-emerald-400 transition-colors group">
                  Home <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#about" className="flex items-center justify-center md:justify-start gap-2 hover:text-emerald-400 transition-colors group">
                  The Turf <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#facilities" className="flex items-center justify-center md:justify-start gap-2 hover:text-emerald-400 transition-colors group">
                  Facilities <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#location" className="flex items-center justify-center md:justify-start gap-2 hover:text-emerald-400 transition-colors group">
                  Map <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar - Stacked on Mobile */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col items-center gap-4 text-center">
          <p className="text-[9px] sm:text-[10px] text-neutral-600 font-black uppercase tracking-[0.2em]">
            © {currentYear} Soccer City Arena Moodbidri. 
          </p>
          <div className="flex gap-6">
             <span className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.2em] hover:text-emerald-500 cursor-pointer transition-colors">Privacy</span>
             <span className="text-[9px] text-neutral-700 font-black uppercase tracking-[0.2em] hover:text-emerald-500 cursor-pointer transition-colors">Terms of Play</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;