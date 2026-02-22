import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start" ref={ref}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <ImagePlaceholder label="Image 6" className="aspect-square w-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <h1 className="text-headline">O nás</h1>
              <div className="text-body-lg text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Co kdybyste mohli nahlédnout za oponu vrcholové cyklistiky? My jsme ten svět zažili zevnitř jako sportovci i jako staff. A nyní jsme tu proto, abychom tento svět zpřístupnili vám.
                </p>
                <p>
                  Naším posláním je otevřít vám dveře do světa profesionální cyklistiky, aniž byste byli profíky. Proto vás bereme přímo do centra dění. S námi zažijete atmosféru největších světových závodů z bezprostřední blízkosti.
                </p>
                <p>
                  Poskytneme vám zázemí, know-how a příležitosti, které jinde nenajdete. Od fandění na Grand Tour přes závodění na kostkách Paris Roubaix až po coffee ride ve slunném Španělsku či v okolí Prahy.
                </p>
                <p>
                  Pojďte s námi tvořit komunitu a sdílet vášeň, která nás spojuje.
                </p>
              </div>
              <Link to="/join" className="btn-primary mt-4 inline-block">
                Stát se členem
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
