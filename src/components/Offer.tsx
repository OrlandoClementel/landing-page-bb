import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  Infinity,
  Star,
} from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn, viewportOptions } from '../utils/animations';

const includes = [
  { label: 'Cronograma completo de 90 dias', highlight: true },
  { label: 'PDFs organizados por matéria' },
  { label: 'Exercícios por assunto' },
  { label: 'Questões comentadas' },
  { label: 'Simulados por fase do concurso' },
  { label: 'Corretor de redação' },
  { label: 'Controle de progresso (Dashboard)' },
  { label: 'Acesso vitalício sem mensalidade', highlight: true },
];

const guarantees = [
  { icon: Shield, label: 'Pagamento seguro' },
  { icon: Zap, label: 'Acesso imediato' },
  { icon: Infinity, label: 'Acesso vitalício' },
  { icon: Star, label: 'Pagamento único' },
];

export default function Offer() {
  return (
    <section id="oferta" className="relative py-24 overflow-hidden">
      {/* Rich background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] bg-[#003BFF]/12 rounded-full blur-[150px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#003BFF]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#003BFF]/20 to-transparent" />
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
              <Zap className="w-3.5 h-3.5" />
              Projeto 90 Dias
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Seu plano de estudos <br className="hidden sm:block" />
            para os próximos{' '}
            <span className="gradient-text-yellow">90 dias</span>
            <br className="hidden sm:block" />
            seus estudos hoje
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Cronograma completo, PDFs organizados, exercícios, simulados e corretor de redação em uma única plataforma.
          </motion.p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="w-full max-w-2xl"
          >
            {/* Main offer card */}
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#003BFF]/40 to-[#001B7A]/20 rounded-3xl blur-2xl scale-105" />

              <div className="relative rounded-3xl overflow-hidden border border-[#003BFF]/40">
                {/* Card top gradient */}
                <div className="relative bg-gradient-to-br from-[#003BFF] via-[#0025C0] to-[#001B7A] p-8 sm:p-10">
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 shimmer opacity-50" />

                  <div className="relative">
                    {/* Product name */}
                    <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                      <div>
                        <div className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-1">BB PRO</div>
                        <h3 className="text-white text-3xl sm:text-4xl font-black leading-tight">
                          Projeto 90 Dias
                        </h3>
                        <p className="text-white/60 text-sm mt-2">Sistema completo para o Banco do Brasil</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="text-[#FFD500] text-5xl font-black leading-none">R$<span className="text-6xl">19</span><span className="text-3xl">,90</span></div>
                        <div className="text-white/60 text-xs mt-1">pagamento único</div>
                      </div>
                    </div>

                    {/* Guarantee pills */}
                    <div className="flex flex-wrap gap-2">
                      {guarantees.map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                          <Icon className="w-3.5 h-3.5 text-white/70" />
                          <span className="text-white/80 text-xs font-medium">{label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="bg-[#050E2E] p-8 sm:p-10">
                  {/* What's included */}
                  <div className="mb-8">
                    <h4 className="text-white/60 text-xs font-bold uppercase tracking-widest mb-5">O que está incluído</h4>
                    <div className="space-y-3">
                      {includes.map(({ label, highlight }) => (
                        <div key={label} className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            highlight ? 'bg-[#FFD500]/20' : 'bg-[#003BFF]/20'
                          }`}>
                            <CheckCircle2 className={`w-3.5 h-3.5 ${highlight ? 'text-[#FFD500]' : 'text-[#003BFF]'}`} />
                          </div>
                          <span className={`text-sm ${highlight ? 'text-white font-semibold' : 'text-white/70'}`}>{label}</span>
                          {highlight && (
                            <span className="ml-auto px-2 py-0.5 bg-[#FFD500]/15 text-[#FFD500] text-[10px] font-bold rounded uppercase">
                              Destaque
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="https://pay.kiwify.com.br/V694bfA"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#FFD500] text-[#030B25] font-black text-lg rounded-2xl overflow-hidden glow-yellow transition-all duration-300"
                  >
                    <span className="relative z-10">Garantir Meu Acesso por R$ 19,90</span>
                    <ArrowRight className="relative z-10 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFD500] to-[#FFF0A0] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  {/* Trust signals below CTA */}
                  <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Shield className="w-3.5 h-3.5" />
                      Pagamento 100% seguro
                    </div>
                    <div className="hidden sm:block w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      Acesso em minutos
                    </div>
                    <div className="hidden sm:block w-px h-3 bg-white/10" />
                    <div className="flex items-center gap-1.5 text-white/40 text-xs">
                      <Infinity className="w-3.5 h-3.5" />
                      Sem mensalidade
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social proof below card */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap justify-center gap-6 text-center"
            >
              {[
                { value: '90 Dias', label: 'plano estruturado' },
                { value: 'Simulados', label: 'por fase' },
                { value: 'Redação', label: 'com correção' },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-white font-black text-xl">{value}</span>
                  <span className="text-white/40 text-xs mt-0.5">{label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
