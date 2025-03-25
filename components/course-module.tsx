"use client"
import React from 'react';
import Image from 'next/image';

const modullar = [
  "SOTUVCHILIK KASBI",
  "SAVDO ASOSLARINI TUSHUNISH – MIJOZLAR QANDAY QAROR QABUL QILADI?",
  "SAMARALI MULOQOT – MIJOZ BILAN QANDAY GAPLASHISH, SAVOLLAR BERISH",
  "SKRIPTLAR BILAN ISHLASH – CALL-MARKAZ VA SAVDODA TAYYOR SKRIPTLAR",
  "MIJOZNING EHTIYOJLARINI ANIQLASH VA E'TIROZLARNI YENGISH",
  "CRM VA IP TELEFONIYA TIZIMLARI BILAN ISHLASH (AMOCRM)",
  "ISH TOPISH VA INTERVYUGA TAYYORGARLIK STRATEGIYALARI",
  "STRESSGA BARDOSHLI BO'LISH VA MOTIVATSIYA"
];

const KursDasturi = () => {
  return (
    <div id="kurs-dasturi" className="px-4 py-16 min-h-screen w-full relative overflow-hidden rounded-xl">
      {/* Chap tomondagi fon elementi (chap o'rtada) */}
      <div className="absolute bottom-8  left-0 right-0 w-24 h-24 md:w-32 md:h-32 mx-auto ml-8 md:ml-16 rounded-2xl">
        <Image 
          src="/ptichka.webp" 
          alt="" 
          width={128} 
          height={128} 
          className="object-contain opacity-70"
          priority
        />
      </div>

      {/* O'ng tomondagi fon elementi (o'ng o'rtada) */}
      <div className="absolute bottom-8 left-0 right-0 w-28 h-28 md:w-40 md:h-40 mx-auto mr-8 md:mr-16">
        <Image 
          src="/ptichka.webp" 
          alt="" 
          width={160} 
          height={160} 
          className="object-contain opacity-70"
          priority
        />
      </div>

      {/* Sarlavha */}
      <div className="text-center mb-8 mt-4">
        <h1 className="inline-block text-4xl md:text-5xl font-extrabold">
          KURS
          <span className="text-3xl md:text-4xl font-extrabold ml-1">DASTURI</span>
        </h1>
      </div>

      {/* Modullar gridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto relative z-10 mb-12">
        {modullar.map((nom, index) => (
          <div key={index} className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md h-full">
            <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
              <Image
                src={`/${18 + index}.webp`}
                alt={`Modul ${index + 1}`}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <div className="text-center flex-grow">
              <h3 className="text-base font-bold mb-1">MODUL {index + 1}:</h3>
              <p className="text-sm font-medium">{nom}</p>
            </div>
          </div>
        ))}

        {/* Bonus kartasi */}
        <div className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md h-full">
          <div className="relative w-16 h-16 mb-3 flex items-center justify-center">
            <Image
              src="/28.webp"
              alt="Bonus material"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <div className="text-center flex-grow">
            <h3 className="text-base font-bold mb-1">BONUS:</h3>
            <p className="text-sm font-medium">KITOB, FILM VA PODKAST TAVSIYALARI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KursDasturi;