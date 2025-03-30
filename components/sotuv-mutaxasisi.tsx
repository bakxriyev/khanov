"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Check } from "lucide-react"

export default function SotuvMutaxassis() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Basic features from the first tariff
  const basicFeatures = [
    "SAVDO SOHASIGA KIRISH",
    "ASOSIY MULOQOT KO'NIKMALARI",
    "MIJOZ PSIXOLOGIYASI",
    "SOTUV TERMINOLOGIYASI",
    "YOPIQ TELEGRAM GURUHGA KIRISH",
    "MODULLAR SONI 4 TA",
    "16+ VIDEO DARSLIKLAR",
  ]

  // Intermediate features from the second tariff
  const intermediateFeatures = [
    "MIJOZ QARSHILIKLARI BILAN ISHLASH",
    "CRM VA IP TELEFONIYA TIZIMLARIDA ISHLASH",
    "ASOSIY SCRIPT TUZISH TEXNIKALARI, SCRIPTLAR BILAN ISHLASH",
    "MODULLAR SONI 6 TA",
    "21+ VIDEO DARSLIK",
  ]

  // Pro features (exclusive to this tariff)
  const proFeatures = [
    '"BIRINCHI QADAM" TARIFIDAN BARCHASI',
    '"ISHGA TAYYOR" TARIFIDAN BARCHA MAVZULAR',
    "REZYUME TAYYORLASH",
    "ISH TOPISH YO'RIQNOMASI (QAYERDAN QANDAY QILIB)",
    "MODULLAR SONI 8 TA",
    "29+ VIDEO DARSLIKLAR",
    "SHAXSIY RIVOJLANISH VA KARYERADA O'SISH BO'YICHA MASLAHATLAR",
    "VIP YOPIQ TELEGRAM GURUH (FAQAT PRO TARIFI O'QUVCHILAR UCHUN)",
  ]

  // Identify which features are new in the pro tariff
  const exclusiveProFeatures = proFeatures.filter(
    (feature) => !feature.includes('"BIRINCHI QADAM" TARIFIDAN') && !feature.includes('"ISHGA TAYYOR" TARIFIDAN'),
  )

  return (
    <div
      id="sotuv-mutaxasis"
      className="min-h-screen w-full relative overflow-hidden py-12 md:py-16 "
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-6 sm:px-12 relative z-10"
      >
        {/* Title - with premium styling */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ y: -20 }}
          animate={isLoaded ? { y: 0 } : {}}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center text-gray-900 relative">
            SOTUV BO'YICHA MUTAXASSIS
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-black"></div>
          </h1>
        </motion.div>

        {/* Price - premium styling */}
        <motion.div
          className="flex flex-col items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="relative">
            <h2 className="text-7xl md:text-8xl font-black text-gray-900 mb-2 relative z-10">1.399.000</h2>
            <div className="absolute -inset-4 bg-yellow-200 opacity-20 rounded-full blur-lg z-0"></div>
          </div>
          <div className="bg-black px-6 py-2 rounded-full transform rotate-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white">PRO TARIFI</h3>
          </div>
        </motion.div>

        {/* Features - with premium styling - improved responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            {proFeatures.slice(0, 4).map((item, index) => {
              const isExclusive = exclusiveProFeatures.includes(item)

              return (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ x: -20 }}
                  animate={isLoaded ? { x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <div
                    className={`${isExclusive ? "bg-red-600" : "bg-black"} text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-lg`}
                  >
                    <Check size={16} />
                  </div>
                  <p className={`text-xl font-medium ${isExclusive ? "text-red-600" : "text-gray-800"}`}>
                    {item}
                    {isExclusive && (
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">PRO</span>
                    )}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right column */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            {proFeatures.slice(4).map((item, index) => {
              const isExclusive = exclusiveProFeatures.includes(item)

              return (
                <motion.div
                  key={index + 4}
                  className="flex items-start"
                  initial={{ x: -20 }}
                  animate={isLoaded ? { x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <div
                    className={`${isExclusive ? "bg-red-600" : "bg-black"} text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 mt-1 flex-shrink-0 text-lg`}
                  >
                    <Check size={16} />
                  </div>
                  <p className={`text-xl font-medium ${isExclusive ? "text-red-600" : "text-gray-800"}`}>
                    {item}
                    {isExclusive && (
                      <span className="ml-2 text-xs bg-yellow-100 text-red-600 px-2 py-1 rounded">PRO</span>
                    )}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bonus module - moved outside the grid for better responsive layout */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ scale: 0.9 }}
          animate={isLoaded ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="relative w-full h-60 md:h-64 max-w-md mx-auto">
            <Image src="/bonus.webp" alt="Bonus modul" width={300} height={200} className="object-contain" priority />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

