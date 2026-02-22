import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

const France = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-headline mb-4">Francie</h1>
          <p className="text-muted-foreground text-body-lg mb-12">Objevte naše cyklistické zájezdy do Francie.</p>
        </motion.div>

        {/* Paris Roubaix */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ImagePlaceholder label="Image 9" className="aspect-video w-full" />
            <div>
              <h2 className="text-subhead mb-6">Paris Roubaix</h2>
              <div className="text-muted-foreground space-y-4 mb-8">
                <p className="italic text-sm uppercase tracking-widest">Itinerář — bude doplněn</p>
                <div className="border-l-4 border-primary pl-4 py-2 space-y-2">
                  <p>Den 1: Příjezd, registrace</p>
                  <p>Den 2: Tréninkový okruh po kostkách</p>
                  <p>Den 3: Závod Paris Roubaix</p>
                  <p>Den 4: Odjezd</p>
                </div>
              </div>
              <div className="bg-secondary p-6 mt-8">
                <p className="text-lg font-heading uppercase tracking-wide">
                  Připravujeme pro vás na rok 2027. Chceš jet s námi?{' '}
                  <Link to="/join" className="underline font-bold hover:text-accent transition-colors">
                    Přidej se do týmu.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
    <Footer />
  </div>
);

export default France;
