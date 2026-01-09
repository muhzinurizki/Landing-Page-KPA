import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, ArrowUp, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#070a11] pt-24 pb-12 overflow-hidden border-t border-slate-900">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <span className="text-2xl font-black text-white tracking-[0.2em] uppercase">
                KARYA <span className="text-blue-600">PRIMA</span>
              </span>
              <p className="text-[9px] font-black text-blue-500/60 tracking-[0.5em] mt-2 uppercase italic">
                Architectural Glass & Aluminium
              </p>
            </div>
            
            <p className="text-slate-500 font-light leading-relaxed max-w-sm text-sm">
              Mewujudkan standar baru dalam fasad bangunan modern. Kami menggabungkan material kelas dunia dengan teknik pemasangan presisi tinggi.
            </p>

            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-500 hover:border-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 italic">Navigasi</h4>
            <ul className="space-y-4 text-[13px] text-slate-500 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-blue-600 group-hover:w-4 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Workshop Location with Live Iframe */}
          <div className="lg:col-span-6">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[10px] mb-8 italic flex items-center gap-2">
              <MapPin size={14} className="text-blue-600" /> Lokasi Workshop
            </h4>
            
            <div className="relative group w-full h-56 rounded-[2rem] overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl">
              {/* Google Maps Iframe with Dark Mode Filter */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.6749927249793!2d106.62385150000001!3d-6.174248799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff2ddcf1f465%3A0xd3953e99e94c0123!2sJl.%20Sasmita%20No.15%2C%20RT.003%2FRW.008%2C%20Gerendeng%2C%20Kec.%20Karawaci%2C%20Kota%20Tangerang%2C%20Banten%2015113!5e0!3m2!1sid!2sid!4v1767933984650!5m2!1sid!2sid"
                className="w-full h-full grayscale invert-[0.9] contrast-[1.2] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-700 pointer-events-none group-hover:pointer-events-auto"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Maps Overlay Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex justify-between items-center group-hover:opacity-0 transition-opacity duration-500">
                <p className="text-[10px] text-slate-400 font-medium tracking-wide">
                  Jl. Sasmita No.15, RT.003/RW.008, Gerendeng, Kec. Karawaci, 15113
                </p>
                <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Send size={10} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll Top */}
        <div className="pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-[9px] font-black text-slate-700 uppercase tracking-[0.4em]">
              © 2026 KARYA PRIMA ALUMINIUM.
            </p>
            <div className="hidden md:block w-px h-3 bg-slate-800" />
            <p className="text-[9px] font-bold text-slate-800 uppercase tracking-widest">
              Built by <span className="text-slate-600">Gemini UI/UX</span>
            </p>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] hover:text-white transition-all"
          >
            Scroll to top
            <div className="w-12 h-12 rounded-full border border-slate-800 flex items-center justify-center group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;