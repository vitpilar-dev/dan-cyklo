import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const JoinSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="join" className="section-padding bg-foreground text-primary-foreground" ref={ref}>
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-sm tracking-widest uppercase text-primary-foreground/60">
              Ready To Suffer?
            </span>
            <h2 className="text-headline mt-4 mb-8">
              THE ROAD DOESN'T WAIT.<br />
              NEITHER SHOULD YOU.
            </h2>
            <p className="text-body-lg text-primary-foreground/70 mb-10">
              Join an elite collective of riders who understand that the greatest 
              achievements lie beyond comfort. Limited membership available for 
              those ready to commit to the climb.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/70 transition-colors"
              required
            />
            <button type="submit" className="btn-hero-outline whitespace-nowrap">
              Request Access
            </button>
          </motion.form>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm text-primary-foreground/50 mt-6"
          >
            By joining, you agree to embrace the suffering.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
