const Facilities = ({ number }) => {
  const facilities = [
    {
      category: 'INDOOR',
      name: '8-BALL POOL',
      
      pricing: {
        hourly: 150,
        halfHour: 80
      },
      features: ['Pro Table', 'AC Room', 'Tournaments', 'LED Lights'],
      img: 'https://the8balllounge.com/wp-content/uploads/2022/05/main-room-1.jpg',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      category: 'INDOOR',
      name: 'PS5 GAMING',
      
      pricing: {
        hourly: 70,
        halfHour: 40
      },
      features: ['4K TV', 'AC Room', 'Latest Titles', 'Controllers'],
      img: 'https://808.media/wp-content/uploads/2022/03/gamestop-black-friday-deals-lead.jpg',
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'OUTDOOR',
      name: 'CRICKET TURF',
      
      pricing: {
        hourly: 1000,
        halfHour: null
      },
      features: ['Floodlit', '50x30M', 'Synthetic Turf', 'Night Games'],
      img: 'data:image/jpeg;base64,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',
      color: 'from-emerald-400 to-green-500'
    },
    {
      category: 'OUTDOOR',
      name: 'FOOTBALL FIELD',
      
      pricing: {
        hourly: 1000,
        halfHour: null
      },
      features: ['FIFA 5-A-Side', 'Night Lights', 'Artificial Turf', 'Markings'],
      img: 'data:image/jpeg;base64,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',
      color: 'from-red-500 to-orange-500'
    },
    {
      category: 'OUTDOOR',
      name: 'VOLLEYBALL COURT',
      emoji: '🏐',
      pricing: {
        hourly: 1000,
        halfHour: null
      },
      features: ['Sand Court', 'Floodlights', 'Professional Net', 'Markings'],
      img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&fit=crop',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="facilities" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-900/30 to-black/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-block mb-4">
          <span className="text-yellow-400 text-sm sm:text-base font-bold uppercase tracking-widest px-4 py-2 bg-yellow-400/10 rounded-full border border-yellow-400/30">
            Premium Facilities
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white mb-6">
          OUR FACILITIES
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-transparent to-yellow-400 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-l from-transparent to-orange-500 rounded-full"></div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Premium indoor gaming & professional outdoor sports facilities
        </p>
      </div>

      {/* Facilities Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
        {facilities.map((facility, idx) => (
          <div 
            key={idx} 
            className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 hover:scale-105"
          >
            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-20">
              <span className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${facility.color} shadow-lg`}>
                {facility.category}
              </span>
            </div>

            {/* Image */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>
              <img 
                src={facility.img} 
                alt={facility.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl sm:text-7xl z-20 group-hover:scale-125 transition-transform duration-500 opacity-90">
                {facility.emoji}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white mb-4 text-center">
                {facility.name}
              </h3>
              
              {/* Pricing */}
              <div className="mb-5">
                {facility.pricing.halfHour ? (
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-3 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">30 Min</div>
                      <div className="text-xl sm:text-2xl font-black text-yellow-400">
                        ₹{facility.pricing.halfHour}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl p-3 border border-white/10 hover:border-yellow-400/50 transition-all duration-300">
                      <div className="text-xs text-gray-400 uppercase tracking-wide mb-1">1 Hour</div>
                      <div className="text-xl sm:text-2xl font-black text-yellow-400">
                        ₹{facility.pricing.hourly}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`bg-gradient-to-r ${facility.color} text-white font-bold text-xl sm:text-2xl px-5 py-3 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300`}>
                    ₹{facility.pricing.hourly}/HR
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="space-y-2 mb-5">
                {facility.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${facility.color}`}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* FIXED BOOK BUTTON - Added missing <a> tag */}
              <a
                href={`https://wa.me/${number}?text=Hi! I want to book ${facility.name}`}
                className="w-full block py-3.5 px-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-base sm:text-lg font-bold uppercase tracking-wide text-white rounded-xl shadow-lg hover:shadow-emerald-400/50 transition-all duration-300 text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>BOOK NOW</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

   
    </section>
  );
};

export default Facilities;
