import { motion } from 'framer-motion';
import { HelpCircle, Shuffle, Clock, LineChart } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const problems = [
  {
    icon: HelpCircle,
    title: 'Não sabe por onde começar',
    desc: 'Com tantas matérias e materiais, fica impossível saber qual estudar primeiro. O resultado: paralisia e procrastinação.',
    color: '#EF4444',
  },
  {
    icon: Shuffle,
    title: 'Troca de material toda semana',
    desc: 'Você começa um curso, vê outro e troca. Depois de meses, ainda está na mesma matéria sem ter avançado de verdade.',
    color: '#F97316',
  },
  {
    icon: Clock,
    title: 'Perde tempo montando cronogramas',
    desc: 'Horas gastas planejando o estudo que poderiam ter sido usadas estudando. Planilha após planilha, nada funciona.',
    color: '#A855F7',
  },
  {
    icon: LineChart,
    title: 'Não acompanha sua evolução',
    desc: 'Estudar sem medir seu progresso é andar no escuro. Você não sabe o que já sabe e o que ainda falta dominar.',
    color: '#EC4899',
  },
];

export default function Problem() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-900/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold uppercase tracking-wider">
              O problema
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Por que a maioria{' '}
            <span className="text-red-400">não passa</span>{' '}
            no Banco do Brasil?
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Não é falta de inteligência nem de esforço. É falta de{' '}
            <strong className="text-white/80">método e direção.</strong>
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map(({ icon: Icon, title, desc, color }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at top left, ${color}15, transparent 70%)` }}
              />
              <div className="relative glass rounded-2xl p-6 h-full border border-white/[0.06] group-hover:border-white/[0.12] transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="font-bold text-white text-base mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote / callout */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-16 relative"
        >
          <div className="relative glass rounded-2xl p-8 sm:p-10 border border-red-500/10 text-center max-w-3xl mx-auto">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1 bg-[#030B25] rounded-full">
              <span className="text-red-400 text-sm font-semibold">A dura realidade</span>
            </div>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed font-medium">
              "Estudar muito sem direção é como remar um barco sem remo — você se cansa, mas não chega a lugar nenhum."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
