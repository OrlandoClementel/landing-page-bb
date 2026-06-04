import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const faqs = [
  {
    q: 'Para quem é o BB PRO Projeto 90 Dias?',
    a: 'O BB PRO é para qualquer pessoa que queira se preparar para o concurso do Banco do Brasil de forma estruturada e eficiente. Seja você iniciante ou já tenha tentado antes, o sistema se adapta ao seu ritmo com um cronograma claro e progressivo.',
  },
  {
    q: 'O que acontece após eu realizar o pagamento?',
    a: 'Assim que o pagamento for confirmado (normalmente em alguns minutos), você recebe um e-mail com as instruções de acesso. Em seguida, basta criar sua senha e já entrar na plataforma com tudo disponível.',
  },
  {
    q: 'Preciso de algum conhecimento prévio?',
    a: 'Não! O cronograma de 90 dias começa do básico e evolui gradualmente. Você não precisa ter nenhum conhecimento anterior sobre as matérias do concurso. O sistema guia você do zero.',
  },
  {
    q: 'Quanto tempo por dia preciso estudar?',
    a: 'O cronograma é planejado para sessões diárias de 2 a 3 horas. Se um dia você não conseguir, não tem problema — o sistema permite que você reorganize facilmente. O mais importante é manter a consistência.',
  },
  {
    q: 'O acesso realmente é vitalício?',
    a: 'Sim, 100%! Você paga uma única vez e nunca mais paga nada. Seu acesso à plataforma, ao cronograma, aos PDFs, simulados e ao corretor de redação é permanente. Mesmo após a prova, você mantém tudo.',
  },
  {
    q: 'Qual é a diferença entre o BB PRO e um curso tradicional?',
    a: 'Cursos tradicionais te jogam horas e horas de videoaula sem dizer o que estudar, quando estudar e em que ordem. O BB PRO é diferente: ele é um sistema de organização e execução. Ele te diz exatamente o que fazer em cada um dos 90 dias, com os materiais certos, na ordem certa.',
  },
  {
    q: 'O corretor de redação funciona para todos os tipos de texto?',
    a: 'O corretor de redação é focado no estilo dissertativo-argumentativo exigido pelo concurso do Banco do Brasil. Você envia sua redação e recebe uma correção detalhada com nota por critério: estrutura, coesão, argumentação e adequação ao tema.',
  },
  {
    q: 'E se eu não conseguir terminar os 90 dias antes da prova?',
    a: 'Como o acesso é vitalício, você pode continuar o cronograma mesmo depois da data da prova para se preparar para futuras edições. Além disso, o sistema prioriza automaticamente os conteúdos de maior peso no concurso.',
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      variants={fadeInUp}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open ? 'border-[#003BFF]/40 bg-[#003BFF]/5' : 'border-white/[0.06] bg-transparent'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
      >
        <div className="flex items-start gap-4">
          <span className="text-[#003BFF] text-sm font-black flex-shrink-0 mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white font-semibold text-base leading-snug">{q}</span>
        </div>
        <div className={`w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          open ? 'border-[#003BFF] bg-[#003BFF]/20 rotate-0' : 'border-white/10 bg-white/[0.04]'
        }`}>
          {open ? (
            <Minus className="w-4 h-4 text-[#003BFF]" />
          ) : (
            <Plus className="w-4 h-4 text-white/40" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pl-16 text-white/60 text-sm leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#001B7A]/15 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center mb-14"
        >
          <motion.div variants={fadeInUp} className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003BFF]/10 border border-[#003BFF]/30 text-[#003BFF] text-xs font-semibold uppercase tracking-wider">
              Perguntas frequentes
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Ainda tem{' '}
            <span className="gradient-text">dúvidas?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg"
          >
            Respondemos as perguntas mais comuns sobre o BB PRO.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="space-y-3"
        >
          {faqs.map((item, index) => (
            <FAQItem key={item.q} {...item} index={index} />
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="mt-12 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
