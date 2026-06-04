import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Oferta', href: '#oferta' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-white/[0.06] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="w-9 h-9 rounded-xl bg-[#003BFF] flex items-center justify-center pulse-glow">
                <Zap className="w-5 h-5 text-white fill-white" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-[#003BFF] blur-md opacity-40 group-hover:opacity-70 transition-opacity" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-white text-lg tracking-tight">BB PRO</span>
              <span className="text-[10px] font-semibold text-[#FFD500] tracking-[0.15em] uppercase">Projeto 90 Dias</span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="#oferta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-5 py-2.5 bg-[#003BFF] text-white font-bold text-sm rounded-xl overflow-hidden group transition-all duration-300 hover:bg-[#0030D9]"
            >
              <span className="relative z-10">Começar Agora</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#003BFF] to-[#0059FF] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-4 space-y-1 border-t border-white/[0.08] mt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-3 text-sm text-white/70 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#oferta"
                  onClick={() => setMenuOpen(false)}
                  className="block mt-3 px-3 py-3 bg-[#003BFF] text-white font-bold text-sm rounded-xl text-center"
                >
                  Começar Agora
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
