import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "VELOCE redefined what I thought was possible. The suffering is real, but so is the transformation. I came for the rides; I stayed for the brotherhood.",
    name: "Marcus Chen",
    role: "Member since 2020",
    location: "San Francisco, CA",
  },
  {
    id: 2,
    quote: "I've raced professionally for a decade, but nothing compares to the raw intensity of a VELOCE expedition. These aren't rides—they're pilgrimages.",
    name: "Elena Vogt",
    role: "Former Pro Cyclist",
    location: "Munich, Germany",
  },
  {
    id: 3,
    quote: "The Dolomites trip broke me in the best way possible. When you're 3,000 meters up and everything hurts, you discover who you really are.",
    name: "James Hartley",
    role: "Member since 2019",
    location: "London, UK",
  },
  {
    id: 4,
    quote: "More than a club—it's a mindset. VELOCE taught me that comfort is the enemy of growth. Now I seek out the hard roads, in cycling and in life.",
    name: "Sofia Rossi",
    role: "Member since 2021",
    location: "Milan, Italy",
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-widest uppercase text-muted-foreground">
            From The Peloton
          </span>
          <h2 className="text-headline mt-4">
            STORIES OF SUFFERING<br />
            <span className="text-muted-foreground">& TRIUMPH</span>
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prev}
              className="p-3 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-foreground' 
                      : 'bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 border border-foreground hover:bg-foreground hover:text-primary-foreground transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
