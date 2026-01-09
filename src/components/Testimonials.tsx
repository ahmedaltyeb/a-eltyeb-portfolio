import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sara Lee",
    role: "IT Director",
    company: "A2C College",
    quote: "Ahmedeltyeb's web development work was outstanding. The project exceeded our expectations and greatly improved user engagement.",
    initials: "SL",
  },
  {
    name: "Tayeb Technology",
    role: "Project Manager",
    company: "",
    quote: "Ahmedeltyeb delivered a top-notch e-commerce site with great performance. His ongoing support has been invaluable.",
    initials: "TT",
  },
  {
    name: "Zool Man",
    role: "Store Owner",
    company: "",
    quote: "Professional and skilled, Ahmedeltyeb made our custom web application a success. His problem-solving was impressive.",
    initials: "ZM",
  },
  {
    name: "Gold Signature",
    role: "Entrepreneur",
    company: "Men's Tailoring",
    quote: "Ahmedeltyeb's UI/UX design improved user satisfaction significantly. His creativity and technical skills are exceptional.",
    initials: "GS",
  },
  {
  name: "Al Arabi Falcons",
  role: "E-commerce & Marketing Client",
  company: "Dubai, UAE",
  quote: "Ahmedeltyeb transformed our digital presence. Beyond building a seamless website, his expertise in landing page optimization and digital marketing significantly boosted our conversion rates.",
  initials: "AF",
},
{
  name: "Epicminds IT",
  role: "Web Applications Lead",
  company: "Bangalore, India",
  quote: "A highly efficient developer who spearheaded over 22 applications. His commitment to web accessibility and UX improvements brought a 30% increase in our site’s inclusivity.",
  initials: "EI",
},
{
  name: "Expert Caller",
  role: "Frontend Developer Project",
  company: "Bangalore, India",
  quote: "He engineered custom API integrations that slashed our load times by 50% and overhauled our mobile experience, leading to a 45% surge in user engagement.",
  initials: "EC",
},   
];

// إعدادات الحركة: تلاشي مع حركة رأسية بسيطة
const variants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  // منطق التغيير التلقائي كل 5 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  return (
    <section id="testimonials" className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What <span className="text-primary">Clients Say</span>
          </h2>
        </div>

        {/* حاوية ثابتة الارتفاع لمنع القفز في الصفحة */}
        <div className="relative max-w-3xl mx-auto min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="w-full"
            >
              <Card className="bg-card border-border shadow-md">
                <CardContent className="p-8 md:p-12 text-center flex flex-col items-center">
                  <Quote className="w-10 h-10 text-primary/20 mb-6" />
                  
                  <p className="text-lg md:text-xl text-muted-foreground italic mb-8 leading-relaxed italic">
                    "{current.quote}"
                  </p>
                  
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                      {current.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground leading-tight">
                        {current.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {current.role}
                        {current.company && `, ${current.company}`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};  