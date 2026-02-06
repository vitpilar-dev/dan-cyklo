import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

import tripAlps from '@/assets/trip-alps.jpg';
import tripPyrenees from '@/assets/trip-pyrenees.jpg';
import tripDolomites from '@/assets/trip-dolomites.jpg';
import tripMallorca from '@/assets/trip-mallorca.jpg';

const trips = [
  {
    id: 1,
    title: 'The Alps',
    subtitle: 'France & Switzerland',
    date: 'July 2025',
    elevation: '18,500m',
    image: tripAlps,
  },
  {
    id: 2,
    title: 'Pyrenees',
    subtitle: 'Spain & France',
    date: 'August 2025',
    elevation: '15,200m',
    image: tripPyrenees,
  },
  {
    id: 3,
    title: 'Dolomites',
    subtitle: 'Italy',
    date: 'September 2025',
    elevation: '14,800m',
    image: tripDolomites,
  },
  {
    id: 4,
    title: 'Mallorca',
    subtitle: 'Balearic Islands',
    date: 'March 2025',
    elevation: '8,200m',
    image: tripMallorca,
  },
];

const TripCard = ({ trip, index }: { trip: typeof trips[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={trip.image}
          alt={trip.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Overlay - Inverts on hover */}
      <div className="absolute inset-0 bg-background/0 group-hover:bg-foreground transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="transform transition-all duration-500">
          <span className="text-xs tracking-widest uppercase text-primary-foreground/70 group-hover:text-primary-foreground transition-colors duration-500">
            {trip.date}
          </span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold mt-2 text-primary-foreground group-hover:text-primary-foreground transition-colors duration-500">
            {trip.title}
          </h3>
          <p className="text-sm text-primary-foreground/70 group-hover:text-primary-foreground/70 transition-colors duration-500">
            {trip.subtitle}
          </p>
          
          {/* Hidden details revealed on hover */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <div className="flex items-center gap-2 text-primary-foreground">
              <span className="text-sm tracking-widest uppercase">
                {trip.elevation} Elevation
              </span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Border effect */}
      <div className="absolute inset-0 border border-primary-foreground/20 group-hover:border-primary-foreground/0 transition-colors duration-500" />
    </motion.div>
  );
};

export const TripsSection = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="trips" className="section-padding bg-foreground text-primary-foreground">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-sm tracking-widest uppercase text-primary-foreground/60">
            Upcoming Expeditions
          </span>
          <h2 className="text-headline mt-4">
            WHERE LEGENDS ARE MADE
          </h2>
        </motion.div>

        {/* Trips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <TripCard key={trip.id} trip={trip} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <button className="btn-hero-outline">
            View All Trips
          </button>
        </motion.div>
      </div>
    </section>
  );
};
