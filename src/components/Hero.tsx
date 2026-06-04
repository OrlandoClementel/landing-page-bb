import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
} from 'lucide-react';

import PlatformMockup from './PlatformMockup';
import { fadeInUp, staggerContainer } from '../utils/animations';

const badges = [
  {
    icon: TrendingUp,
    label: 'Plano de 90 dias',
  },
  {
    icon: Star,
    label: 'Pagamento único',
  },
  {
    icon: Users,
    label: 'Acesso vitalício',
  },
];

const highlights = [
  'Cronograma completo de 90 dias',
  'Exercícios e questões comentadas',
  'Simulados por fase',
  'Corretor de redação',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#003BFF]/10 rounded-full blur-[120px]" />

        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-[#001B7A]/20 rounded-full blur-[80px]" />

        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#003BFF]/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Badge superior */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FFD500]/30 bg-[#FFD500]/5">
              <span className="w-2 h-2 rounded-full bg-[#FFD500] animate-pulse" />

              <span className="text-[#FFD500] text-xs font-semibold tracking-wide uppercase">
                Projeto 90 Dias para Banco do Brasil
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6 max-w-5xl"
          >
            Saiba exatamente o que estudar nos próximos{' '}
            <span className="gradient-text">
              90 dias
            </span>{' '}
            para o{' '}
            <span className="gradient-text-yellow">
              Banco do Brasil.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-white/60 max-w-3xl leading-relaxed mb-8"
          >
            Receba um cronograma completo de 90 dias com PDFs organizados,
            exercícios, questões comentadas, simulados por fase e corretor
            de redação. Tudo em uma única plataforma.
          </motion.p>

          {/* Benefícios rápidos */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-[#003BFF] flex-shrink-0" />

                <span className="text-sm text-white/70">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 items-center mb-6"
          >
            <motion.a
              href="#oferta"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-3 px-8 py-4 bg-[#003BFF] text-white font-bold text-base rounded-2xl overflow-hidden glow-blue transition-all duration-300"
            >
              <span className="relative z-10">
                Quero Começar Agora
              </span>

              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />

              <div className="absolute inset-0 bg-gradient-to-r from-[#0030D9] to-[#0059FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <a
              href="#showcase"
              className="flex items-center gap-2 text-white/50 hover:text-white/80 text-sm font-medium transition-colors"
            >
              Conhecer a plataforma

              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Texto de confiança */}
          <motion.p
            variants={fadeInUp}
            className="text-sm text-white/40 mb-12"
          >
            Acesso imediato • Pagamento único • Sem mensalidades
          </motion.p>

          {/* Badges */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass-light"
              >
                <Icon className="w-4 h-4 text-[#003BFF]" />

                <span className="text-xs text-white/60 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Mockup */}
          <motion.div
            variants={fadeInUp}
            className="w-full max-w-5xl mx-auto"
          >
            <PlatformMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}