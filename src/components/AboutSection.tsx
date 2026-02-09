import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '@/assets/about-image.jpg';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="text-sm tracking-widest uppercase text-muted-foreground">
              Est. 2018
            </span>
            <h2 className="text-headline mt-4 mb-8">
              WE DON'T JUST RIDE.<br />
              <span className="text-muted-foreground">WE SUFFER TOGETHER.</span>
            </h2>
            <div className="space-y-6 text-body-lg text-muted-foreground">
              <p>
                Ruby is not a cycling club. It's a brotherhood forged in the 
                crucible of mountain passes and endless kilometers. We seek out 
                the roads that break you because that's where you find yourself.
              </p>
              <p>
                Every climb is a battle. Every descent, a reward. We embrace the 
                pain, chase the summit, and push beyond what we thought possible. 
                This is where excuses die and legends are born.
              </p>
              <p>
                No shortcuts. No regrets. Just the road, the wheels, and the 
                relentless pursuit of something greater than ourselves.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-10 flex flex-wrap gap-12"
            >
              <div>
                <span className="text-4xl md:text-5xl font-heading font-bold">500+</span>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-2">
                  Members Worldwide
                </p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-heading font-bold">75K</span>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-2">
                  Kilometers Ridden
                </p>
              </div>
              <div>
                <span className="text-4xl md:text-5xl font-heading font-bold">12</span>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-2">
                  Epic Trips Yearly
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square overflow-hidden">
              <motion.img
                src={aboutImage}
                alt="Cyclists riding together in the mountains"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </div>
            {/* Decorative Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-foreground -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
