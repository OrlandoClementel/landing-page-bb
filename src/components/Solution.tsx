import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, slideInLeft, slideInRight, viewportOptions } from '../utils/animations';

const solutions = [
  {
    problem: 'Não sabe por onde começar',
    solution: 'O sistema te entrega o dia 1, 2, 3… até o dia 90. Sem decisões, só ação.',
  },
  {
    problem: 'Troca de material toda semana',
    solution: 'Um único sistema com tudo que você precisa. Nada a buscar fora daqui.',
  },
  {
    problem: 'Perde tempo montando cronogramas',
    solution: 'Cronograma pronto, testado e aprovado. Você abre e começa a estudar.',
  },
  {
    problem: 'Não acompanha sua evolução',
    solution: 'Dashboard de progresso em tempo real. Veja exatamente onde está e para onde vai.',
  },
];

export default function Solution() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#003BFF]/8 rounded-full blur-[120px]" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003BFF]/10 border border-[#003BFF]/30 text-[#003BFF] text-xs font-semibold uppercase tracking-wider">
              A solução
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            BB PRO resolve{' '}
            <span className="gradient-text">cada um desses problemas</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Um sistema estruturado que elimina todas as dúvidas e coloca você no caminho certo do primeiro ao último dia.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: comparison list */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-4"
          >
            {solutions.map(({ problem, solution }) => (
              <motion.div
                key={problem}
                whileHover={{ scale: 1.02 }}
                className="relative group glass rounded-2xl p-5 border border-white/[0.06] hover:border-[#003BFF]/30 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#003BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex items-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                      <span className="text-red-400/80 text-xs font-medium line-through">{problem}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#003BFF] flex-shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{solution}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Value prop card */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-[#003BFF]/20 rounded-3xl blur-2xl scale-95" />

            <div className="relative rounded-3xl overflow-hidden border border-[#003BFF]/30">
              {/* Card header */}
              <div className="bg-gradient-to-br from-[#003BFF] to-[#001B7A] p-8">
                <div className="text-white/60 text-sm font-semibold uppercase tracking-wider mb-2">O que você recebe</div>
                <div className="text-white text-3xl font-black mb-1">Projeto 90 Dias</div>
                <div className="text-white/60 text-sm">Um plano que funciona, do dia 1 ao dia 90.</div>
              </div>

              {/* Card body */}
              <div className="bg-[#0A1535] p-8">
                <div className="space-y-4">
                  {[
                    'Cronograma completo dia a dia',
                    'Materiais em PDF organizados',
                    'Exercícios por assunto',
                    'Questões comentadas',
                    'Simulados por fase do concurso',
                    'Corretor de redação com feedback',
                    'Dashboard de progresso',
                    'Acesso vitalício',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#003BFF]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#003BFF]" />
                      </div>
                      <span className="text-white/70 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white/40 text-xs">Investimento único</div>
                      <div className="text-white text-3xl font-black mt-0.5">R$ 19,90</div>
                    </div>
                    <motion.a
                      href="#oferta"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      className="flex items-center gap-2 px-5 py-3 bg-[#003BFF] text-white font-bold text-sm rounded-xl"
                    >
                      Garantir vaga
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
