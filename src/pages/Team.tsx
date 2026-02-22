import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import member1 from '@/assets/member-1.jpg';
import member2 from '@/assets/member-2.jpg';
import member3 from '@/assets/member-3.jpg';

const members = [
  {
    name: 'Daniel Rubeš',
    nickname: 'Dan',
    role: 'Organizátor, Průvodce',
    description: 'Dan se bude starat o hladký průběh celé akce. Mimo jiné je student a bývalý profesionální cyklista v týmu Elkov Kasper, mistr republiky v časovce do 23 let a účastník mistrovství světa a Evropy.',
    image: member1,
  },
  {
    name: 'Petr Kniha',
    nickname: 'Petr',
    role: 'Mechanik / Průvodce',
    description: 'Petr vám pomůže, když budete mít jakýkoliv problém s kolem. Je to aktivní cyklista, student a mechanik v profesionálním týmu Unlimited KM Trading.',
    image: member2,
  },
  {
    name: 'Michal Rejholec',
    nickname: 'Rejžák',
    role: 'Masér / Zdravotník',
    description: 'Michal vám připraví tolik rýžových koláčků, kolik jen dokážete sníst. Mimo jiné se postará o vaše tělo, a pokud mu chcete udělat radost, velká Plzeň je ta jedna správná cesta. Má 6 let zkušeností jako masér profesionálního cyklistického týmu Elkov Kasper a 4 roky u české reprezentace.',
    image: member3,
  },
];

const MemberCard = ({ member, index }: { member: typeof members[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
    >
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden aspect-[4/5]">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-4">
        <div className="bg-primary text-primary-foreground inline-block px-4 py-2">
          <h3 className="font-heading text-xl md:text-2xl uppercase tracking-wide">
            {member.name} – {member.role}
          </h3>
        </div>
        <p className="text-muted-foreground leading-relaxed text-lg">{member.description}</p>
      </div>
    </motion.div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-headline md:text-display mb-6">Tým</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Poznejte lidi, kteří stojí za každou naší akcí.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {members.map((member, index) => (
              <MemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
