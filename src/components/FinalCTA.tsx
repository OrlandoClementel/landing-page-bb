import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const points = [
  'Cronograma de 90 dias pronto',
  'Acesso imediato após o pagamento',
  'Simulados e questões comentadas',
  'Corretor de redação',
  'Acesso vitalício, sem mensalidade',
];

export default function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#003BFF]/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-[#003BFF]/10 rounded-full blur-[160px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FFD500]/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[#FFD500]/30 bg-[#FFD500]/5">
              <Zap className="w-4 h-4 text-[#FFD500] fill-[#FFD500]" />
              <span className="text-[#FFD500] text-sm font-bold">
                Comece hoje mesmo
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Sua aprovação começa{' '}
            <span className="gradient-text-yellow">agora.</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-xl text-white/50 max-w-2xl leading-relaxed mb-10"
          >
            90 dias. Um plano. Um objetivo.{' '}
            <strong className="text-white">Banco do Brasil.</strong>{' '}
            Por{' '}
            <strong className="text-[#FFD500]">R$ 19,90</strong>{' '}
            — pagamento único, sem pegadinhas.
          </motion.p>

          {/* Feature list */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12"
          >
            {points.map((p) => (
              <div key={p} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#003BFF] flex-shrink-0" />
                <span className="text-sm text-white/70">{p}</span>
              </div>
            ))}
          </motion.div>

          {/* Main CTA */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4">
            <motion.a
              href="https://pay.kiwify.com.br/V694bfA"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-4 px-10 py-5 bg-[#FFD500] text-[#030B25] font-black text-xl rounded-2xl overflow-hidden glow-yellow"
            >
              <span className="relative z-10">Garantir meu acesso agora</span>
              <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-200" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFD500] to-[#FFF0A0] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>

            <div className="flex items-center gap-3 text-white/30 text-sm">
              <span>R$ 19,90</span>
              <span>•</span>
              <span>Pagamento único</span>
              <span>•</span>
              <span>Acesso imediato</span>
            </div>
          </motion.div>

          {/* Stars */}
          <motion.div
            variants={fadeInUp}
            className="mt-14 flex flex-col items-center gap-3"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#FFD500] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
