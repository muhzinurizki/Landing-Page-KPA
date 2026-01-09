import React from 'react'
import { motion } from 'framer-motion'

interface Brand {
  name: string
  sub: string
  hoverColor: string
  isItalic?: boolean
  tracking?: string
}

const brands: Brand[] = [
  {
    name: 'YKK AP',
    sub: 'Standard Dunia',
    hoverColor: 'group-hover:text-blue-600',
    tracking: 'tracking-tighter',
  },
  {
    name: 'Alexindo',
    sub: 'Profil Alumunium',
    hoverColor: 'group-hover:text-slate-950',
    tracking: 'tracking-[0.1em]',
  },
  {
    name: 'Forta',
    sub: 'Hardware System',
    hoverColor: 'group-hover:text-red-600',
    tracking: 'tracking-tighter',
  },
  {
    name: 'Inkalum',
    sub: 'Inovasi Alumunium',
    hoverColor: 'group-hover:text-green-700',
    isItalic: true,
  },
  {
    name: 'Dacon',
    sub: 'Precision Profile',
    hoverColor: 'group-hover:text-orange-600',
    tracking: 'tracking-widest',
  },
  {
    name: 'Alcopan',
    sub: 'Premium ACP',
    hoverColor: 'group-hover:text-sky-500',
    tracking: 'tracking-tight',
  },
  {
    name: 'Seven',
    sub: 'ACP Specialist',
    hoverColor: 'group-hover:text-yellow-600',
    tracking: 'tracking-[0.2em]',
  },
]

const Partners: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut', // Ubah dari array [number] ke string ini
      },
    },
  }

  return (
    <section className="py-24 bg-white border-y border-slate-100/60 relative overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 flex justify-around opacity-[0.03] pointer-events-none">
        {[1, 2, 3].map(i => (
          <div key={i} className="w-px h-full bg-slate-900" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <h3 className="text-xs font-black tracking-[0.4em] text-blue-600 uppercase mb-4">
              Material Excellence
            </h3>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">
              Kami hanya menggunakan standar material arsitektural terbaik.
            </p>
          </motion.div>
          <div className="hidden md:block h-px flex-grow bg-slate-100 mx-12" />
        </div>

        {/* Brand Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-x-16 gap-y-12"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ opacity: 1, y: -5 }}
              className="group flex flex-col items-center transition-all duration-500 cursor-default"
            >
              <div className="h-8 flex flex-col justify-center">
                <span
                  className={`text-xl font-black text-slate-800 transition-colors duration-300 ${
                    brand.hoverColor
                  } ${brand.isItalic ? 'italic' : ''} ${brand.tracking || ''}`}
                >
                  {brand.name === 'YKK AP' ? (
                    <>
                      YKK <span className="text-blue-500">AP</span>
                    </>
                  ) : (
                    brand.name
                  )}
                </span>
              </div>

              <span className="mt-3 text-[8px] font-bold tracking-[0.2em] uppercase text-slate-400 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                {brand.sub}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Partners
