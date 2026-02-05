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
      img: 'data:image/jpeg;base64,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',
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
