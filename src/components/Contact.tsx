import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Kusen Aluminium',
    message: ''
  });

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6285930366801";
    const text = `Halo Karya Prima Aluminium,%0A%0ASaya *${formData.name}*%0ANo. HP: ${formData.phone}%0AIngin berkonsultasi mengenai: *${formData.service}*%0A%0APesan:%0A${formData.message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="py-32 bg-[#070a11] text-white relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-900 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Sisi Kiri: Brand Statement */}
          <div className="lg:col-span-5 pt-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[2px] bg-blue-500"></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Private Consultation</span>
                </div>
                
                <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.85]">
                  Wujudkan <br />
                  <span className="text-slate-700 font-extralight italic text-4xl md:text-6xl tracking-normal">Visi Anda.</span>
                </h2>
                
                <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">
                  Diskusikan spesifikasi material dan teknis pemasangan dengan konsultan ahli kami secara gratis.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { icon: <Phone size={20} />, label: "Hotline", val: "0859-3036-6801" },
                  { icon: <Mail size={20} />, label: "Email", val: "karyaprima@gmail.com" }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-900/40 border border-slate-800/50 hover:bg-slate-900 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.label}</p>
                      <p className="text-lg font-bold group-hover:text-blue-400 transition-colors">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 text-slate-500 text-xs font-medium">
                <ShieldCheck size={16} className="text-blue-500" />
                Data Anda aman & terenkripsi melalui sistem WhatsApp
              </div>
            </motion.div>
          </div>

          {/* Sisi Kanan: The "White Card" Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative w-full"
          >
            <form 
              onSubmit={handleWhatsApp}
              className="relative bg-white rounded-[3rem] p-8 md:p-16 text-slate-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden"
            >
              {/* Decorative Tab */}
              <div className="absolute top-0 right-16 px-6 py-2 bg-blue-600 rounded-b-2xl shadow-lg">
                <span className="text-[9px] font-black text-white uppercase tracking-widest">Fast Response</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">01. Identitas</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                    placeholder="Nama Lengkap"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">02. Kontak</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-5 focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all placeholder:text-slate-300"
                    placeholder="Nomor Handphone"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">03. Kategori Proyek</label>
                  <div className="flex flex-wrap gap-2">
                    {['Kusen Aluminium', 'Kaca Tempered', 'Facade / ACP', 'Pintu & Jendela'].map((s) => (
                      <button
                        type="button"
                        key={s}
                        onClick={() => setFormData({...formData, service: s})}
                        className={`px-6 py-3 rounded-full text-[11px] font-bold transition-all border ${
                          formData.service === s 
                          ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' 
                          : 'bg-white border-slate-100 text-slate-500 hover:border-blue-200'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 italic">04. Brief Singkat</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] p-6 focus:ring-2 focus:ring-blue-500/20 focus:bg-white outline-none transition-all placeholder:text-slate-300 resize-none"
                    placeholder="Ceritakan gambaran proyek Anda..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group w-full bg-[#070a11] hover:bg-blue-600 text-white font-black py-6 rounded-[2rem] text-[11px] uppercase tracking-[0.4em] transition-all flex items-center justify-center gap-4 active:scale-[0.98] shadow-2xl"
                >
                  Kirim Permintaan <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;