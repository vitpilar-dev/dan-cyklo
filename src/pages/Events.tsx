import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

const events = [
  {
    title: 'Grand Départ TDF Barcelona',
    location: 'Španělsko',
    dates: '30. 6. 2026 — 7. 7. 2026',
    imageLabel: 'Image 7',
    link: '/spain',
  },
  {
    title: 'Soustředění Calp',
    location: 'Španělsko',
    dates: 'Prosinec 2026, Únor 2027',
    imageLabel: 'Image 8',
    link: '/spain',
  },
  {
    title: 'Paris Roubaix',
    location: 'Francie',
    dates: 'Termín bude upřesněn',
    imageLabel: 'Image 9',
    link: '/france',
  },
  {
    title: 'Milan San Remo',
    location: 'Itálie',
    dates: 'Termín bude upřesněn',
    imageLabel: 'Image 10',
    link: '/italy',
  },
  {
    title: 'Strade Bianche',
    location: 'Itálie',
    dates: 'Termín bude upřesněn',
    imageLabel: 'Image 11',
    link: '/italy',
  },
];

const Events = () => (
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
          <h1 className="text-headline">Nadcházející cyklistické akce</h1>
          <p className="text-muted-foreground text-body-lg mt-4">Všechny naše plánované zájezdy a akce</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={event.link} className="block">
                <div className="relative overflow-hidden">
                  <ImagePlaceholder label={event.imageLabel} className="aspect-[4/3]" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-500" />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="font-heading text-xl uppercase tracking-wide group-hover:text-accent transition-colors">{event.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><MapPin size={14} /> {event.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={14} /> {event.dates}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium tracking-widest uppercase text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Detail <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Events;
