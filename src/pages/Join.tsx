import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { toast } from 'sonner';

const races = [
  'Grand Départ Barcelona (TDF)',
  'Soustředění Calp',
  'Paris Roubaix',
  'Milan San Remo',
  'Strade Bianche',
];

const Join = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', race: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Děkujeme za registraci! Ozveme se vám.');
    setForm({ firstName: '', lastName: '', email: '', race: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-headline mb-4 text-center">Přidej se</h1>
            <p className="text-muted-foreground text-body-lg text-center mb-12">
              Zaregistruj se a staň se součástí komunity RUBO.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium tracking-widest uppercase mb-2">Jméno</label>
                <input
                  type="text"
                  required
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Jan"
                />
              </div>
              <div>
                <label className="block text-sm font-medium tracking-widest uppercase mb-2">Příjmení</label>
                <input
                  type="text"
                  required
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Novák"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium tracking-widest uppercase mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="jan@email.cz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium tracking-widest uppercase mb-2">
                Který závod, nebo soustředění tě láká nejvíce?
              </label>
              <select
                required
                value={form.race}
                onChange={(e) => setForm({ ...form, race: e.target.value })}
                className="w-full px-4 py-3 border-2 border-border bg-background text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Vyber možnost...</option>
                {races.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn-primary w-full text-center py-4">
              Odeslat registraci
            </button>
          </motion.form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Join;
