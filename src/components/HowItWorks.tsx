import { motion } from 'framer-motion';
import { UserPlus, Unlock, BookMarked, Trophy } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Faça seu cadastro',
    desc: 'Acesse a plataforma, crie sua conta em menos de 2 minutos e realize o pagamento único de R$ 19,90.',
    color: '#003BFF',
  },
  {
    number: '02',
    icon: Unlock,
    title: 'Receba acesso imediato',
    desc: 'Assim que o pagamento for confirmado, você já tem acesso completo a todo o conteúdo da plataforma.',
    color: '#7C3AED',
  },
  {
    number: '03',
    icon: BookMarked,
    title: 'Siga o cronograma',
    desc: 'Abra o painel, veja a tarefa do dia e estude. Sem dúvidas, sem indecisão. O plano já está pronto para você.',
    color: '#059669',
  },
  {
    number: '04',
    icon: Trophy,
    title: 'Evolua até a prova',
    desc: 'Acompanhe seu progresso, faça os simulados, corrija sua redação e chegue no dia da prova com confiança total.',
    color: '#FFD500',
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#001B7A]/15 rounded-full blur-[100px]" />
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
              Como funciona
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Simples, rápido e{' '}
            <span className="gradient-text">eficiente</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Em menos de 5 minutos você já está com o plano de 90 dias na sua tela, pronto para começar.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {steps.map(({ number, icon: Icon, title, desc, color }, index) => (
              <motion.div
                key={number}
                variants={fadeInUp}
                className="relative group"
              >
                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-px h-4 bg-gradient-to-b from-white/20 to-transparent" />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Step circle */}
                  <div className="relative mb-6">
                    {/* Outer ring */}
                    <div
                      className="absolute inset-0 rounded-full opacity-20 blur-md scale-150"
                      style={{ backgroundColor: color }}
                    />
                    <div
                      className="relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ borderColor: `${color}50`, backgroundColor: `${color}15` }}
                    >
                      <Icon className="w-7 h-7" style={{ color }} />
                    </div>

                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-white"
                      style={{ backgroundColor: color }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Step number label */}
                  <div
                    className="text-xs font-black mb-2 tracking-widest"
                    style={{ color: `${color}80` }}
                  >
                    PASSO {number}
                  </div>

                  <h3 className="font-bold text-white text-lg mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA below steps */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mt-16"
        >
          <motion.a
            href="#oferta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#003BFF] text-white font-bold text-base rounded-2xl glow-blue"
          >
            Começar agora por R$ 19,90
          </motion.a>
          <p className="mt-3 text-white/30 text-sm">Acesso imediato após o pagamento</p>
        </motion.div>
      </div>
    </section>
  );
}
