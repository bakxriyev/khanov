"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function SotuvMutaxassis() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div id="sotuv-mutaxasis" className="min-h-screen w-full relative overflow-hidden py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 sm:px-12 relative z-10"
      >
        {/* Title - larger and more prominent */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: -20 }}
          animate={isLoaded ? { y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900">
            SOTUV BO'YICHA MUTAXASSIS
          </h1>
        </motion.div>

        {/* Price - much more prominent */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-2">1.399.000</h2>
          <div className="bg-black px-6 py-2 rounded-full">
            <h3 className="text-2xl md:text-3xl font-bold text-white">PRO TARIFI</h3>
          </div>
        </motion.div>

        {/* Features - larger text and spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {[
              '"BIRINCHI QADAM" TARIFIDAN BARCHASI',
              '"ISHGA TAYYOR" TARIFIDAN BARCHA MAVZULAR',
              'REZYUME TAYYORLASH',
              'ISH TOPISH YO\'RIQNOMASI (QAYERDAN QANDAY QILIB)',
              'MODULLAR SONI 8 TA',
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ x: -20 }}
                animate={isLoaded ? { x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
              >
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-lg">
                  {index + 1}
                </div>
                <p className="text-xl font-medium text-gray-800">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right column */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {[
              '29+ VIDEO DARSLIKLAR',
              'SHAXSIY RIVOJLANISH VA KARYERADA O\'SISH BO\'YICHA MASLAHATLAR',
              'VIP YOPIQ TELEGRAM GURUH (FAQAT PRO TARIFI O\'QUVCHILAR UCHUN)',
            ].map((item, index) => (
              <motion.div
                key={index + 5}
                className="flex items-start"
                initial={{ x: -20 }}
                animate={isLoaded ? { x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-lg">
                  {index + 6}
                </div>
                <p className="text-xl font-medium text-gray-800">{item}</p>
              </motion.div>
            ))}

            {/* Bonus module - larger */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ scale: 0.9 }}
              animate={isLoaded ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="relative w-full h-60 md:h-64">
                <Image
                  src="/bonus.webp"
                  alt="Bonus modul"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}