"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function TarifRejalari() {
    const [isLoaded, setIsLoaded] = useState(false)
  
    useEffect(() => {
      setIsLoaded(true)
    }, [])
  
    return (
      <div id="narx" className="min-h-screen relative overflow-hidden py-16 md:py-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto px-6 relative z-10"
        >
          {/* Title - made more compact */}
          <div className="flex justify-center mb-12 md:mb-16 relative z-20">
            <div className="border-4 border-black px-6 py-1">
              <h1 className="text-3xl md:text-4xl font-black text-center">TARIF REJALARI</h1>
            </div>
          </div>
  
          {/* Pricing columns - optimized spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto relative z-20">
            {/* First column */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <div className="border-2 border-black px-3 py-1 inline-block mb-4">
                <h2 className="text-xl md:text-2xl font-black">BIRINCHI QADAM</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-black mb-8">699.000</h3>
  
              <div className="space-y-4">
                {[ 
                  "SAVDO SOHASIGA KIRISH", 
                  "ASOSIY MULOQOT KO'NIKMALARI", 
                  "MIJOZ PSIXOLOGIYASI", 
                  "SOTUV TERMINOLOGIYASI", 
                  "YOPIQ TELEGRAM GURUHGA KIRISH", 
                  "MODULLAR SONI 4 TA", 
                  "16+ VIDEO DARSLIKLAR" 
                ].map((item, index) => (
                  <div className="flex items-start" key={index}>
                    <div className="relative flex-shrink-0 w-10 h-10 mr-3">
                      <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <p className="font-bold text-base md:text-lg mt-2">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
  
            {/* Second column */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="border-2 border-black px-3 py-1 inline-block mb-4">
                <h2 className="text-xl md:text-2xl font-black">ISHGA TAYYOR (TAVSIYA ETILGAN)</h2>
              </div>
              <h3 className="text-5xl md:text-6xl font-black mb-8">899.000</h3>
  
              <div className="space-y-4">
                {[
                  'BIRINCHI QADAM" TARIFIDAN BARCHA MAVZULAR',
                  "MIJOZ QARSHILIKLARI BILAN ISHLASH",
                  "CRM VA IP TELEFONIYA TIZIMLARIDA ISHLASH",
                  "ASOSIY SCRIPT TUZISH TEXNIKALARI, SCRIPTLAR BILAN ISHLASH",
                  "MODULLAR SONI 6 TA",
                  "21+ VIDEO DARSLIK"
                ].map((item, index) => (
                  <div className="flex items-start" key={index}>
                    <div className="relative flex-shrink-0 w-10 h-10 mr-3">
                      <div className="absolute inset-0 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                      </div>
                    </div>
                    <p className="font-bold text-base md:text-lg mt-2">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
  
        {/* Background Money Icon - smaller and less intrusive */}
        <div className="absolute bottom-4 right-4 w-[120px] h-[120px] md:w-[150px] md:h-[150px] opacity-30 z-0">
          <Image src="/ptichka.png" alt="Money icons" fill className="object-contain" priority />
        </div>
      </div>
    )
}