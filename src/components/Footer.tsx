import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#003BFF] flex items-center justify-center">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-white text-base tracking-tight">BB PRO</span>
              <span className="text-[9px] font-semibold text-[#FFD500] tracking-[0.15em] uppercase">Projeto 90 Dias</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'Como Funciona', href: '#como-funciona' },
              { label: 'Benefícios', href: '#beneficios' },
              { label: 'Oferta', href: '#oferta' },
              { label: 'FAQ', href: '#faq' },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-white/40 hover:text-white/70 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right */}
          <div className="text-center md:text-right">
            <div className="text-white/40 text-xs">
              © {new Date().getFullYear()} BB PRO. Todos os direitos reservados.
            </div>
            <div className="text-white/20 text-xs mt-1">
              Este produto não tem vínculo com o Banco do Brasil S.A.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
