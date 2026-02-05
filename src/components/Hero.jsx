import { useState, useEffect } from 'react';

const Hero = ({ number }) => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeTag, setActiveTag] = useState(0);

  const banners = [
    {
      img: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2000&auto=format&fit=crop',
      title: 'CRICKET TURF',
      emoji: '🏏',
      subtitle: 'FLOODLIT • 50x30M • SYNTHETIC',
      color: 'from-emerald-400 to-green-500'
    },
    {
      img: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop',
      title: 'FOOTBALL FIELD',
      emoji: '⚽',
      subtitle: 'FIFA 5-A-SIDE • NIGHT LIGHTS',
      color: 'from-red-500 to-orange-500'
    },
    {
      img: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2000&auto=format&fit=crop',
      title: 'PS5 GAMING',
      emoji: '🎮',
      subtitle: '4K • AC ROOM • LATEST TITLES',
      color: 'from-purple-500 to-pink-500'
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhmlwrhmqajgVbi-FNStVAE0CVSs6DBy-BA&s',
      title: '8-BALL POOL',
      emoji: '🎱',
      subtitle: 'PRO TABLE • TOURNAMENTS',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      img: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl/f_auto/primary/a1mdtk6qn3nepjexqi9y',
      title: 'VOLLEYBALL',
      emoji: '🏐',
      subtitle: 'SAND COURT • FLOODLIGHTS',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  const dynamicTags = [
    '⚡ PLAY NOW IN MOODUBIDRI',
    '🏆 PREMIUM FACILITIES',
    '💯 BEST RATES GUARANTEED',
    '🌟 BOOK YOUR SLOT TODAY',
    '🔥 OPEN 24/7',
    '⭐ RATED #1 IN TOWN'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const tagInterval = setInterval(() => {
      setActiveTag((prev) => (prev + 1) % dynamicTags.length);
    }, 2500);
    return () => clearInterval(tagInterval);
  }, [dynamicTags.length]);

  // SCROLL TO FACILITIES FUNCTION
  const scrollToFacilities = () => {
    const facilities = document.getElementById('facilities');
    if (facilities) {
      facilities.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }
  };

  // WHATSAPP WITH DYNAMIC MESSAGE
  const openWhatsApp = () => {
    const message = `Hi Soccer City! I want to book ${banners[activeBanner].title}`;
    window.open(`https://wa.me/${number}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden font-sans bg-black">
      {/* Custom Shine Animation Styles */}
      <style>{`
        @keyframes shine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .premium-shine {
          background: linear-gradient(
            to right, 
            #bf953f 0%, 
            #fcf6ba 25%, 
            #b38728 50%, 
            #fcf6ba 75%, 
            #bf953f 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 6s linear infinite;
        }
      `}</style>

      {/* FIXED Background Image Container */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${banners[activeBanner].img})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Enhanced Overlays for Visibility */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90"></div>

      {/* Main Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 max-w-6xl mx-auto pb-24">
        
        {/* Top Label */}
        <div className="mb-4">
          <span className="inline-block px-5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] shadow-2xl">
            The Ultimate Arena
          </span>
        </div>

        {/* Premium Main Title */}
        <h1 className="premium-shine text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter mb-6 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
          SOCCER <br className="sm:hidden" /> CITY
        </h1>

        {/* Dynamic Location Tags */}
        <div className="relative h-12 mb-8 overflow-hidden w-full max-w-md">
          {dynamicTags.map((tag, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                idx === activeTag ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'
              }`}
            >
              <span className="px-6 py-2 bg-neutral-900/80 backdrop-blur-md text-white text-xs sm:text-sm font-bold uppercase tracking-widest rounded-full border border-white/10 shadow-2xl">
                {tag}
              </span>
            </div>
          ))}
        </div>

        {/* Current Facility Info */}
        <div className="mb-10 transform transition-all duration-500">
          <div className="text-5xl sm:text-6xl mb-4">{banners[activeBanner].emoji}</div>
          <h2 className={`text-2xl sm:text-4xl font-bold uppercase mb-2 bg-gradient-to-r ${banners[activeBanner].color} bg-clip-text text-transparent drop-shadow-lg`}>
            {banners[activeBanner].title}
          </h2>
          <p className="text-white/90 text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase">
            {banners[activeBanner].subtitle}
          </p>
        </div>

        {/* UPDATED CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-lg px-2">
          {/* 1. SCROLL TO FACILITIES (Primary Action) */}
          <button
            onClick={scrollToFacilities}
            className="flex-1 bg-gradient-to-r from-[#d4af37] to-[#aa8418] hover:from-[#fcf6ba] hover:to-[#d4af37] text-black px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base uppercase tracking-widest shadow-[0_10px_20px_rgba(170,132,24,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Book Slot Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          
          {/* 2. WHATSAPP (Secondary Action) */}
          <button
            onClick={openWhatsApp}
            className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base uppercase tracking-widest shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            WhatsApp
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        </div>

        {/* Banner Dots */}
        <div className="flex gap-3 bg-black/50 backdrop-blur-xl px-5 py-3 rounded-full absolute bottom-20 left-1/2 -translate-x-1/2 border border-white/10 shadow-2xl">
          {banners.map((banner, idx) => (
            <button
              key={idx}
              onClick={() => setActiveBanner(idx)}
              className={`transition-all duration-500 rounded-full h-2 ${
                idx === activeBanner ? 'w-10' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
            >
              {idx === activeBanner && <div className={`w-full h-full rounded-full bg-gradient-to-r ${banner.color}`} />}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 opacity-50">
        <div className="flex flex-col items-center gap-2 text-white animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
