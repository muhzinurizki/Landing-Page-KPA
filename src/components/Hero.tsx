import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, FileText, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  // Animasi variants untuk stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = { // Tambahkan tipe : Variants di sini
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" // Gunakan string untuk keamanan maksimal
    } 
  },
};

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0B0F1A] selection:bg-blue-500/30">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear" }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-30 grayscale transition-all duration-700 hover:grayscale-0" 
          alt="Luxury Aluminum Architecture"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F1A] via-[#0B0F1A]/90 to-transparent"></div>
        
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[140px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Column */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-10"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-white/70 text-[10px] font-bold tracking-[0.3em] uppercase">Specialist Alumunium & Kaca</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-medium text-white leading-[1.05] tracking-tight">
                Definisikan <br />
                <span className="italic font-light text-slate-400">Kemewahan</span> 
                <span className="block font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Ruang Anda.</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                Kombinasi material premium dan presisi engineering untuk hasil akhir arsitektural yang prestisius.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
              <a 
                href="https://wa.me/6285930366801" 
                className="group relative px-10 py-5 bg-blue-600 overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out group-hover:w-full opacity-10"></div>
                <span className="relative text-white font-bold text-xs tracking-widest uppercase flex items-center gap-3">
                  Mulai Konsultasi
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a href="#" className="flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold tracking-widest uppercase transition-colors border-b border-white/10 pb-1 group">
                <FileText size={14} />
                Unduh Katalog .PDF
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 md:gap-12 pt-12 border-t border-white/5">
              {[
                { val: "10+", label: "Tahun\nPengalaman" },
                { val: "500+", label: "Proyek\nSelesai" },
                { val: "100%", label: "Garansi\nMaterial" },
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-default">
                  <div className="text-3xl font-light text-white group-hover:text-blue-400 transition-colors duration-300">
                    {stat.val.replace(/[+%]/, '')}<span className="text-blue-500 font-bold">{stat.val.match(/[+%]/)}</span>
                  </div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-[0.2em] mt-2 font-bold leading-4 whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 p-1 bg-gradient-to-br from-white/10 to-transparent rounded-2xl">
              <div className="bg-[#0B0F1A]/80 backdrop-blur-3xl p-2 rounded-[14px] overflow-hidden shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1690731987727-ab5daed3620b?q=80&w=868&auto=format&fit=crop" 
                  alt="Detail work" 
                  className="rounded-xl object-cover h-[500px] w-full grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            
            {/* Floating Badge Experience */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-blue-600 p-8 rounded-2xl shadow-2xl z-20"
            >
              <ShieldCheck className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;