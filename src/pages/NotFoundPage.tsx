import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Cloud,
  FileText,
  Heart,
  Home,
  Phone,
  Send,
  Sparkles,
  Star,
} from 'lucide-react';

const returnLinks = [
  { to: '/', title: 'Home', subtitle: 'Back to Rosebery', icon: Home, color: 'bg-sage/30' },
  { to: '/register-interest', title: 'Register Interest', subtitle: "Start your child's journey", icon: FileText, color: 'bg-rose/15' },
  { to: '/contact', title: 'Contact Us', subtitle: 'Speak to the Rosebery team', icon: Phone, color: 'bg-sky/35' },
];

export function NotFoundPage() {
  return (
    <div className="not-found-page relative h-svh overflow-hidden bg-cream text-berry">
      <div className="not-found-sky absolute inset-0" />
      <Cloud className="not-found-cloud absolute left-[6%] top-[18%] h-16 w-16 fill-white/75 text-white/80 sm:h-24 sm:w-24" />
      <Cloud className="not-found-cloud absolute right-[7%] top-[12%] h-12 w-12 fill-white/60 text-white/70 sm:h-20 sm:w-20" style={{ animationDelay: '1.8s' }} />
      <Star className="not-found-float absolute left-[44%] top-[15%] h-6 w-6 fill-[#f4c75e] text-[#f4c75e]" />
      <Sparkles className="not-found-float absolute right-[12%] top-[42%] h-8 w-8 text-rose/70" style={{ animationDelay: '1.2s' }} />
      <Heart className="not-found-float absolute bottom-[12%] left-[7%] h-8 w-8 fill-rose/20 text-rose/55" style={{ animationDelay: '2.4s' }} />
      <Send className="not-found-plane absolute right-[28%] top-[23%] h-8 w-8 -rotate-12 text-berry/45 sm:h-10 sm:w-10" />

      <header className="relative z-30 h-[68px] border-b border-white/55 bg-white/35 backdrop-blur-xl">
        <nav className="mx-auto flex h-full max-w-[1480px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link to="/" className="group flex items-center gap-3 text-berry transition-smooth hover:text-rose">
            <span className="gradient-rose flex h-10 w-10 items-center justify-center rounded-[14px] text-white shadow-lg shadow-rose/20 ring-1 ring-white/70">
              <span className="font-display text-lg">R</span>
            </span>
            <span className="font-display text-2xl">Rosebery</span>
          </Link>
          <div className="flex items-center gap-1 text-sm font-semibold sm:gap-2">
            <Link to="/" className="hidden rounded-full px-4 py-2 text-berry/70 transition-smooth hover:bg-white/60 hover:text-rose sm:block">Home</Link>
            <Link to="/contact" className="hidden rounded-full px-4 py-2 text-berry/70 transition-smooth hover:bg-white/60 hover:text-rose sm:block">Contact</Link>
            <Link to="/register-interest" className="rounded-full bg-white/70 px-4 py-2 text-berry shadow-sm ring-1 ring-white/80 transition-smooth hover:-translate-y-0.5 hover:bg-white">
              Register Interest
            </Link>
          </div>
        </nav>
      </header>

      <main className="relative z-10 mx-auto grid h-[calc(100svh-68px)] max-w-[1480px] items-center gap-3 px-4 py-4 sm:grid-cols-[1fr_.88fr] sm:gap-8 sm:px-6 sm:py-6 lg:grid-cols-[.9fr_1.1fr] lg:px-10">
        <section className="relative z-20 max-w-2xl">
          <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-berry/65">
            <Sparkles className="h-3.5 w-3.5" /> A little detour
          </div>
          <p className="mt-3 font-display text-7xl leading-none text-rose/20 sm:text-8xl lg:text-9xl">404</p>
          <h1 className="-mt-3 max-w-xl font-display text-4xl uppercase leading-[0.94] text-berry sm:text-5xl lg:text-7xl">
            Whoops! This page wandered off
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-berry/72 sm:text-base sm:leading-7">
            Seems this page has gone exploring. Let's help you find your way back to Rosebery.
          </p>
          <p className="mt-1 max-w-xl text-xs leading-5 text-berry/55 sm:text-sm">
            Use the links below to return to the main website or register your interest.
          </p>

          <div className="mt-5 grid gap-2.5 sm:max-w-xl">
            {returnLinks.map(({ to, title, subtitle, icon: Icon, color }) => (
              <Link
                key={to}
                to={to}
                className="not-found-link group flex min-h-[68px] items-center gap-3 rounded-[20px] border border-white/75 bg-white/70 p-3 shadow-[0_14px_34px_-20px_rgba(122,31,77,0.24)] backdrop-blur-xl transition-smooth hover:-translate-y-1 hover:bg-white hover:shadow-[0_22px_45px_-20px_rgba(122,31,77,0.32)] sm:min-h-[74px] sm:p-4"
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-berry ${color}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-bold text-berry">{title}</span>
                  <span className="block text-xs text-berry/55 sm:text-sm">{subtitle}</span>
                </span>
                <span className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cream text-berry/55 transition-smooth group-hover:bg-berry group-hover:text-white">
                  <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <NotFoundIllustration />
      </main>
    </div>
  );
}

function NotFoundIllustration() {
  return (
    <div className="not-found-art pointer-events-none absolute inset-0 -z-10 opacity-[0.16] sm:relative sm:z-auto sm:h-full sm:opacity-100">
      <div className="liquid-glass absolute left-[8%] right-[2%] top-1/2 aspect-square max-h-[650px] -translate-y-1/2 overflow-hidden rounded-[38px] sm:rounded-[54px]">
        <svg viewBox="0 0 680 680" className="h-full w-full" role="img" aria-label="Illustration of books, toy blocks and a paper airplane">
          <defs>
            <linearGradient id="nf-room" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#fffaf2" />
              <stop offset="1" stopColor="#f5d7d5" />
            </linearGradient>
            <filter id="nf-shadow" x="-30%" y="-30%" width="170%" height="180%">
              <feDropShadow dx="0" dy="18" stdDeviation="13" floodColor="#7a1f4d" floodOpacity=".16" />
            </filter>
          </defs>
          <rect width="680" height="680" fill="url(#nf-room)" />
          <circle cx="545" cy="120" r="130" fill="#a9d8f5" opacity=".38" />
          <circle cx="112" cy="180" r="95" fill="#a7c7a3" opacity=".28" />
          <path d="M0 520 Q245 435 680 520 V680 H0Z" fill="#d7e5ce" />
          <ellipse cx="350" cy="574" rx="260" ry="54" fill="#7a1f4d" opacity=".08" />

          <g transform="translate(112 340)" filter="url(#nf-shadow)">
            <rect x="0" y="150" width="245" height="58" rx="14" fill="#7a1f4d" />
            <rect x="18" y="94" width="270" height="58" rx="14" fill="#e65a7a" />
            <rect x="2" y="38" width="230" height="58" rx="14" fill="#a9d8f5" />
            <path d="M28 50 H184" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".7" />
            <path d="M46 109 H238" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".68" />
            <path d="M26 166 H190" stroke="#fff" strokeWidth="8" strokeLinecap="round" opacity=".55" />
          </g>

          <g transform="translate(386 384)" filter="url(#nf-shadow)">
            <rect x="0" y="100" width="105" height="105" rx="18" fill="#f4c75e" />
            <rect x="104" y="118" width="92" height="87" rx="18" fill="#a9d8f5" />
            <rect x="48" y="0" width="105" height="105" rx="18" fill="#e65a7a" />
            <text x="52" y="172" fill="#7a1f4d" fontSize="48" fontWeight="800">R</text>
            <circle cx="100" cy="52" r="22" fill="#fff" opacity=".66" />
            <path d="M128 142 L160 174 M160 142 L128 174" stroke="#fff" strokeWidth="10" strokeLinecap="round" />
          </g>

          <g transform="translate(180 185) rotate(-7)" filter="url(#nf-shadow)">
            <path d="M0 44 L145 12 L145 142 L0 172Z" fill="#fffdf7" />
            <path d="M290 44 L145 12 L145 142 L290 172Z" fill="#fff3d8" />
            <path d="M145 12 V142" stroke="#d995a5" strokeWidth="5" />
            <circle cx="78" cy="91" r="29" fill="#a9d8f5" />
            <path d="M190 122 Q222 48 256 122Z" fill="#a7c7a3" />
            <path d="M30 135 H112 M178 135 H260" stroke="#7a1f4d" strokeWidth="5" strokeLinecap="round" opacity=".26" />
          </g>

          <g transform="translate(470 220) rotate(18)">
            <path d="M0 22 L150 0 L70 62 L48 118 L35 67Z" fill="#fff" opacity=".9" />
            <path d="M35 67 L150 0 L70 62Z" fill="#dceef9" />
          </g>
          <g fill="#f4c75e">
            <path d="M90 105 L98 126 L120 132 L100 142 L96 164 L84 145 L62 149 L76 132 L66 112 L88 120Z" />
            <path d="M560 330 L566 346 L584 350 L568 358 L565 376 L555 361 L537 364 L548 350 L540 334 L558 341Z" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-rose/10" />
      </div>

      <div className="liquid-glass not-found-float absolute bottom-[14%] left-[2%] hidden rounded-3xl px-5 py-3 sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose/15 text-rose"><Heart className="h-5 w-5 fill-current" /></span>
          <div><p className="text-[9px] font-bold uppercase tracking-[0.18em] text-berry/45">Still close by</p><p className="text-sm font-bold text-berry">Rosebery is one click away</p></div>
        </div>
      </div>
    </div>
  );
}
