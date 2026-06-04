import { motion } from 'framer-motion';
import { Users, Star, BookOpen, Trophy } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const stats = [
  {
    icon: BookOpen,
    value: '90 Dias',
    label: 'Cronograma completo',
    color: '#003BFF',
  },
  {
    icon: Trophy,
    value: 'Simulados',
    label: 'Progressivos',
    color: '#FFD500',
  },
  {
    icon: Star,
    value: 'Exercícios',
    label: 'E questões comentadas',
    color: '#7C3AED',
  },
  {
    icon: Users,
    value: 'Vitalício',
    label: 'Acesso permanente',
    color: '#059669',
  },
];

export default function StatsBanner() {
  return (
    <section className="relative py-6 overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(({ icon: Icon, value, label, color }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="flex items-center gap-4 justify-center"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: `${color}18`, border: `1px solid ${color}30` }}
              >
                <Icon className="w-5 h-5" style={{ color }} />
              </div>
              <div>
                <div className="text-white font-black text-xl leading-none" style={{ color }}>{value}</div>
                <div className="text-white/40 text-xs mt-0.5">{label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
