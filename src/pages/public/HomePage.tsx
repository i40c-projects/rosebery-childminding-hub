import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bell,
  BookOpen,
  CalendarCheck,
  Check,
  CreditCard,
  Heart,
  MessageCircle,
  Palette,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Users,
  Utensils,
  MoonStar,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const trustPoints = [
  { icon: ShieldCheck, label: 'Safe Spaces' },
  { icon: Users, label: 'Small Groups' },
  { icon: Bell, label: 'Parent Updates' },
  { icon: Heart, label: 'Community Values' },
];

const dayStages = [
  { time: '8:00', title: 'Arrival', icon: Sun, copy: 'A familiar face, a gentle hello and time to settle.' },
  { time: '8:30', title: 'Breakfast', icon: Utensils, copy: 'A warm start with good food and happy conversation.' },
  { time: '10:00', title: 'Story Time', icon: BookOpen, copy: 'Big imaginations grow through stories, rhythm and language.' },
  { time: '11:00', title: 'Creative Play', icon: Palette, copy: 'Painting, building and discovering at every child\'s pace.' },
  { time: '12:30', title: 'Lunch', icon: Heart, copy: 'A calm shared meal, made part of the daily rhythm.' },
  { time: '13:30', title: 'Quiet Time', icon: MoonStar, copy: 'Soft spaces for rest, comfort and a gentle reset.' },
  { time: '17:00', title: 'Home Time', icon: Send, copy: 'A happy handover with clear updates for parents.' },
];

const showcaseCards = [
  { title: 'Story Time', tag: 'Language & wonder', caption: 'Stories that turn a quiet corner into a whole new world.', scene: 'story', tone: 'rose' },
  { title: 'Creative Learning', tag: 'Make & discover', caption: 'Open-ended materials for little ideas with big potential.', scene: 'creative', tone: 'sky' },
  { title: 'Healthy Meals', tag: 'Happy routines', caption: 'Colourful, balanced moments shared around the table.', scene: 'meal', tone: 'sage' },
  { title: 'Small Group Care', tag: 'Known & supported', caption: 'The space and attention every child needs to feel secure.', scene: 'blocks', tone: 'berry' },
  { title: 'Parent Updates', tag: 'Always connected', caption: 'Meaningful updates that keep families close to the day.', scene: 'updates', tone: 'sun' },
  { title: 'Quiet Spaces', tag: 'Rest & comfort', caption: 'A softer pace for children who need a peaceful moment.', scene: 'quiet', tone: 'lavender' },
] as const;

const portalCards = [
  { title: 'Parent Portal', label: 'Your child\'s day, beautifully clear', icon: Heart, mode: 'parent' },
  { title: 'Childminder Portal', label: 'Care records without the paperwork burden', icon: Users, mode: 'care' },
  { title: 'Admin Dashboard', label: 'One calm view across the whole hub', icon: BarChart3, mode: 'admin' },
  { title: 'Finance Dashboard', label: 'Invoices, payments and clarity in one place', icon: CreditCard, mode: 'finance' },
] as const;

export function HomePage() {
  return (
    <div className="public-texture overflow-hidden bg-[#fff9f1]">
      <Hero />
      <DayAtRosebery />
      <InsideRosebery />
      <DigitalHub />
      <FinalCta />
    </div>
  );
}

function Hero() {
  return (
    <section className="hero-stage relative isolate min-h-[calc(100svh-68px)] overflow-hidden">
      <div className="hero-aurora absolute inset-0 -z-20" />
      <div className="absolute left-[5%] top-[12%] -z-10 h-40 w-40 rounded-full bg-rose/15 blur-3xl" />
      <div className="absolute bottom-[8%] right-[42%] -z-10 h-48 w-48 rounded-full bg-sky/25 blur-3xl" />
      <p className="ghost-text absolute -left-4 top-[10%] -z-10 whitespace-nowrap opacity-70">PLAY LEARN GROW</p>

      <div className="mx-auto grid min-h-[calc(100svh-68px)] max-w-[1480px] items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:gap-6 lg:px-10 lg:py-12">
        <div className="relative z-20 max-w-2xl animate-fade-up">
          <span className="liquid-glass inline-flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-berry sm:text-xs">
            Rosebery Childminding Hub
          </span>
          <h1 className="mt-6 max-w-[760px] font-display text-[clamp(3.25rem,7.2vw,7.5rem)] uppercase leading-[0.89] text-berry">
            Helping Children <span className="text-gradient-rose">Flourish</span> Through Care, Play &amp; Discovery
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-berry/72 sm:text-lg sm:leading-8">
            Rosebery is a facility-based childminding hub operating under Liverpool Muslim Society,
            supporting families through trusted independent childminders, warm spaces and community values.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/register-interest">
              <Button size="lg" className="hero-cta w-full sm:w-auto">
                Register Your Child <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/become-a-childminder">
              <Button variant="secondary" size="lg" className="liquid-glass w-full border-white/70 bg-white/45 sm:w-auto">
                Become a Childminder
              </Button>
            </Link>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {trustPoints.map(({ icon: Icon, label }, index) => (
              <div
                key={label}
                className="liquid-glass group flex min-h-[74px] items-center gap-2 rounded-2xl px-3 py-3 transition-smooth hover:-translate-y-1"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/65 text-berry shadow-sm">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold leading-tight text-berry/80">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <ClassroomScene />
      </div>

      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-berry/45 lg:flex">
        <span className="h-px w-12 bg-berry/20" /> Discover their day <span className="h-px w-12 bg-berry/20" />
      </div>
    </section>
  );
}

function ClassroomScene() {
  return (
    <div className="relative z-10 mx-auto aspect-[1/1.06] w-full max-w-[760px] animate-fade-up lg:max-w-none">
      <div className="classroom-shell absolute inset-[4%] overflow-hidden rounded-[42px] sm:rounded-[58px]">
        <svg viewBox="0 0 760 800" className="h-full w-full" role="img" aria-label="Illustrated bright Rosebery learning room">
          <defs>
            <linearGradient id="room-wall" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#fffaf2" />
              <stop offset="1" stopColor="#f4dfca" />
            </linearGradient>
            <linearGradient id="window-light" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="#ffffff" stopOpacity=".95" />
              <stop offset="1" stopColor="#bfe6fb" stopOpacity=".35" />
            </linearGradient>
            <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="180%">
              <feDropShadow dx="0" dy="18" stdDeviation="14" floodColor="#7a1f4d" floodOpacity=".15" />
            </filter>
          </defs>
          <rect width="760" height="800" fill="url(#room-wall)" />
          <circle cx="650" cy="100" r="150" fill="#f9cfd1" opacity=".4" />
          <path d="M0 610 Q270 540 760 620 V800 H0Z" fill="#c9d8b8" />
          <path d="M0 665 Q310 590 760 660 V800 H0Z" fill="#a8c5a1" opacity=".55" />

          <g filter="url(#soft-shadow)">
            <rect x="70" y="78" width="250" height="282" rx="30" fill="#fffdf9" stroke="#fff" strokeWidth="12" />
            <rect x="92" y="100" width="206" height="238" rx="19" fill="url(#window-light)" />
            <path d="M195 100V338M92 218H298" stroke="#fff" strokeWidth="12" />
            <circle cx="138" cy="150" r="26" fill="#f8d074" />
            <path d="M94 281 Q142 230 186 281 T298 272 V338 H92Z" fill="#a8c5a1" />
          </g>

          <g transform="translate(515 120)" filter="url(#soft-shadow)">
            <rect width="150" height="240" rx="18" fill="#fffaf5" />
            <rect x="18" y="40" width="114" height="12" rx="6" fill="#7a1f4d" opacity=".2" />
            <rect x="18" y="102" width="114" height="12" rx="6" fill="#7a1f4d" opacity=".2" />
            <rect x="18" y="164" width="114" height="12" rx="6" fill="#7a1f4d" opacity=".2" />
            <rect x="28" y="17" width="20" height="25" rx="3" fill="#e65a7a" />
            <rect x="52" y="11" width="18" height="31" rx="3" fill="#a9d8f5" />
            <rect x="74" y="20" width="24" height="22" rx="3" fill="#f4c75e" />
            <rect x="36" y="72" width="30" height="30" rx="5" fill="#a7c7a3" />
            <circle cx="98" cy="86" r="16" fill="#f2af9f" />
            <path d="M35 160 L60 124 L85 160Z" fill="#a9d8f5" />
          </g>

          <g transform="translate(126 457)" filter="url(#soft-shadow)">
            <ellipse cx="250" cy="172" rx="250" ry="72" fill="#f5c9bf" />
            <ellipse cx="250" cy="150" rx="190" ry="70" fill="#f7e0b9" />
            <rect x="224" y="146" width="52" height="146" rx="20" fill="#d6a675" />
          </g>

          <g transform="translate(285 315)" filter="url(#soft-shadow)">
            <circle cx="98" cy="82" r="47" fill="#9b694c" />
            <path d="M52 78 Q54 20 100 20 Q145 24 148 80 Q128 55 103 62 Q78 50 52 78Z" fill="#49372f" />
            <circle cx="84" cy="82" r="3.5" fill="#402b26" />
            <circle cx="112" cy="82" r="3.5" fill="#402b26" />
            <path d="M88 102 Q98 110 110 101" fill="none" stroke="#6d3f34" strokeWidth="4" strokeLinecap="round" />
            <path d="M56 135 Q98 106 140 135 L154 245 Q101 268 42 242Z" fill="#e65a7a" />
            <path d="M43 152 Q4 182 20 222" fill="none" stroke="#9b694c" strokeWidth="22" strokeLinecap="round" />
            <path d="M146 152 Q184 170 184 213" fill="none" stroke="#9b694c" strokeWidth="22" strokeLinecap="round" />
          </g>

          <g transform="translate(390 505) rotate(4)" filter="url(#soft-shadow)">
            <path d="M0 30 L92 5 L92 108 L0 126Z" fill="#fffdf7" />
            <path d="M184 30 L92 5 L92 108 L184 126Z" fill="#fff8e8" />
            <path d="M92 5V108" stroke="#d89ba6" strokeWidth="4" />
            <circle cx="48" cy="64" r="18" fill="#a9d8f5" />
            <path d="M118 82 Q140 30 162 82Z" fill="#a7c7a3" />
          </g>

          <g filter="url(#soft-shadow)">
            <rect x="104" y="640" width="78" height="78" rx="13" fill="#e65a7a" transform="rotate(-7 104 640)" />
            <rect x="180" y="665" width="74" height="74" rx="13" fill="#a9d8f5" transform="rotate(5 180 665)" />
            <rect x="574" y="615" width="70" height="70" rx="13" fill="#f4c75e" transform="rotate(8 574 615)" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.3),transparent_35%,rgba(122,31,77,.04))]" />
      </div>

      <div className="liquid-glass absolute left-0 top-[12%] rounded-2xl px-4 py-3 shadow-xl sm:left-[1%] sm:rounded-3xl sm:px-5 sm:py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sage/35 text-berry"><ShieldCheck className="h-5 w-5" /></span>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-berry/50">Every child</p><p className="text-sm font-bold text-berry sm:text-base">Known &amp; cared for</p></div>
        </div>
      </div>
      <div className="liquid-glass absolute bottom-[7%] right-0 rounded-2xl px-4 py-3 shadow-xl sm:right-[1%] sm:rounded-3xl sm:px-5 sm:py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sky/45 text-berry"><MessageCircle className="h-5 w-5" /></span>
          <div><p className="text-[10px] font-bold uppercase tracking-[0.17em] text-berry/50">Parent update</p><p className="text-sm font-bold text-berry sm:text-base">A lovely day today</p></div>
        </div>
      </div>
      <Sparkles className="float-star absolute right-[8%] top-[5%] h-8 w-8 text-rose sm:h-10 sm:w-10" />
      <Star className="float-star absolute bottom-[17%] left-[4%] h-6 w-6 fill-[#f4c75e] text-[#f4c75e]" style={{ animationDelay: '1.6s' }} />
    </div>
  );
}

function DayAtRosebery() {
  return (
    <section className="day-journey relative isolate overflow-hidden py-24 md:py-32">
      <div className="absolute left-[4%] top-20 h-16 w-28 rounded-full bg-white/65 blur-[1px] before:absolute before:-top-6 before:left-5 before:h-14 before:w-14 before:rounded-full before:bg-white/65 after:absolute after:-top-4 after:right-5 after:h-12 after:w-12 after:rounded-full after:bg-white/65" />
      <div className="absolute right-[8%] top-36 h-12 w-24 rounded-full bg-white/55 before:absolute before:-top-5 before:left-4 before:h-10 before:w-10 before:rounded-full before:bg-white/55" />
      <Send className="paper-plane absolute left-[8%] top-[27%] h-8 w-8 rotate-12 text-rose/70 md:h-11 md:w-11" />
      <Sparkles className="float-star absolute right-[12%] top-[22%] h-7 w-7 text-[#d5a838]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <SectionHeading eyebrow="A day at Rosebery" title="Every little moment becomes part of their story" copy="A familiar, reassuring rhythm with room for discovery, friendships, rest and plenty of joy." />

        <div className="mt-14 flex gap-5 overflow-x-auto pb-8 pt-3 scrollbar-thin lg:grid lg:grid-cols-7 lg:overflow-visible">
          {dayStages.map(({ time, title, icon: Icon, copy }, index) => (
            <article key={title} className="liquid-glass day-card group min-w-[230px] rounded-[28px] p-5 lg:min-w-0" style={{ animationDelay: `${index * 90}ms` }}>
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/65 text-berry shadow-sm"><Icon className="h-5 w-5" /></span>
                <span className="rounded-full bg-berry/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-berry/60">{time}</span>
              </div>
              <div className="mt-12 lg:mt-20">
                <p className="font-display text-3xl uppercase leading-none text-berry">{title}</p>
                <p className="mt-3 text-sm leading-6 text-berry/65">{copy}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-rose to-sky transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function InsideRosebery() {
  return (
    <section className="relative bg-[#f7eadc] py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Inside Rosebery" title="See the warmth in every frame" copy="A video-first window into the moments parents care about most." align="left" />
          <div className="liquid-glass hidden items-center gap-3 rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-berry/65 md:flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-rose" /> Rosebery moments
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">
          {showcaseCards.map((card, index) => (
            <article key={card.title} className={`video-card liquid-glass group rounded-[32px] p-2 ${index < 2 ? 'lg:col-span-6' : 'lg:col-span-3'}`}>
              <div className={`relative overflow-hidden rounded-[25px] ${index < 2 ? 'aspect-[16/10]' : 'aspect-[4/5]'}`}>
                <ShowcaseScene type={card.scene} tone={card.tone} />
                <div className="absolute inset-0 bg-gradient-to-t from-berry/55 via-transparent to-white/10" />
                <button type="button" aria-label={`Play ${card.title} preview`} className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/65 bg-white/25 text-white shadow-2xl backdrop-blur-xl transition duration-500 group-hover:scale-110 group-hover:bg-white/35">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </button>
                <div className="liquid-glass absolute inset-x-3 bottom-3 rounded-[22px] px-4 py-4 text-white">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">{card.tag}</p>
                  <h3 className="mt-1 font-display text-2xl uppercase tracking-normal">{card.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-white/78">{card.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseScene({ type, tone }: { type: typeof showcaseCards[number]['scene']; tone: typeof showcaseCards[number]['tone'] }) {
  const colors = {
    rose: ['#f7c5c1', '#e88f95'], sky: ['#d9effb', '#91cbe8'], sage: ['#dcebd4', '#91b88e'],
    berry: ['#cf8ca8', '#7a1f4d'], sun: ['#f8e1a6', '#eda778'], lavender: ['#e8dff0', '#b8a6ce'],
  }[tone];
  return (
    <svg viewBox="0 0 600 500" className="h-full w-full scale-[1.02] transition duration-700 group-hover:scale-110" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs><linearGradient id={`scene-${type}`} x1="0" x2="1" y1="0" y2="1"><stop stopColor={colors[0]} /><stop offset="1" stopColor={colors[1]} /></linearGradient></defs>
      <rect width="600" height="500" fill={`url(#scene-${type})`} />
      <circle cx="500" cy="80" r="120" fill="#fff" opacity=".22" />
      {type === 'story' && <><ellipse cx="300" cy="420" rx="260" ry="70" fill="#fff" opacity=".2" /><path d="M145 280 L300 235 L300 405 L145 450Z" fill="#fff9ef" /><path d="M455 280 L300 235 L300 405 L455 450Z" fill="#fff4dc" /><circle cx="115" cy="275" r="36" fill="#7a1f4d" /><circle cx="485" cy="275" r="36" fill="#638060" /></>}
      {type === 'creative' && <><rect x="120" y="110" width="350" height="290" rx="20" fill="#fff9ef" transform="rotate(-5 120 110)" /><path d="M175 310 Q240 110 305 310 T430 270" fill="none" stroke="#e65a7a" strokeWidth="25" strokeLinecap="round" /><circle cx="200" cy="180" r="34" fill="#f4c75e" /><g transform="translate(80 390) rotate(-12)"><rect width="320" height="30" rx="10" fill="#7a1f4d" /><rect x="80" width="80" height="30" fill="#a7c7a3" /><rect x="160" width="80" height="30" fill="#a9d8f5" /></g></>}
      {type === 'meal' && <><ellipse cx="300" cy="290" rx="220" ry="150" fill="#fff" opacity=".8" /><circle cx="300" cy="290" r="112" fill="#f9e3be" /><circle cx="260" cy="255" r="38" fill="#e65a7a" /><circle cx="360" cy="250" r="33" fill="#7fa776" /><path d="M275 345 L390 300 L350 380Z" fill="#eda778" /></>}
      {type === 'blocks' && <><rect x="115" y="300" width="130" height="130" rx="18" fill="#f4c75e" /><rect x="245" y="250" width="130" height="180" rx="18" fill="#a9d8f5" /><rect x="375" y="320" width="110" height="110" rx="18" fill="#e65a7a" /><path d="M250 250 L310 150 L370 250Z" fill="#fff4dc" /></>}
      {type === 'updates' && <><rect x="180" y="55" width="245" height="410" rx="42" fill="#fffaf2" stroke="#fff" strokeWidth="10" /><rect x="210" y="130" width="185" height="74" rx="18" fill="#f7d4d4" /><rect x="210" y="220" width="185" height="74" rx="18" fill="#dcebd4" /><rect x="210" y="310" width="185" height="74" rx="18" fill="#d9effb" /><circle cx="238" cy="167" r="16" fill="#e65a7a" /><circle cx="238" cy="257" r="16" fill="#7fa776" /><circle cx="238" cy="347" r="16" fill="#79bde0" /></>}
      {type === 'quiet' && <><path d="M0 365 Q210 270 600 360 V500 H0Z" fill="#fff" opacity=".25" /><path d="M135 340 Q300 145 465 340 V430 H135Z" fill="#fff8ef" opacity=".9" /><circle cx="225" cy="260" r="70" fill="#fff" opacity=".55" /><path d="M420 115 Q355 175 420 230 Q500 220 515 145 Q470 168 420 115Z" fill="#fff4c4" /></>}
    </svg>
  );
}

function DigitalHub() {
  return (
    <section className="digital-hub relative isolate overflow-hidden py-24 text-white md:py-32">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#7a1f4d_0%,#91355e_42%,#b55d73_100%)]" />
      <div className="absolute -left-20 top-10 -z-10 h-96 w-96 rounded-full bg-rose/30 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-sky/20 blur-3xl" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_.55fr]">
          <SectionHeading eyebrow="The platform behind the care" title="A Complete Digital Hub for Rosebery" copy="One professional system designed to keep families informed, childminders supported and the whole organisation beautifully clear." align="left" inverse />
          <div className="liquid-glass rounded-[28px] p-5 text-sm leading-6 text-white/75 lg:justify-self-end lg:max-w-sm">
            <div className="flex gap-2 text-[#ffd77a]"><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /><Star className="h-4 w-4 fill-current" /></div>
            <p className="mt-3">A polished public website and a serious operational platform, working together as one Rosebery experience.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {portalCards.map((card) => <PortalPreview key={card.title} {...card} />)}
        </div>
      </div>
    </section>
  );
}

function PortalPreview({ title, label, icon: Icon, mode }: typeof portalCards[number]) {
  return (
    <article className="liquid-glass product-card group rounded-[32px] p-3 sm:p-4">
      <div className="flex items-center justify-between px-2 pb-4 pt-1 sm:px-3">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15"><Icon className="h-5 w-5" /></span><div><h3 className="font-display text-2xl uppercase">{title}</h3><p className="text-xs text-white/60">{label}</p></div></div>
        <ArrowRight className="h-5 w-5 text-white/45 transition group-hover:translate-x-1 group-hover:text-white" />
      </div>
      <div className="overflow-hidden rounded-[24px] bg-[#fff9f1] p-3 text-berry shadow-2xl sm:p-4">
        <div className="mb-4 flex items-center justify-between"><div className="flex items-center gap-2"><span className="h-7 w-7 rounded-lg bg-gradient-to-br from-rose to-berry" /><span className="text-xs font-bold">Rosebery</span></div><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-rose/50" /><span className="h-2 w-2 rounded-full bg-sage" /><span className="h-2 w-2 rounded-full bg-sky" /></div></div>
        <DashboardCanvas mode={mode} />
      </div>
    </article>
  );
}

function DashboardCanvas({ mode }: { mode: typeof portalCards[number]['mode'] }) {
  if (mode === 'parent') return <div className="grid grid-cols-[.8fr_1.2fr] gap-3"><div className="rounded-2xl bg-rose/10 p-3"><p className="text-[9px] font-bold uppercase text-berry/45">Today</p><p className="mt-1 font-display text-2xl">A lovely day</p><div className="mt-5 h-20 rounded-xl bg-gradient-to-br from-sky/50 to-sage/40" /></div><div className="space-y-2">{['Breakfast finished', 'Story time', 'Creative play'].map((x, i) => <div key={x} className="flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm"><Check className="h-3.5 w-3.5 text-[#5c7e58]" /><span className="text-[10px] font-semibold">{x}</span><span className="ml-auto text-[8px] text-berry/40">{9 + i}:20</span></div>)}</div></div>;
  if (mode === 'care') return <div className="grid grid-cols-3 gap-2"><div className="col-span-2 rounded-2xl bg-sage/25 p-3"><p className="text-[9px] font-bold uppercase text-berry/45">Children today</p><div className="mt-4 flex -space-x-2">{['MA','YN','SL','AR'].map((x, i) => <span key={x} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[9px] font-bold" style={{ background: ['#f5c9bf','#d9effb','#dcebd4','#f8e1a6'][i] }}>{x}</span>)}</div></div><div className="rounded-2xl bg-sky/30 p-3"><CalendarCheck className="h-4 w-4" /><p className="mt-5 font-display text-xl">8 / 10</p><p className="text-[8px] uppercase text-berry/50">Present</p></div><div className="col-span-3 flex items-center gap-2 rounded-xl bg-white p-2 shadow-sm"><Bell className="h-4 w-4 text-rose" /><span className="text-[10px] font-semibold">Three parent updates ready to send</span></div></div>;
  if (mode === 'admin') return <div className="grid grid-cols-[1fr_.7fr] gap-3"><div className="rounded-2xl bg-white p-3 shadow-sm"><p className="text-[9px] font-bold uppercase text-berry/45">Hub attendance</p><div className="mt-5 flex h-20 items-end gap-2">{[45,70,55,88,78,62,92].map((h, i) => <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-berry to-rose" style={{ height: `${h}%` }} />)}</div></div><div className="space-y-2">{[['Rooms','4 active'],['Children','38 today'],['Updates','12 sent']].map(([a,b]) => <div key={a} className="rounded-xl bg-beige/60 p-2"><p className="text-[8px] uppercase text-berry/45">{a}</p><p className="text-xs font-bold">{b}</p></div>)}</div></div>;
  return <div className="grid grid-cols-2 gap-3"><div className="rounded-2xl bg-sky/25 p-3"><p className="text-[9px] font-bold uppercase text-berry/45">This month</p><p className="mt-2 font-display text-3xl">£12.8k</p><p className="text-[9px] text-[#5c7e58]">+8.4% collected</p></div><div className="rounded-2xl bg-white p-3 shadow-sm"><p className="text-[9px] font-bold uppercase text-berry/45">Invoices</p><div className="mt-3 space-y-2">{['Paid','Pending','Draft'].map((x,i) => <div key={x} className="flex justify-between text-[9px]"><span>{x}</span><b>{[28,6,3][i]}</b></div>)}</div></div><div className="col-span-2 flex h-12 items-end gap-1 rounded-xl bg-rose/10 px-3 pt-2">{[25,42,38,65,58,80,72,94].map((h,i)=><span key={i} className="flex-1 rounded-t bg-rose/70" style={{height:`${h}%`}} />)}</div></div>;
}

function FinalCta() {
  return (
    <section className="sunset-cta relative isolate min-h-[76vh] overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#ffd7c6_0%,#ef9f9e_50%,#9a4164_100%)]" />
      <div className="absolute bottom-[-10rem] left-1/2 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#ffe7a7] blur-3xl" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-[32%] bg-gradient-to-t from-berry/55 to-transparent" />
      <Send className="paper-plane absolute left-[12%] top-[20%] h-10 w-10 -rotate-12 text-white/75" />
      <Star className="float-star absolute right-[15%] top-[16%] h-8 w-8 fill-[#ffe7a7] text-[#ffe7a7]" />
      <Sparkles className="float-star absolute bottom-[25%] left-[20%] h-7 w-7 text-white/70" style={{ animationDelay: '1.2s' }} />

      <div className="mx-auto flex min-h-[52vh] max-w-5xl items-center justify-center px-4 text-center sm:px-6">
        <div className="liquid-glass rounded-[36px] px-5 py-12 text-white sm:rounded-[48px] sm:px-12 md:px-20 md:py-16">
          <span className="inline-flex rounded-full border border-white/35 bg-white/15 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em]">Your Rosebery journey starts here</span>
          <h2 className="mt-6 font-display text-[clamp(3.5rem,9vw,8rem)] uppercase leading-[0.88]">Ready to Begin With Rosebery?</h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-white/80 sm:text-lg">A warm welcome, trusted care and a community that helps every child feel they belong.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/register-interest"><Button size="lg" className="w-full bg-white text-berry shadow-2xl hover:bg-cream sm:w-auto">Register Your Child</Button></Link>
            <Link to="/become-a-childminder"><Button size="lg" variant="secondary" className="liquid-glass w-full border-white/45 bg-white/15 text-white sm:w-auto">Become a Childminder</Button></Link>
            <Link to="/contact"><Button size="lg" variant="outline" className="w-full border-white/45 text-white hover:bg-white/15 sm:w-auto">Contact Us</Button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, copy, align = 'center', inverse = false }: { eyebrow: string; title: string; copy: string; align?: 'left' | 'center'; inverse?: boolean }) {
  return (
    <div className={`max-w-4xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <span className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] ${inverse ? 'border border-white/20 bg-white/10 text-white/75' : 'liquid-glass text-berry/65'}`}><Sparkles className="h-3.5 w-3.5" />{eyebrow}</span>
      <h2 className={`mt-5 font-display text-[clamp(3rem,6vw,6.5rem)] uppercase leading-[0.9] ${inverse ? 'text-white' : 'text-berry'}`}>{title}</h2>
      <p className={`mt-5 max-w-2xl text-base leading-7 sm:text-lg ${align === 'center' ? 'mx-auto' : ''} ${inverse ? 'text-white/70' : 'text-berry/65'}`}>{copy}</p>
    </div>
  );
}
