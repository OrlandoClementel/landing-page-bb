import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  PenLine,
  BarChart3,
  CheckCircle2,
  Clock,
  Target,
  BookOpen,
  TrendingUp,
  Flame,
  Award,
} from 'lucide-react';
import { scaleIn } from '../utils/animations';

const days = [
  { day: 'Seg', completed: true },
  { day: 'Ter', completed: true },
  { day: 'Qua', completed: true },
  { day: 'Qui', completed: false, today: true },
  { day: 'Sex', completed: false },
  { day: 'Sáb', completed: false },
  { day: 'Dom', completed: false },
];

const subjects = [
  { name: 'Português', progress: 72, color: '#003BFF' },
  { name: 'Matemática', progress: 58, color: '#7C3AED' },
  { name: 'Conhecimentos Bancários', progress: 45, color: '#059669' },
  { name: 'Atualidades', progress: 31, color: '#D97706' },
];

export default function PlatformMockup() {
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      className="relative w-full float"
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#003BFF]/20 blur-2xl scale-105" />

      {/* Browser chrome */}
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Browser top bar */}
        <div className="bg-[#0A1535] border-b border-white/[0.07] px-4 py-3 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
          </div>
          <div className="flex-1 mx-4">
            <div className="mx-auto max-w-xs h-6 rounded-md bg-white/[0.05] flex items-center px-3 gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-white/30 text-xs">bbpro.com.br/dashboard</span>
            </div>
          </div>
        </div>

        {/* App content */}
        <div className="bg-[#030B25] flex" style={{ height: '460px' }}>
          {/* Sidebar */}
          <div className="hidden sm:flex flex-col w-16 lg:w-52 bg-[#0A1535] border-r border-white/[0.06] flex-shrink-0">
            {/* Logo in sidebar */}
            <div className="p-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#003BFF] flex items-center justify-center flex-shrink-0">
                  <Target className="w-4 h-4 text-white" />
                </div>
                <span className="hidden lg:block font-bold text-white text-sm">BB PRO</span>
              </div>
            </div>

            {/* Nav items */}
            <nav className="flex-1 p-2 space-y-1">
              {[
                { icon: LayoutDashboard, label: 'Dashboard', active: true },
                { icon: CalendarDays, label: 'Cronograma' },
                { icon: BookOpen, label: 'Simulados' },
                { icon: PenLine, label: 'Redação' },
                { icon: BarChart3, label: 'Desempenho' },
                { icon: FileText, label: 'PDFs' },
              ].map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex items-center gap-3 px-2 py-2.5 rounded-lg cursor-pointer transition-all ${
                    active
                      ? 'bg-[#003BFF]/20 text-[#003BFF]'
                      : 'text-white/40 hover:text-white/70 hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span className="hidden lg:block text-xs font-medium">{label}</span>
                </div>
              ))}
            </nav>

            {/* User */}
            <div className="p-3 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#003BFF] to-[#001B7A] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  A
                </div>
                <div className="hidden lg:block">
                  <div className="text-white text-[10px] font-semibold">Ana Silva</div>
                  <div className="text-white/40 text-[9px]">Dia 42 de 90</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-hidden p-4 space-y-4">
            {/* Top row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Flame, value: '42', label: 'Dias seguidos', color: '#F97316' },
                { icon: Target, value: '87%', label: 'Taxa de acertos', color: '#003BFF' },
                { icon: Award, value: '1.240', label: 'Questões feitas', color: '#FFD500' },
              ].map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="glass rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-3.5 h-3.5" style={{ color }} />
                    <span className="text-[10px] text-white/50">{label}</span>
                  </div>
                  <div className="font-bold text-white text-lg" style={{ color }}>{value}</div>
                </div>
              ))}
            </div>

            {/* Week progress */}
            <div className="glass rounded-xl p-3">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-white/80">Semana atual</span>
                <span className="text-[10px] text-white/40 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  Dia 42 de 90
                </span>
              </div>
              <div className="flex justify-between gap-1">
                {days.map(({ day, completed, today }) => (
                  <div key={day} className="flex flex-col items-center gap-1.5 flex-1">
                    <div
                      className={`w-full aspect-square rounded-lg flex items-center justify-center transition-all ${
                        completed
                          ? 'bg-[#003BFF] shadow-lg shadow-blue-900/40'
                          : today
                          ? 'bg-[#FFD500]/20 border-2 border-[#FFD500]/60'
                          : 'bg-white/[0.04] border border-white/[0.08]'
                      }`}
                    >
                      {completed ? (
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      ) : today ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FFD500]" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                      )}
                    </div>
                    <span className={`text-[9px] font-medium ${today ? 'text-[#FFD500]' : 'text-white/30'}`}>{day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject progress */}
            <div className="glass rounded-xl p-3">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#003BFF]" />
                <span className="text-xs font-semibold text-white/80">Progresso por matéria</span>
              </div>
              <div className="space-y-2">
                {subjects.map(({ name, progress, color }) => (
                  <div key={name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[10px] text-white/60">{name}</span>
                      <span className="text-[10px] font-bold" style={{ color }}>{progress}%</span>
                    </div>
                    <div className="h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: color }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
