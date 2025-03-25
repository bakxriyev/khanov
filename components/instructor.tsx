"use client"

import { motion } from "framer-motion"

export default function Instructor() {
  return (
    <div id="muallif" className="container relative py-16 px-6 md:py-32 md:px-16 lg:px-32">
      <div className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] text-center">
        <div className="relative max-w-5xl w-full">
          {/* Course Author Title */}
          <div className="absolute top-0 right-1/4 z-10 max-w-xs">
            <motion.div
              className="bg-black text-white font-bold text-lg md:text-2xl px-4 py-2 md:px-6 md:py-3 transform -rotate-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              KURS MUALLIFI
            </motion.div>
          </div>

          {/* Author Name */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-black text-black mb-12 mt-12 md:mb-16 md:mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            BEKZOD KHANOV
          </motion.h1>

          {/* Credentials - 2 on top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <motion.div
              className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-bold text-base md:text-lg">
                3+ YILLIK SAVDO VA BIZNES AVTOMATLASHTIRISH BO'YICHA TAJRIBA.
              </h3>
            </motion.div>

            <motion.div
              className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-bold text-base md:text-lg">
                90+ REAL KEYS – KICHIK, O'RTA VA YIRIK BIZNESLAR BILAN ISHLASH TAJRIBASI.
              </h3>
            </motion.div>
          </div>

          {/* Credential - 1 on bottom row */}
          <div className="flex justify-center mb-24 md:mb-52">
            <motion.div
              className="bg-white px-4 py-3 md:px-6 md:py-4 rounded-lg shadow-lg max-w-md md:max-w-xl w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-bold text-base md:text-lg">
                ROSSIYA BOZORIDA YETUK SAVDO EKSPERTLARI TAJRIBASIDAN O'RGANGAN.
              </h3>
            </motion.div>
          </div>

          {/* Icons */}
          <div className="absolute bottom-[-60px] left-0 md:left-[-40px] z-0">
            <motion.img
              src="/ptichka.png"
              alt="Network diagram"
              className="w-40 h-40 md:w-60 md:h-60 opacity-80"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 0.8, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
          </div>

          <div className="absolute bottom-[-60px] right-0 md:right-[-40px] z-0">
            <motion.img
              src="/angular.png"
              alt="Checkmark"
              className="w-40 h-40 md:w-60 md:h-60"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
