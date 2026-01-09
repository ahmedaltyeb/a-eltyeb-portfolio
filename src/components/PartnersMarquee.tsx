"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Al Arabi Falcons" },
  { name: "Epicminds IT" },
  { name: "Expert Caller" },
  { name: "A2C College" },
  { name: "Tayeb Tech" },
  { name: "Zool Man" },
  { name: "Gold Signature" },
  { name: "Figma" },
  { name: "React" },
  { name: "Next.js" },
];

const duplicatedPartners = [...partners, ...partners];

export const PartnersMarquee = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      
      {/* العنوان: تم الحفاظ عليه كبيراً (text-3xl / text-4xl) كما في الأقسام الأخرى */}
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Trusted <span className="text-primary">Partners</span>
        </h2>
        <div className="h-1 w-20 bg-[#00E5FF] mx-auto rounded-full opacity-50" />
      </div>

      {/* الشريط: تم تصغير الارتفاع (py-5) وحجم الخط (text-lg) فقط هنا */}
      <div className="relative flex items-center bg-muted/10 py-5 border-y border-border/40">
        
        {/* تأثير التلاشي الجانبي المتوافق مع الثيمين */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex flex-nowrap gap-12 md:gap-24 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 35, // سرعة هادئة تتناسب مع الحجم الصغير
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* حجم خط الشعارات مصغر (text-lg / text-xl) ليكون شريطاً احترافياً */}
              <span className="text-lg md:text-xl font-bold text-foreground/20 hover:text-[#00E5FF] transition-all duration-500 cursor-default select-none whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersMarquee;