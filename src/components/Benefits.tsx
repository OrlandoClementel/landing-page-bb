import { motion } from 'framer-motion';
import {
  CalendarDays,
  BookOpen,
  FileText,
  MessageSquare,
  PenLine,
  BarChart3,
  Infinity,
  Zap,
} from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const benefits = [
  {
    icon: CalendarDays,
    title: 'Plano de 90 Dias',
    desc: 'Cronograma diário completo e detalhado. Você sabe exatamente o que estudar em cada um dos 90 dias. Sem dúvidas, sem perda de tempo.',
    color: '#003BFF',
    tag: 'Exclusivo',
  },
  {
    icon: BookOpen,
    title: 'Simulados por Fase',
    desc: 'Simulados específicos para cada fase do concurso, com nível de dificuldade progressivo para treinar do jeito certo.',
    color: '#7C3AED',
    tag: 'Estratégico',
  },
  {
    icon: FileText,
    title: 'Exercícios por Assunto',
    desc: 'Centenas de questões organizadas por matéria e tópico para você fixar o conteúdo e ir além da teoria.',
    color: '#059669',
    tag: 'Prático',
  },
  {
    icon: MessageSquare,
    title: 'Questões Comentadas',
    desc: 'Todas as questões com gabarito detalhado e comentário explicativo. Aprenda com cada erro e acerto.',
    color: '#D97706',
    tag: 'Didático',
  },
  {
    icon: PenLine,
    title: 'Corretor de Redação',
    desc: 'Envie sua redação e receba correção detalhada com nota por critério: estrutura, coesão, argumentação e adequação.',
    color: '#EC4899',
    tag: 'IA Integrada',
  },
  {
    icon: BarChart3,
    title: 'Controle de Progresso',
    desc: 'Dashboard completo com métricas de evolução, streak de dias de estudo, taxa de acertos e ranking entre estudantes.',
    color: '#06B6D4',
    tag: 'Analítico',
  },
  {
    icon: FileText,
    title: 'PDFs Organizados',
    desc: 'Todo material de estudo em PDF, organizado por matéria e ordenado de acordo com o cronograma dos 90 dias.',
    color: '#F97316',
    tag: 'Completo',
  },
  {
    icon: Infinity,
    title: 'Acesso Vitalício',
    desc: 'Pague uma vez e tenha acesso para sempre. Sem mensalidades, sem renovações. Seu material está sempre disponível.',
    color: '#FFD500',
    tag: 'Vitalício',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#003BFF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#001B7A]/10 rounded-full blur-[100px]" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFD500]/10 border border-[#FFD500]/30 text-[#FFD500] text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5" />
              O que está incluído
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Uma preparação completa para o{' '}
            <span className="gradient-text-yellow">concurso do Banco do Brasil</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Não é um curso avulso. É um sistema estruturado para te guiar em todas as etapas da sua preparação.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits.map(({ icon: Icon, title, desc, color, tag }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="relative group"
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `radial-gradient(circle, ${color}20, transparent 70%)` }}
              />

              <div className="relative h-full glass rounded-2xl p-6 border border-white/[0.06] group-hover:border-white/[0.14] transition-all duration-300 flex flex-col">
                {/* Tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{ background: `${color}18`, border: `1px solid ${color}35` }}
                  >
                    <Icon className="w-6 h-6" style={{ color }} />
                  </div>
                  <span
                    className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide"
                    style={{ background: `${color}15`, color, border: `1px solid ${color}25` }}
                  >
                    {tag}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-3">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1">{desc}</p>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
