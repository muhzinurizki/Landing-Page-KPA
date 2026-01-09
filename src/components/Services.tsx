import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Shield, Wind, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Kusen Aluminium',
    desc: 'Profil presisi dengan ketahanan cuaca tinggi, tersedia dalam berbagai pilihan warna powder coating dan anodize.',
    icon: <Layout className="w-8 h-8" />,
    delay: 0.1
  },
  {
    title: 'Kaca Arsitektural',
    desc: 'Solusi kaca tempered, laminated, hingga double glass untuk estetika dan keamanan maksimal bangunan Anda.',
    icon: <Shield className="w-8 h-8" />,
    delay: 0.2
  },
  {
    title: 'Facade & ACP',
    desc: 'Pemasangan fasad gedung modern menggunakan Aluminium Composite Panel dengan teknik instalasi yang rapi.',
    icon: <Wind className="w-8 h-8" />,
    delay: 0.3
  }
];

const Services: React.FC = () => {
  return (
    <section id="layanan" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="w-12 h-[1px] bg-blue-600"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Layanan Unggulan</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter"
            >
              SOLUSI KONSTRUKSI <br /> 
              <span className="text-slate-400 font-light italic">YANG TERINTEGRASI.</span>
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-slate-500 max-w-sm text-sm leading-relaxed font-light"
          >
            Kami menggabungkan material kelas dunia dengan keahlian teknis untuk memberikan hasil yang melampaui ekspektasi.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group p-10 bg-slate-50 hover:bg-slate-900 transition-all duration-500 rounded-[2rem] border border-slate-100 hover:border-slate-800 flex flex-col h-full"
            >
              <div className="text-blue-600 mb-8 p-4 bg-white shadow-sm rounded-2xl w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-black text-slate-900 group-hover:text-white mb-4 tracking-tight transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-500 group-hover:text-slate-400 text-sm leading-relaxed mb-8 font-light transition-colors">
                {service.desc}
              </p>
              
              <div className="mt-auto">
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-600 group-hover:text-white transition-colors">
                  Detail Layanan <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 z-0"></div>
    </section>
  );
};

export default Services;