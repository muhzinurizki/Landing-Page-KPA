import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, MessageSquare } from 'lucide-react';

const faqs = [
  {
    question: "Berapa lama estimasi waktu pengerjaan?",
    answer: "Waktu pengerjaan bergantung pada volume proyek. Untuk hunian standar biasanya memakan waktu 7-14 hari kerja setelah survei lokasi dan persetujuan desain final."
  },
  {
    question: "Apakah ada garansi setelah pemasangan?",
    answer: "Kami menjamin kualitas setiap instalasi. Anda mendapatkan garansi kebocoran dan kekuatan konstruksi selama 12 bulan, didukung oleh sertifikat garansi material resmi dari provider brand."
  },
  {
    question: "Apakah bisa survei lokasi terlebih dahulu?",
    answer: "Presisi adalah kunci kami. Kami menyediakan layanan survei lokasi, pemetaan teknis, dan konsultasi arsitektural tanpa biaya untuk wilayah Jabodetabek."
  },
  {
    question: "Material aluminium apa saja yang tersedia?",
    answer: "Kami bermitra dengan brand tier-atas seperti YKK AP (Luxury), Alexindo (Premium), serta sistem kustom profil untuk kebutuhan estetika khusus."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#FBFBFC] selection:bg-blue-600/10">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left Side: Strategic Branding */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-[2px] bg-blue-600"></div>
                <span className="text-[11px] font-black uppercase tracking-[0.5em] text-blue-600">Support Center</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] uppercase">
                Informasi <br />
                <span className="text-slate-300 font-extralight italic">Teknis & Prosedur.</span>
              </h2>

              <p className="text-slate-500 text-lg font-light leading-relaxed max-w-sm">
                Segala hal yang perlu Anda ketahui tentang proses pengerjaan aluminium dan kaca dari tahap konsultasi hingga instalasi.
              </p>

              {/* Elevated CTA Box */}
              <div className="relative group p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] overflow-hidden transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)]">
                <div className="absolute top-0 right-0 p-8 text-blue-100 group-hover:text-blue-200 transition-colors">
                  <MessageSquare size={80} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <p className="text-slate-900 font-black text-xl mb-2 tracking-tight">Konsultasi Khusus?</p>
                  <p className="text-slate-500 font-light text-sm mb-6 leading-relaxed">Tim teknis kami siap memberikan solusi spesifik untuk blueprint arsitektur Anda.</p>
                  <a href="https://wa.me/085930366801" className="inline-flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                    WhatsApp Kami <div className="w-6 h-[1px] bg-blue-600"></div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Accordion with Refined Micro-interactions */}
          <div className="lg:col-span-7 space-y-5">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  activeIndex === index 
                  ? 'border-blue-200 bg-white shadow-[0_20px_40px_rgba(37,99,235,0.05)]' 
                  : 'border-transparent bg-white/50 hover:bg-white hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-8 md:p-10 text-left"
                >
                  <span className={`text-xl font-bold tracking-tight transition-all duration-300 ${
                    activeIndex === index ? 'text-blue-600 scale-[1.02] origin-left' : 'text-slate-800'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Plus Icon with Circle Progress Animation */}
                  <div className="relative flex items-center justify-center">
                    <div className={`absolute w-12 h-12 rounded-full border-2 transition-all duration-500 ${
                      activeIndex === index ? 'border-blue-600 scale-100 opacity-100' : 'border-slate-100 scale-50 opacity-0'
                    }`} />
                    <Plus 
                      className={`transition-all duration-500 ${
                        activeIndex === index ? 'text-blue-600 rotate-[135deg]' : 'text-slate-300'
                      }`} 
                      size={24} 
                    />
                  </div>
                </button>
                
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-8 md:px-10 pb-10">
                        <div className="pt-8 border-t border-slate-50 text-slate-500 text-lg font-light leading-relaxed">
                          {faq.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;