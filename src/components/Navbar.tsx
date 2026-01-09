import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Ikon Building yang Anda pilih (Lucide style)
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 6h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 6h.01"/>
    <path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/>
    <rect x="4" y="2" width="16" height="20" rx="2"/>
  </svg>
)

const Navbar: React.FC = () => {
  const [atTop, setAtTop] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setAtTop(window.pageYOffset <= 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Proyek', href: '#proyek' },
    { name: 'FAQ', href: '#faq' },
  ]

  const isTransparent = atTop && !mobileMenuOpen

  return (
    <nav
      className={`fixed w-full top-0 z-[100] transition-all duration-700 ease-in-out px-6 md:px-12 ${
        isTransparent
          ? 'bg-transparent py-10'
          : 'bg-white/80 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-5 border-b border-slate-200/50'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Branding with Icon */}
        <a href="#" className="flex items-center gap-4 group focus:outline-none relative z-[110]">
          <div className={`p-2.5 rounded-xl transition-all duration-500 ${
            isTransparent ? 'bg-white/10 text-white rotate-0' : 'bg-blue-600 text-white -rotate-6'
          } group-hover:rotate-0 group-hover:scale-110 shadow-lg shadow-blue-500/20`}>
            <BuildingIcon className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`font-black text-lg tracking-[0.2em] uppercase transition-colors duration-500 ${
              isTransparent ? 'text-white' : 'text-slate-950'
            }`}>
              KARYA <span className="text-blue-500">PRIMA</span>
            </span>
            <span className={`text-[8px] font-bold tracking-[0.6em] uppercase transition-colors duration-500 ${
              isTransparent ? 'text-white/50' : 'text-slate-400'
            }`}>
              Architectural Glass
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className={`flex gap-10 text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-500 ${
            isTransparent ? 'text-white/80' : 'text-slate-500'
          }`}>
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="relative group overflow-hidden py-1">
                <span className="group-hover:text-blue-600 transition-colors duration-300 italic">{link.name}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[1.5px] transition-transform duration-500 translate-x-[-105%] group-hover:translate-x-0 ${
                  isTransparent ? 'bg-white' : 'bg-blue-600'
                }`}></span>
              </a>
            ))}
          </div>

          <div className={`h-8 w-[1px] transition-colors duration-500 ${isTransparent ? 'bg-white/20' : 'bg-slate-200'}`}></div>

          <a
            href="#kontak"
            className={`px-10 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 shadow-2xl active:scale-95 ${
              isTransparent
                ? 'bg-white text-slate-900 hover:bg-blue-600 hover:text-white'
                : 'bg-slate-950 text-white hover:bg-blue-600 shadow-blue-500/10'
            }`}
          >
            Mulai Konsultasi
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center relative z-[110]">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-500 ${
              isTransparent ? 'bg-white/10 text-white' : 'bg-slate-50 text-slate-900 border border-slate-200'
            } ${mobileMenuOpen ? '!bg-blue-600 !text-white' : ''}`}
          >
            <div className="w-5 h-4 flex flex-col justify-between items-center">
              <span className={`h-[2px] bg-current transition-all duration-500 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px] w-5' : 'w-5'}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`h-[2px] bg-current transition-all duration-500 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px] w-5' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#070a11] z-[105] pt-40 pb-16 px-10 lg:hidden flex flex-col justify-between"
          >
            <div className="flex flex-col gap-12">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-black tracking-tighter uppercase text-slate-700 hover:text-white transition-colors flex items-center gap-4 group"
                >
                  <span className="text-blue-600 text-sm italic font-light">0{i + 1}</span>
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 bg-blue-600 text-white py-6 rounded-3xl text-[11px] font-black uppercase tracking-[0.4em] text-center shadow-[0_20px_40px_rgba(37,99,235,0.3)]"
              >
                Mulai Proyek
              </motion.a>
            </div>

            <div className="border-t border-slate-900 pt-8 flex justify-between items-center">
              <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest italic">
                Kota Tanggerang, Indonesia
              </p>
              <BuildingIcon className="w-5 h-5 text-slate-800" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar