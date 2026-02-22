import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ImagePlaceholder } from '@/components/ImagePlaceholder';

const Spain = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="pt-32 pb-24">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-headline mb-4">Španělsko</h1>
          <p className="text-muted-foreground text-body-lg mb-12">Objevte naše cyklistické zájezdy do Španělska.</p>
        </motion.div>

        {/* Grand Départ Barcelona */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ImagePlaceholder label="Image 7" className="aspect-video w-full" />
            <div>
              <h2 className="text-subhead mb-2">Grand Départ Barcelona</h2>
              <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">30. 6. 2026 — 7. 7. 2026 · Španělsko</p>
              <div className="text-muted-foreground space-y-4 mb-8">
                <p className="italic text-sm uppercase tracking-widest">Itinerář — bude doplněn</p>
                <div className="border-l-4 border-primary pl-4 py-2 space-y-2">
                  <p>Den 1: Příjezd do Barcelony</p>
                  <p>Den 2–3: Poznávání Katalánska na kole</p>
                  <p>Den 4: Grand Départ TDF</p>
                  <p>Den 5–7: Etapy Tour de France</p>
                  <p>Den 8: Odjezd</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Soustředění Calp */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ImagePlaceholder label="Image 8" className="aspect-video w-full" />
            <div>
              <h2 className="text-subhead mb-2">Soustředění Calp</h2>
              <p className="text-sm text-muted-foreground mb-6 tracking-widest uppercase">Prosinec 2026, Únor 2027 · Španělsko</p>
              <div className="text-muted-foreground space-y-4">
                <p className="italic text-sm uppercase tracking-widest">Itinerář — bude doplněn</p>
                <div className="border-l-4 border-primary pl-4 py-2 space-y-2">
                  <p>Tréninková soustředění v cyklistickém ráji Costa Blanca.</p>
                  <p>Profesionální zázemí, skupinové vyjížďky, servis a regenerace.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
    <Footer />
  </div>
);

export default Spain;
