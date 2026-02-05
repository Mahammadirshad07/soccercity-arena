// Gallery.jsx - Copy this exactly
const Gallery = () => {
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1579952363873-27d3b962b9fc?w=800&h=600&fit=crop',
      alt: 'Premium cricket turf night game',
      category: 'turf'
    },
    {
      src: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7e74?w=800&h=600&fit=crop',
      alt: '8-ball pool professional table',
      category: 'indoor'
    },
    {
      src: 'https://images.unsplash.com/photo-1617073833684-909dfe37526b?w=800&h=600&fit=crop',
      alt: 'PS5 gaming setup 4K',
      category: 'indoor'
    },
    {
      src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=600&fit=crop',
      alt: 'Floodlit football field action',
      category: 'turf'
    },
    {
      src: 'https://images.unsplash.com/photo-1595113316349-9fa4c1d3c3e5?w=800&h=600&fit=crop',
      alt: 'Volleyball sand court',
      category: 'outdoor'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      alt: 'Night cricket under floodlights',
      category: 'turf'
    }
  ];

  return (
    <section id="gallery" className="py-20 sm:py-24 md:py-28 bg-gradient-to-t from-gray-900/80 via-black/50 to-transparent relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/5 via-transparent to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 sm:mb-24">
          <span className="text-yellow-400 text-sm sm:text-base font-bold uppercase tracking-widest px-6 py-3 bg-yellow-500/10 rounded-full border border-yellow-400/20 inline-block mb-8">
            Our Gallery
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-[0.1em] mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            FACILITY
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">GALLERY</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
            See our world-class facilities in action
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, idx) => (
            <div 
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-white/10 hover:border-emerald-400/50 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
            >
              {/* Image */}
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className={`px-4 py-2 rounded-2xl text-xs font-bold uppercase tracking-wider shadow-lg ${
                  image.category === 'turf' ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white' :
                  image.category === 'indoor' ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white' :
                  'bg-gradient-to-r from-yellow-500 to-orange-500 text-white'
                }`}>
                  {image.category.toUpperCase()}
                </span>
              </div>
              
              {/* Hover Content */}
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{image.alt.split(' ')[0]}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-300">
                  <span>👀 View Gallery</span>
                  <div className="w-8 h-px bg-gradient-to-r from-transparent via-white to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a 
            href="#facilities"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-xl font-bold uppercase tracking-wide text-white rounded-3xl shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 hover:scale-105"
          >
            BOOK YOUR SLOT
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
