import { motion } from 'framer-motion';
import {
  Calendar,
  FileText,
  PenTool,
  BarChart3,
  Target,
  Infinity,
} from 'lucide-react';
import {
  fadeInUp,
  staggerContainer,
  viewportOptions,
} from '../utils/animations';

const features = [
  {
    icon: Calendar,
    title: 'Cronograma Estruturado',
    text: 'Você sabe exatamente o que estudar em cada um dos 90 dias. Sem dúvidas, sem improviso.',
  },
  {
    icon: Target,
    title: 'Simulados por Fase',
    text: 'Treine no momento certo da jornada com simulados liberados conforme seu avanço.',
  },
  {
    icon: PenTool,
    title: 'Corretor de Redação',
    text: 'Receba feedback detalhado para evoluir sua escrita e chegar mais preparado para a prova.',
  },
  {
    icon: BarChart3,
    title: 'Controle de Progresso',
    text: 'Acompanhe sua evolução diária e visualize claramente o caminho até a prova.',
  },
  {
    icon: FileText,
    title: 'Tudo em um Lugar',
    text: 'Cronograma, PDFs, exercícios, simulados e redação organizados em uma única plataforma.',
  },
  {
    icon: Infinity,
    title: 'Acesso Vitalício',
    text: 'Pague apenas uma vez e utilize a plataforma no seu ritmo, sem mensalidades.',
  },
];

function FeatureCard({
  icon: Icon,
  title,
  text,
}: {
  icon: any;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group glass rounded-2xl p-6 border border-white/[0.06] hover:border-[#003BFF]/25 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-[#003BFF]/10 border border-[#003BFF]/20 flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-[#003BFF]" />
      </div>

      <h3 className="text-white font-bold text-lg mb-3">
        {title}
      </h3>

      <p className="text-white/60 leading-relaxed text-sm">
        {text}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#003BFF]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD500]/10 border border-[#FFD500]/30 text-[#FFD500] text-xs font-semibold uppercase tracking-wider">
              Diferenciais
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Por que o{' '}
            <span className="gradient-text">
              Projeto 90 Dias
            </span>{' '}
            é diferente?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Um sistema criado para eliminar a dúvida mais comum do
            concurseiro: o que estudar hoje.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}