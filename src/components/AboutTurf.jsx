import { Trophy, Clock, MapPin, Zap, Shield, Users, ChevronRight } from 'lucide-react';

const AboutTurf = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
      title: "FIFA Grade Turf",
      desc: "Professional-grade synthetic grass designed for maximum traction and player safety."
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Open 24/7",
      desc: "Never miss a game. Our floodlit arena is open and fully operational all night."
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      title: "Premium Safety",
      desc: "Shock-absorbent flooring and padded boundaries for injury-free gaming."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <h3 className="text-emerald-500 font-bold uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-3">
              Premium Sports Experience
            </h3>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] uppercase italic">
              THE MOST ELITE <br /> 
              <span className="text-neutral-600">ARENA IN TOWN</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm text-sm sm:text-base leading-relaxed border-l-2 border-emerald-500/30 pl-4 mt-4 lg:mt-0">
            Soccer City is more than just a turf; it's a community for athletes who demand the best environment.
          </p>
        </div>

        {/* Stats Grid - Optimized for 2x2 on Mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-20">
          {[
            { label: 'Square Feet', value: '15,000+' },
            { label: 'Pro Lighting', value: '500 LUX' },
            { label: 'Sports Offered', value: '5+' },
            { label: 'Happy Players', value: '2k+' }
          ].map((stat, i) => (
            <div key={i} className="p-5 sm:p-8 bg-neutral-900/40 border border-neutral-800/50 rounded-2xl hover:border-emerald-500/40 transition-all group">
              <div className="text-2xl sm:text-3xl font-black mb-1 italic tracking-tighter text-emerald-50 group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-[9px] sm:text-xs text-neutral-500 uppercase tracking-widest font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Left: Image (Reordered to come after features on mobile for better flow) */}
          <div className="lg:col-span-7 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2000&auto=format&fit=crop" 
                alt="Turf Close Up" 
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* Floating Badge Optimized for Mobile */}
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md p-2 rounded-full pr-4 border border-white/10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Trophy className="text-black w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="font-bold text-[10px] sm:text-sm tracking-widest uppercase">Certified Pro Turf</span>
              </div>
            </div>
          </div>

          {/* Right: Feature List (Order 1 on mobile so user reads it first) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-8 order-1 lg:order-2">
            {features.map((feature, idx) => (
              <div key={idx} className="group flex gap-4 sm:gap-6 p-3 sm:p-4 rounded-2xl hover:bg-neutral-900/50 transition-all border border-transparent hover:border-neutral-800">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 uppercase tracking-tight flex items-center gap-2 italic">
                    {feature.title} 
                    <ChevronRight className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </h4>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Location Footer Bar - Centered stack on mobile */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-neutral-900">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-neutral-500 text-center">
            <div className="flex items-center gap-2 group cursor-default">
              <MapPin size={16} className="group-hover:text-emerald-500 transition-colors" /> 
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">Moodubidri, Karnataka</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-neutral-800 rounded-full"></div>
            <div className="flex items-center gap-2 group cursor-default">
              <Users size={16} className="group-hover:text-emerald-400 transition-colors" /> 
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">Premium Amenities</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-neutral-800 rounded-full"></div>
            <div className="flex items-center gap-2 group cursor-default">
              <Clock size={16} className="group-hover:text-blue-400 transition-colors" /> 
              <span className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em]">Instant Booking</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTurf;