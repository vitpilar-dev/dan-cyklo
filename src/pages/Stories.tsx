import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const testimonials = [
  {
    id: 1,
    quote: "RUBO nám ukázalo cyklistiku z úplně jiné perspektivy. Zážitky, které by se nám jinak nesnily. Opravdová komunita lidí, kteří sdílejí stejnou vášeň.",
    name: "Jan Novák",
    role: "Člen od 2022",
  },
  {
    id: 2,
    quote: "Profesionální zázemí, skvělá parta a nezapomenutelné momenty. Paris Roubaix s RUBO byl ten nejlepší cyklistický zážitek mého života.",
    name: "Petra Svobodová",
    role: "Členka od 2023",
  },
  {
    id: 3,
    quote: "Když stojíte na startu závodu, o kterém jste vždycky jen snili, pochopíte, proč to stojí za to. RUBO vám to umožní.",
    name: "Martin Dvořák",
    role: "Člen od 2021",
  },
];

const Stories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => setCurrentIndex((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-headline">Příběhy</h1>
            <p className="text-muted-foreground text-body-lg mt-4">Co říkají naši členové</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <Quote className="mx-auto mb-8 text-muted-foreground" size={48} strokeWidth={1} />
                  <blockquote className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="mt-10">
                    <p className="font-heading text-xl font-semibold tracking-wide uppercase">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">{testimonials[currentIndex].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <button onClick={prev} className="p-3 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300" aria-label="Předchozí">
                <ChevronLeft size={24} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={`w-3 h-3 transition-all duration-300 ${i === currentIndex ? 'bg-foreground' : 'bg-muted-foreground/30'}`} />
                ))}
              </div>
              <button onClick={next} className="p-3 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300" aria-label="Další">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Stories;
