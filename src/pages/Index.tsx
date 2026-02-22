import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const RaceCard = ({ label, imageLabel, subtitle }: { label: string; imageLabel: string; subtitle: string }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="group relative overflow-hidden"
    >
      <ImagePlaceholder label={imageLabel} className="aspect-[3/4]" />
      <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/80 transition-colors duration-500 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-heading font-bold text-primary-foreground uppercase">{label}</h3>
        <p className="text-primary-foreground/70 text-sm mt-1">{subtitle}</p>
        <Link
          to="/events"
          className="mt-3 inline-flex items-center gap-2 text-primary-foreground text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Nadcházející cyklistické momenty <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

const Index = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const racesRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });
  const racesInView = useInView(racesRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero: Grand Départ Barcelona */}
        <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <ImagePlaceholder label="Image 1" className="w-full h-full" />
            <div className="absolute inset-0 bg-primary/60" />
          </div>
          <div className="relative z-10 container-custom text-primary-foreground py-32">
            <motion.div
              initial="hidden"
              animate={heroInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm tracking-widest uppercase opacity-70">Tour de France 2026</span>
              <h1 className="text-display mt-4 max-w-4xl">
                Grand Départ Barcelona a Katalánsko
              </h1>
              <p className="text-body-lg mt-6 max-w-2xl opacity-80">
                Zažijte start nejslavnějšího cyklistického závodu světa přímo v srdci Barcelony.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/events" className="btn-hero-outline">
                  Nejbližší vyjížďky / Akce
                </Link>
                <Link to="/join" className="btn-hero-outline">
                  Přidej se
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coffee Ride Block */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm tracking-widest uppercase text-muted-foreground">Španělsko</span>
                <h2 className="text-headline mt-4 mb-6">
                  Coffee Ride ve Španělsku a Calpe cyklistický ráj
                </h2>
                <p className="text-body-lg text-muted-foreground mb-8">
                  Přidejte se k nám na nezapomenutelné vyjížďky po slunném pobřeží Španělska. Calpe je rájem pro cyklisty z celého světa.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/events" className="btn-primary">
                    Nejbližší vyjížďky / Akce
                  </Link>
                  <Link to="/spain" className="btn-outline">
                    Více o Španělsku
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ImagePlaceholder label="Image 2" className="aspect-[4/3]" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cyklokroužky Button */}
        <section className="bg-secondary py-16">
          <div className="container-custom text-center">
            <h2 className="text-headline mb-6">Trénuj s námi</h2>
            <p className="text-body-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Naše cyklokroužky a tréninky jsou pro všechny úrovně. Připojte se a zlepšete svou formu.
            </p>
            <Link to="/events" className="btn-primary">
              Cyklokroužky
            </Link>
          </div>
        </section>

        {/* Famous Races Grid */}
        <section ref={racesRef} className="section-padding bg-primary text-primary-foreground">
          <div className="container-custom">
            <motion.div
              initial="hidden"
              animate={racesInView ? 'visible' : 'hidden'}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm tracking-widest uppercase opacity-60">Slavné závody</span>
              <h2 className="text-headline mt-4">Kde se tvoří legendy</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              <RaceCard label="Peklo severu" subtitle="Paris Roubaix" imageLabel="Image 3" />
              <RaceCard label="Štěrková klasika" subtitle="Strade Bianche" imageLabel="Image 4" />
              <RaceCard label="La Primavera" subtitle="Milan San Remo" imageLabel="Image 5" />
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section ref={aboutRef} className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
              >
                <ImagePlaceholder label="Image 6" className="aspect-square" />
              </motion.div>
              <motion.div
                initial="hidden"
                animate={aboutInView ? 'visible' : 'hidden'}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-headline mb-8">O nás</h2>
                <p className="text-body-lg text-muted-foreground leading-relaxed">
                  Co kdybyste mohli nahlédnout za oponu vrcholové cyklistiky? My jsme ten svět zažili zevnitř jako sportovci i jako staff. A nyní jsme tu proto, abychom tento svět zpřístupnili vám.
                </p>
                <Link to="/about" className="btn-primary mt-8 inline-block">
                  Více o nás
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
