import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  CalendarDays,
  BookOpen,
  PenLine,
  BarChart3,
  CheckCircle2,
  Target,
  Clock,
  Flame,
  TrendingUp,
  Award,
  Star,
} from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOptions } from '../utils/animations';

const tabs = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'cronograma', label: 'Cronograma', icon: CalendarDays },
  { id: 'simulados', label: 'Simulados', icon: BookOpen },
  { id: 'redacao', label: 'Redação', icon: PenLine },
  { id: 'desempenho', label: 'Desempenho', icon: BarChart3 },
];

function DashboardScreen() {
  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-bold text-lg">Olá, Ana! 👋</h3>
          <p className="text-white/50 text-sm">Hoje é o dia 42 da sua jornada.</p>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-[#FFD500]/10 border border-[#FFD500]/20">
          <span className="text-[#FFD500] text-xs font-bold">48 dias restantes</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { icon: Flame, value: '42', label: 'Streak', color: '#F97316' },
          { icon: Target, value: '87%', label: 'Acertos', color: '#003BFF' },
          { icon: Award, value: '1.240', label: 'Questões', color: '#FFD500' },
        ].map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="glass-light rounded-xl p-3 text-center">
            <Icon className="w-5 h-5 mx-auto mb-1.5" style={{ color }} />
            <div className="text-white font-black text-xl" style={{ color }}>{value}</div>
            <div className="text-white/40 text-xs mt-0.5">{label}</div>
          </div>
        ))}
      </div>

      <div className="glass-light rounded-xl p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/80 text-sm font-semibold">Progresso geral</span>
          <span className="text-[#003BFF] text-sm font-bold">47%</span>
        </div>
        <div className="h-2.5 bg-white/[0.06] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#003BFF] to-[#0059FF] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '47%' }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-white/30 text-xs">Dia 1</span>
          <span className="text-white/30 text-xs">Dia 90</span>
        </div>
      </div>

      <div className="glass-light rounded-xl p-4">
        <div className="text-white/80 text-sm font-semibold mb-3">Tarefa de hoje</div>
        <div className="flex items-start gap-3 p-3 bg-[#003BFF]/10 rounded-lg border border-[#003BFF]/20">
          <CheckCircle2 className="w-5 h-5 text-[#003BFF] mt-0.5 flex-shrink-0" />
          <div>
            <div className="text-white font-medium text-sm">Português — Interpretação de Texto</div>
            <div className="text-white/40 text-xs mt-0.5 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              2h estimadas • 15 questões
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CronogramaScreen() {
  const items = [
    { day: 'Dia 40', subject: 'Português', topic: 'Coesão e Coerência', time: '2h', done: true },
    { day: 'Dia 41', subject: 'Matemática', topic: 'Porcentagem', time: '2h30', done: true },
    { day: 'Dia 42', subject: 'Português', topic: 'Interpretação de Texto', time: '2h', today: true },
    { day: 'Dia 43', subject: 'Conhecimentos Bancários', topic: 'Sistema Financeiro Nacional', time: '1h30', done: false },
    { day: 'Dia 44', subject: 'Atualidades', topic: 'Economia Brasileira', time: '1h', done: false },
  ];

  return (
    <div className="p-5 space-y-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-bold">Cronograma — Semana 7</h3>
        <span className="text-white/40 text-xs">90 dias de plano</span>
      </div>
      {items.map(({ day, subject, topic, time, done, today }) => (
        <div
          key={day}
          className={`flex items-center gap-4 p-3 rounded-xl border transition-all ${
            today
              ? 'bg-[#003BFF]/15 border-[#003BFF]/40'
              : done
              ? 'bg-white/[0.02] border-white/[0.04] opacity-60'
              : 'glass-light border-white/[0.06]'
          }`}
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
            done ? 'bg-green-500/20' : today ? 'bg-[#003BFF]/30' : 'bg-white/[0.05]'
          }`}>
            {done ? (
              <CheckCircle2 className="w-4 h-4 text-green-400" />
            ) : (
              <CalendarDays className="w-4 h-4 text-white/40" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-white/40 text-xs">{day}</span>
              {today && <span className="px-1.5 py-0.5 bg-[#FFD500]/20 text-[#FFD500] text-[9px] font-bold rounded uppercase">Hoje</span>}
            </div>
            <div className="text-white font-medium text-sm truncate">{subject} — {topic}</div>
          </div>
          <div className="flex items-center gap-1 text-white/40 text-xs flex-shrink-0">
            <Clock className="w-3 h-3" />
            {time}
          </div>
        </div>
      ))}
    </div>
  );
}

function SimuladosScreen() {
  const simulados = [
    { name: 'Simulado Fase 1 — Objetivo', score: 78, questions: 60, status: 'completed' },
    { name: 'Simulado Fase 2 — Discursiva', score: 82, questions: 45, status: 'completed' },
    { name: 'Simulado Completo #3', score: null, questions: 80, status: 'available' },
    { name: 'Simulado Cronometrado', score: null, questions: 60, status: 'locked' },
  ];

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-bold">Simulados</h3>
        <span className="text-white/40 text-xs">2 de 4 concluídos</span>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        {[{ icon: Star, value: '80%', label: 'Média geral', color: '#FFD500' },
          { icon: TrendingUp, value: '+12%', label: 'Evolução', color: '#22C55E' }].map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="glass-light rounded-xl p-3 text-center">
            <Icon className="w-4 h-4 mx-auto mb-1" style={{ color }} />
            <div className="text-lg font-black" style={{ color }}>{value}</div>
            <div className="text-white/40 text-xs">{label}</div>
          </div>
        ))}
      </div>
      {simulados.map(({ name, score, questions, status }) => (
        <div key={name} className="glass-light rounded-xl p-4 flex items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="text-white font-medium text-sm truncate">{name}</div>
            <div className="text-white/40 text-xs mt-0.5">{questions} questões</div>
          </div>
          {status === 'completed' && score !== null && (
            <div className="text-right flex-shrink-0">
              <div className="text-green-400 font-black text-lg">{score}%</div>
              <div className="text-white/30 text-xs">Concluído</div>
            </div>
          )}
          {status === 'available' && (
            <button className="px-3 py-1.5 bg-[#003BFF] text-white text-xs font-bold rounded-lg flex-shrink-0">Iniciar</button>
          )}
          {status === 'locked' && (
            <div className="text-white/20 text-xs flex-shrink-0">🔒 Em breve</div>
          )}
        </div>
      ))}
    </div>
  );
}

function RedacaoScreen() {
  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-bold">Corretor de Redação</h3>
        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-lg">IA Ativa</span>
      </div>

      <div className="glass-light rounded-xl p-4 border border-[#003BFF]/20">
        <div className="text-white/60 text-xs mb-2 font-semibold uppercase tracking-wider">Tema atual</div>
        <div className="text-white font-medium text-sm">
          "O papel dos bancos públicos no desenvolvimento econômico do Brasil"
        </div>
        <div className="mt-3 flex gap-2">
          <span className="px-2 py-1 bg-[#003BFF]/20 text-[#003BFF] text-[10px] font-semibold rounded">Dissertativo-argumentativo</span>
          <span className="px-2 py-1 bg-white/[0.05] text-white/40 text-[10px] rounded">30 min</span>
        </div>
      </div>

      <div className="glass-light rounded-xl p-4">
        <div className="text-white/60 text-xs mb-3 font-semibold uppercase tracking-wider">Última correção</div>
        <div className="space-y-3">
          {[
            { label: 'Estrutura', score: 8.5, color: '#003BFF' },
            { label: 'Coesão', score: 9.0, color: '#22C55E' },
            { label: 'Argumentação', score: 7.5, color: '#F97316' },
            { label: 'Adequação', score: 8.0, color: '#A855F7' },
          ].map(({ label, score, color }) => (
            <div key={label}>
              <div className="flex justify-between mb-1">
                <span className="text-white/60 text-xs">{label}</span>
                <span className="text-xs font-bold" style={{ color }}>{score}/10</span>
              </div>
              <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ width: 0 }}
                  animate={{ width: `${score * 10}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-white/[0.06] flex justify-between">
          <span className="text-white/60 text-sm font-semibold">Nota final</span>
          <span className="text-[#FFD500] font-black text-lg">8.25/10</span>
        </div>
      </div>
    </div>
  );
}

function DesempenhoScreen() {
  const bars = [65, 72, 68, 80, 75, 87, 82];
  const labels = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-white font-bold">Desempenho</h3>
        <span className="text-white/40 text-xs">Últimos 7 dias</span>
      </div>

      <div className="glass-light rounded-xl p-4">
        <div className="flex items-end justify-between gap-2 h-28">
          {bars.map((h, i) => (
            <div key={i} className="flex flex-col items-center gap-1 flex-1">
              <motion.div
                className="w-full rounded-t-md"
                style={{ backgroundColor: i === 5 ? '#003BFF' : 'rgba(0,59,255,0.3)' }}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: 'easeOut' }}
              />
              <span className="text-white/30 text-[9px]">{labels[i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Horas estudadas', value: '18h30', icon: Clock, color: '#003BFF' },
          { label: 'Taxa de acertos', value: '87%', icon: Target, color: '#22C55E' },
          { label: 'Matérias vistas', value: '12', icon: BookOpen, color: '#A855F7' },
          { label: 'Posição no ranking', value: '#124', icon: Award, color: '#FFD500' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="glass-light rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <Icon className="w-3.5 h-3.5" style={{ color }} />
              <span className="text-white/40 text-[10px]">{label}</span>
            </div>
            <div className="font-black text-lg" style={{ color }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const screens: Record<string, React.ComponentType> = {
  dashboard: DashboardScreen,
  cronograma: CronogramaScreen,
  simulados: SimuladosScreen,
  redacao: RedacaoScreen,
  desempenho: DesempenhoScreen,
};

export default function Showcase() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const ActiveScreen = screens[activeTab];

  return (
    <section id="showcase" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#003BFF]/6 rounded-full blur-[140px]" />
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
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#003BFF]/10 border border-[#003BFF]/30 text-[#003BFF] text-xs font-semibold uppercase tracking-wider">
              A plataforma
            </span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-5 leading-tight"
          >
            Tudo que você precisa{' '}
            <span className="gradient-text">em um só lugar</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/50 text-lg max-w-2xl mx-auto"
          >
            Uma plataforma completa, limpa e intuitiva. Nada de confusão — só o que importa para você passar.
          </motion.p>
        </motion.div>

        {/* Tab navigation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === id
                  ? 'bg-[#003BFF] text-white shadow-lg shadow-blue-900/40'
                  : 'glass-light text-white/50 hover:text-white/80'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Mockup window */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="relative max-w-2xl mx-auto"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-[#003BFF]/25 rounded-3xl blur-2xl scale-105" />

          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            {/* Browser chrome */}
            <div className="bg-[#0A1535] border-b border-white/[0.07] px-4 py-3 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="mx-auto max-w-xs h-6 rounded-md bg-white/[0.05] flex items-center px-3 gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white/30 text-xs">bbpro.com.br/{activeTab}</span>
                </div>
              </div>
            </div>

            {/* Screen content */}
            <div className="bg-[#030B25] min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ActiveScreen />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
