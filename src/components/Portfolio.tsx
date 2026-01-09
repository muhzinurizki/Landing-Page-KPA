import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Plus } from 'lucide-react';

const projects = [
  {
    title: "The Glass House",
    category: "Residensial",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
    size: "large" // Proyek unggulan
  },
  {
    title: "Office Tower Facade",
    category: "Komersial",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000",
    size: "small"
  },
  {
    title: "Modern Apartment",
    category: "Residensial",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000",
    size: "small"
  },
  {
    title: "Luxury Villa",
    category: "Interior",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000",
    size: "wide" // Lebar penuh di bawah
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="proyek" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Portfolio - Minimalist Professional */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600 bg-blue-50 px-4 py-2 rounded-full">
                Selected Works
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-[calc(-0.05em)] uppercase leading-[0.9]">
              Mahakarya <br />
              <span className="text-slate-300 font-extralight italic text-4xl md:text-6xl tracking-tighter">Presisi & Estetika.</span>
            </h2>
          </div>
          
          <motion.p className="text-slate-500 max-w-xs text-sm font-light leading-relaxed border-l-2 border-slate-100 pl-6 hidden lg:block">
            Menampilkan kurasi proyek terbaik kami, dari fasad gedung perkantoran hingga hunian privat eksklusif.
          </motion.p>
        </div>

        {/* Project Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[350px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[2.5rem] overflow-hidden cursor-pointer bg-slate-100 shadow-sm
                ${project.size === 'large' ? 'md:row-span-2 lg:col-span-1' : ''}
                ${project.size === 'wide' ? 'md:col-span-2' : ''}
              `}
            >
              {/* Image with Parallax-like effect */}
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Sophisticated Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Corner Tag */}
              <div className="absolute top-6 left-6 overflow-hidden">
                <span className="inline-block bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-xs font-light tracking-wide uppercase">Lihat Detail</p>
                    <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center -rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Plus Icon Center (Hover Decor) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <Plus className="text-white/20 w-24 h-24 font-thin" strokeWidth={0.5} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 flex justify-center">
            <button className="group flex items-center gap-6 px-10 py-5 bg-slate-950 rounded-full text-white overflow-hidden relative">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] relative z-10 group-hover:pr-8 transition-all duration-500">
                    Eksplorasi Semua Proyek
                </span>
                <div className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight size={20} />
                </div>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;