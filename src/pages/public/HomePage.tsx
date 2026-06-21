import { Link } from 'react-router-dom';
import {
  Bell, BookOpen, CalendarCheck, Check, CreditCard, FileText,
  Heart, MessageSquare, Play, Shield, Sparkles, Star, Sun,
  Users, Utensils, Moon, Apple, Blocks, Palette, Home as HomeIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

/* ============================================================
   ROSEBERY HOMEPAGE
   Tone: warm, safe, trusted, modern, Scandi-Montessori.
   Palette: cream + warm beige + sage + sky, berry/rose used sparingly.
   ============================================================ */

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <DayAtRosebery />
      <InsideRosebery />
      <MeetChildminders />
      <ParentPortal />
      <Testimonials />
      <WhyParents />
      <FinalCta />
    </>
  );
}

/* -------------------- shared bits -------------------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="pill-eyebrow">{children}</span>;
}

function SectionHead({
  eyebrow,
  title,
  intro,
  align = 'center',
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-4xl uppercase leading-[1.02] text-berry md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-berry/70 md:text-lg">{intro}</p>
      )}
    </div>
  );
}

/* -------------------- HERO -------------------- */

function Hero() {
  const proof = ['Safe environment', 'Small groups', 'Daily updates', 'Community values'];
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#FFFBF4_0%,#FBF3E6_100%)]" />
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-sky/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-[0.85fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
        {/* LEFT */}
        <div>
          <Eyebrow>Rosebery Childminding Hub</Eyebrow>
          <h1 className="mt-5 font-display text-[2.6rem] uppercase leading-[1.02] text-berry sm:text-5xl md:text-[3.6rem] lg:text-[4rem]">
            Helping children flourish through care, play &amp; discovery.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-berry/72">
            Warm, facility-based childminding in Liverpool — supporting families through trusted
            independent childminders and community values.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/register-interest">
              <Button size="lg">Register Your Child</Button>
            </Link>
            <Link to="/become-a-childminder">
              <Button variant="secondary" size="lg">
                Become a Childminder
              </Button>
            </Link>
          </div>

          <ul className="mt-8 grid max-w-xl gap-x-6 gap-y-3 sm:grid-cols-2">
            {proof.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm font-medium text-berry/80">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/25 text-sage-700">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} style={{ color: '#5C7E58' }} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — collage */}
        <HeroCollage />
      </div>
    </section>
  );
}

function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-[620px]">
      {/* big rounded frame top-right */}
      <CollageFrame
        className="absolute right-0 top-0 h-[58%] w-[62%] animate-float-soft"
        style={{ ['--r' as string]: '1.5deg' }}
        tint="rose"
      >
        <SceneStoryTime />
        <BadgeChip className="absolute -bottom-3 left-6 bg-white text-berry">
          <BookOpen className="h-3.5 w-3.5" /> Story time
        </BadgeChip>
      </CollageFrame>

      {/* tall left */}
      <CollageFrame
        className="absolute left-0 top-[12%] h-[52%] w-[42%] animate-float-soft"
        style={{ ['--r' as string]: '-2deg', animationDelay: '1.2s' }}
        tint="sky"
      >
        <SceneBlocks />
      </CollageFrame>

      {/* small mid */}
      <CollageFrame
        className="absolute left-[34%] top-[46%] h-[26%] w-[30%] animate-float-soft"
        style={{ ['--r' as string]: '3deg', animationDelay: '2s' }}
        tint="sage"
      >
        <SceneMeals />
      </CollageFrame>

      {/* bottom wide */}
      <CollageFrame
        className="absolute bottom-0 right-[4%] h-[40%] w-[60%] animate-float-soft"
        style={{ ['--r' as string]: '-1.5deg', animationDelay: '0.6s' }}
        tint="beige"
      >
        <SceneCreative />
        <BadgeChip className="absolute -top-3 right-6 bg-berry text-white">
          <Palette className="h-3.5 w-3.5" /> Creative play
        </BadgeChip>
      </CollageFrame>

      {/* floating reassurance badge */}
      <div className="absolute -left-2 bottom-[18%] z-20 hidden rounded-2xl bg-white px-4 py-3 shadow-[0_18px_40px_-18px_rgba(122,31,77,0.25)] ring-1 ring-berry/5 sm:block">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage/25 text-[#4F7050]">
            <Shield className="h-4.5 w-4.5" />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-berry/55">Safeguarding</p>
            <p className="text-sm font-semibold text-berry">DBS &amp; first aid checked</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CollageFrame({
  children,
  className,
  style,
  tint,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tint: 'rose' | 'sky' | 'sage' | 'beige';
}) {
  const tints = {
    rose: 'from-[#F9DCD8] to-[#F4C2C0]',
    sky: 'from-[#DCEEF9] to-[#BCDEF4]',
    sage: 'from-[#E1ECDB] to-[#BFD6B6]',
    beige: 'from-[#F6E8D2] to-[#E9D2B3]',
  } as const;
  return (
    <div
      className={`overflow-hidden rounded-[28px] bg-white p-1.5 shadow-[0_30px_60px_-30px_rgba(122,31,77,0.28)] ring-1 ring-black/[0.04] ${className ?? ''}`}
      style={style}
    >
      <div className={`relative h-full w-full overflow-hidden rounded-[22px] bg-gradient-to-br ${tints[tint]}`}>
        {children}
      </div>
    </div>
  );
}

function BadgeChip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`absolute z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold shadow-[0_8px_20px_-6px_rgba(122,31,77,0.25)] ring-1 ring-black/[0.04] ${className ?? ''}`}
    >
      {children}
    </span>
  );
}

/* -------------------- Scene illustrations (inline SVG) -------------------- */

function SceneStoryTime() {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="floorRose" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F8D1CD" />
          <stop offset="1" stopColor="#EAA8A2" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#floorRose)" />
      <circle cx="320" cy="60" r="30" fill="#FFF3D6" opacity="0.85" />
      {/* rug */}
      <ellipse cx="200" cy="245" rx="180" ry="36" fill="#E08A8A" opacity="0.45" />
      {/* big open book */}
      <g transform="translate(120 175)">
        <path d="M0 30 L80 10 L80 70 L0 90 Z" fill="#FFF9F0" />
        <path d="M160 30 L80 10 L80 70 L160 90 Z" fill="#FFF9F0" />
        <path d="M80 10 L80 70" stroke="#C58484" strokeWidth="2" />
        <rect x="14" y="40" width="50" height="3" fill="#C58484" opacity="0.5" />
        <rect x="14" y="50" width="40" height="3" fill="#C58484" opacity="0.4" />
        <rect x="96" y="40" width="50" height="3" fill="#C58484" opacity="0.5" />
        <rect x="96" y="50" width="40" height="3" fill="#C58484" opacity="0.4" />
      </g>
      {/* sitting child silhouettes */}
      <g fill="#7A1F4D" opacity="0.85">
        <circle cx="80" cy="155" r="14" />
        <path d="M58 200 Q80 168 102 200 L102 230 L58 230 Z" />
      </g>
      <g fill="#5C7E58" opacity="0.9">
        <circle cx="320" cy="155" r="14" />
        <path d="M298 200 Q320 168 342 200 L342 230 L298 230 Z" />
      </g>
    </svg>
  );
}

function SceneBlocks() {
  return (
    <svg viewBox="0 0 300 400" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="400" fill="#DCEEF9" />
      <rect y="290" width="300" height="110" fill="#C2DFF1" />
      {/* stack of blocks */}
      <g>
        <rect x="80" y="210" width="60" height="60" rx="8" fill="#E65A7A" />
        <rect x="140" y="240" width="60" height="60" rx="8" fill="#A7C7A3" />
        <rect x="100" y="150" width="60" height="60" rx="8" fill="#F4C75E" />
        <rect x="160" y="180" width="60" height="60" rx="8" fill="#7A1F4D" />
        <rect x="120" y="90" width="60" height="60" rx="8" fill="#A9D8F5" stroke="#5BA0CC" strokeWidth="2" />
      </g>
      {/* sun */}
      <circle cx="240" cy="60" r="22" fill="#FFE1A8" />
    </svg>
  );
}

function SceneMeals() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="200" fill="#E1ECDB" />
      {/* plate */}
      <circle cx="150" cy="115" r="62" fill="#FFFDF6" />
      <circle cx="150" cy="115" r="50" fill="#F4E1C9" />
      {/* apple */}
      <circle cx="135" cy="105" r="14" fill="#E65A7A" />
      <rect x="133" y="86" width="2" height="6" fill="#5C7E58" />
      {/* carrot */}
      <path d="M160 95 L182 120 L168 130 Z" fill="#F19867" />
      {/* broccoli */}
      <circle cx="165" cy="135" r="10" fill="#7FAA76" />
      <circle cx="155" cy="138" r="8" fill="#7FAA76" />
    </svg>
  );
}

function SceneCreative() {
  return (
    <svg viewBox="0 0 500 250" className="h-full w-full" preserveAspectRatio="xMidYMid slice">
      <rect width="500" height="250" fill="#F6E8D2" />
      {/* paint splotches */}
      <circle cx="90" cy="80" r="34" fill="#E65A7A" opacity="0.85" />
      <circle cx="420" cy="70" r="28" fill="#A7C7A3" opacity="0.9" />
      <circle cx="380" cy="180" r="24" fill="#A9D8F5" opacity="0.9" />
      {/* crayons */}
      <g transform="translate(120 130) rotate(-12)">
        <rect width="220" height="30" rx="6" fill="#FFF8EC" />
        <rect width="40" height="30" fill="#E65A7A" />
        <rect x="40" width="40" height="30" fill="#F4C75E" />
        <rect x="80" width="40" height="30" fill="#A7C7A3" />
        <rect x="120" width="40" height="30" fill="#A9D8F5" />
        <rect x="160" width="40" height="30" fill="#7A1F4D" />
      </g>
      {/* paper */}
      <rect x="40" y="160" width="120" height="70" rx="6" fill="#FFFDF7" transform="rotate(-6 40 160)" />
    </svg>
  );
}

/* -------------------- TRUST STRIP -------------------- */

function TrustStrip() {
  const items = [
    { icon: Shield, label: 'DBS checked' },
    { icon: Heart, label: 'First aid trained' },
    { icon: Users, label: 'Small groups' },
    { icon: HomeIcon, label: 'Facility-based' },
    { icon: Bell, label: 'Daily updates' },
  ];
  return (
    <section className="border-y border-berry/5 bg-white/60 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 sm:px-6 lg:px-8">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-2 text-sm font-medium text-berry/70">
            <i.icon className="h-4 w-4 text-[#5C7E58]" />
            {i.label}
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------- A DAY AT ROSEBERY -------------------- */

const dayStages = [
  { title: 'Arrival', time: '8:00', icon: Sun, tint: '#FFE6BF', desc: 'A calm welcome and gentle settling in.' },
  { title: 'Breakfast', time: '8:30', icon: Apple, tint: '#F8D1CD', desc: 'Warm routines and healthy starts.' },
  { title: 'Story Time', time: '10:00', icon: BookOpen, tint: '#DCEEF9', desc: 'Books, voices and language together.' },
  { title: 'Creative Play', time: '11:00', icon: Palette, tint: '#E1ECDB', desc: 'Painting, building and free play.' },
  { title: 'Lunch', time: '12:30', icon: Utensils, tint: '#F4E1C9', desc: 'A steady pause for food and chat.' },
  { title: 'Quiet Time', time: '13:30', icon: Moon, tint: '#E6DEF0', desc: 'Rest, comfort and reset.' },
  { title: 'Home Time', time: '17:00', icon: Heart, tint: '#FBDDD2', desc: 'Clear updates for every parent.' },
];

function DayAtRosebery() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="A day at Rosebery"
          title="A rhythm children can trust"
          intro="Every day is built around warmth, safety, small-group attention and simple routines parents understand."
        />

        <div className="relative mt-14">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-berry/15 to-transparent md:block" />

          <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-7">
            {dayStages.map((s) => (
              <div
                key={s.title}
                className="warm-card group relative min-w-[200px] rounded-2xl p-5 transition-smooth hover:-translate-y-1"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: s.tint }}
                >
                  <s.icon className="h-5 w-5 text-berry" />
                </div>
                <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-berry/50">
                  {s.time}
                </p>
                <h3 className="mt-1 font-display text-2xl uppercase text-berry">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-berry/65">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- INSIDE ROSEBERY -------------------- */

const insideCards = [
  { title: 'Story Time', tag: 'Language', tint: 'rose', Scene: SceneStoryTime },
  { title: 'Creative Learning', tag: 'Discovery', tint: 'beige', Scene: SceneCreative },
  { title: 'Healthy Meals', tag: 'Wellbeing', tint: 'sage', Scene: SceneMeals },
  { title: 'Small Group Care', tag: 'Connection', tint: 'sky', Scene: SceneBlocks },
  { title: 'Parent Updates', tag: 'Transparency', tint: 'rose', Scene: SceneMeals },
  { title: 'Quiet Spaces', tag: 'Comfort', tint: 'sage', Scene: SceneStoryTime },
] as const;

function InsideRosebery() {
  return (
    <section className="section-pad bg-[#FBF3E6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Inside Rosebery"
          title="Real moments, calm spaces"
          intro="A look inside our day — the kind of care, attention and gentle learning we build every routine around."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {insideCards.map((c) => (
            <article key={c.title + c.tag} className="group cursor-pointer">
              <CollageFrame className="aspect-[4/3] w-full" tint={c.tint as never}>
                <c.Scene />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 text-berry shadow-xl ring-1 ring-white/60 backdrop-blur transition-smooth group-hover:scale-110">
                    <Play className="ml-0.5 h-5 w-5 fill-berry" />
                  </span>
                </div>
                <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-berry shadow-sm">
                  {c.tag}
                </span>
              </CollageFrame>
              <h3 className="mt-4 font-display text-2xl uppercase text-berry">{c.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- CHILDMINDERS -------------------- */

const childminders = [
  {
    name: 'Maryam Ibrahim',
    role: 'Independent childminder',
    experience: '8 years',
    qualifications: 'DBS · Safeguarding · First Aid',
    group: 'Up to 12 children',
    values: 'Calm routines, stories, belonging',
    interests: 'Reading, nature walks',
    initials: 'MI',
    color: '#E1ECDB',
  },
  {
    name: 'Khadija Noor',
    role: 'Independent childminder',
    experience: '6 years',
    qualifications: 'Early years · Food hygiene',
    group: 'Up to 10 children',
    values: 'Creative play, confidence, care',
    interests: 'Art, music, sensory play',
    initials: 'KN',
    color: '#DCEEF9',
  },
  {
    name: 'Amina Farooq',
    role: 'Independent childminder',
    experience: '7 years',
    qualifications: 'First Aid · SEND awareness',
    group: 'Up to 8 children',
    values: 'Small groups, trust, gentle learning',
    interests: 'Storytelling, outdoor play',
    initials: 'AF',
    color: '#F8D1CD',
  },
];

function MeetChildminders() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Meet our childminders"
          title="Independent, qualified, devoted"
          intro="Our childminders operate independently within Rosebery's supported premises — sharing values, not a uniform."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {childminders.map((p) => (
            <article key={p.name} className="warm-card overflow-hidden rounded-3xl">
              <div
                className="relative flex h-56 items-end justify-center p-6"
                style={{ background: p.color }}
              >
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-berry/70">
                    {p.experience} experience
                  </span>
                </div>
                <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white font-display text-4xl text-berry shadow-[0_18px_30px_-12px_rgba(122,31,77,0.25)]">
                  {p.initials}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl uppercase text-berry">{p.name}</h3>
                <p className="text-sm font-medium text-berry/60">{p.role}</p>

                <dl className="mt-5 space-y-3 text-sm">
                  <ProfileRow label="Qualifications" value={p.qualifications} />
                  <ProfileRow label="Group size" value={p.group} />
                  <ProfileRow label="Values" value={p.values} />
                  <ProfileRow label="Interests" value={p.interests} />
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProfileRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5 border-t border-berry/5 pt-3">
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-berry/45">{label}</dt>
      <dd className="text-berry/85">{value}</dd>
    </div>
  );
}

/* -------------------- PARENT PORTAL -------------------- */

function ParentPortal() {
  return (
    <section className="section-pad bg-[#F6EFE3]">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <Eyebrow>Parent portal</Eyebrow>
          <h2 className="mt-4 font-display text-4xl uppercase leading-[1.02] text-berry md:text-5xl">
            Your child's day, in your pocket.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-berry/70">
            Attendance, meals, activities, messages, invoices and announcements — clear,
            gentle updates that keep families close throughout the day.
          </p>
          <ul className="mt-7 grid max-w-md grid-cols-2 gap-x-6 gap-y-3 text-sm font-medium text-berry/80">
            {['Attendance', 'Meals', 'Activities', 'Messages', 'Invoices', 'Announcements'].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sage/25">
                  <Check className="h-3 w-3" strokeWidth={3} style={{ color: '#5C7E58' }} />
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto flex h-[560px] w-full max-w-[520px] items-center justify-center">
          <Phone className="absolute left-2 top-6 -rotate-[6deg] scale-[0.92] opacity-90" variant="updates" />
          <Phone className="z-10" variant="today" />
          <Phone className="absolute right-2 top-10 rotate-[6deg] scale-[0.92] opacity-90" variant="messages" />
        </div>
      </div>
    </section>
  );
}

function Phone({ className, variant }: { className?: string; variant: 'today' | 'updates' | 'messages' }) {
  return (
    <div
      className={`h-[520px] w-[250px] rounded-[40px] bg-berry p-2 shadow-[0_30px_60px_-20px_rgba(122,31,77,0.45)] ${className ?? ''}`}
    >
      <div className="flex h-full flex-col rounded-[32px] bg-cream p-4 text-berry">
        <div className="mx-auto h-1 w-16 rounded-full bg-berry/15" />
        {variant === 'today' && <PhoneToday />}
        {variant === 'updates' && <PhoneUpdates />}
        {variant === 'messages' && <PhoneMessages />}
      </div>
    </div>
  );
}

function PhoneToday() {
  return (
    <div className="mt-4 flex h-full flex-col">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-berry/55">Today</p>
      <h4 className="font-display text-2xl uppercase">Yusuf — Tuesday</h4>
      <div className="mt-4 grid grid-cols-2 gap-2">
        <Stat icon={Apple} label="Lunch" value="Ate well" tint="#E1ECDB" />
        <Stat icon={Moon} label="Nap" value="45 min" tint="#E6DEF0" />
        <Stat icon={Palette} label="Activity" value="Painting" tint="#F8D1CD" />
        <Stat icon={Heart} label="Mood" value="Happy" tint="#FBDDD2" />
      </div>
      <div className="mt-4 rounded-2xl bg-white p-3 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-berry/50">Today's note</p>
        <p className="mt-1 text-xs leading-relaxed text-berry/80">
          Yusuf loved story time and built a tower of 6 blocks!
        </p>
      </div>
    </div>
  );
}

function PhoneUpdates() {
  const items = [
    { icon: Bell, label: 'Drop-off', t: '8:12' },
    { icon: Apple, label: 'Breakfast', t: '8:35' },
    { icon: BookOpen, label: 'Story time', t: '10:05' },
    { icon: Utensils, label: 'Lunch', t: '12:30' },
  ];
  return (
    <div className="mt-4 flex h-full flex-col">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-berry/55">Updates</p>
      <h4 className="font-display text-2xl uppercase">Today</h4>
      <div className="mt-3 space-y-2">
        {items.map((i) => (
          <div key={i.label} className="flex items-center justify-between rounded-xl bg-white p-2.5 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cream">
                <i.icon className="h-4 w-4 text-berry" />
              </span>
              <span className="text-xs font-semibold">{i.label}</span>
            </div>
            <span className="text-[10px] font-medium text-berry/55">{i.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneMessages() {
  return (
    <div className="mt-4 flex h-full flex-col">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-berry/55">Messages</p>
      <h4 className="font-display text-2xl uppercase">Maryam</h4>
      <div className="mt-4 space-y-2 text-xs">
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white p-2.5 shadow-sm">
          Good morning! Yusuf had a lovely settle in.
        </div>
        <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-md bg-rose/15 p-2.5 text-berry">
          Thank you! He was so excited today 🥰
        </div>
        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white p-2.5 shadow-sm">
          We'll send a photo after lunch ✨
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon, label, value, tint,
}: { icon: typeof Apple; label: string; value: string; tint: string }) {
  return (
    <div className="rounded-2xl p-3 shadow-sm" style={{ background: tint }}>
      <Icon className="h-4 w-4 text-berry" />
      <p className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-berry/55">{label}</p>
      <p className="text-xs font-semibold text-berry">{value}</p>
    </div>
  );
}

/* -------------------- TESTIMONIALS -------------------- */

const testimonials = [
  {
    name: 'Aisha R.',
    relation: 'Parent of two',
    rating: 5,
    body: 'Rosebery feels like an extension of our family. The daily updates are gentle and detailed — we always know how the day went.',
    tint: '#F8D1CD',
  },
  {
    name: 'Sofia K.',
    relation: 'Parent',
    rating: 5,
    body: "Small groups make such a difference. Our daughter is known, seen and cared for — not just minded.",
    tint: '#DCEEF9',
  },
  {
    name: 'Hassan M.',
    relation: 'Parent of one',
    rating: 5,
    body: 'Warm, professional and genuinely community-led. The childminders are wonderful with our son.',
    tint: '#E1ECDB',
  },
];

function Testimonials() {
  return (
    <section className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Parent voices"
          title="Loved by Liverpool families"
          intro="What families tell us about life with Rosebery — in their own words."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="warm-card flex flex-col rounded-3xl p-7">
              <div className="flex gap-0.5 text-[#E0A93C]">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-berry/85">
                "{t.body}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-berry/5 pt-5">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full font-display text-lg text-berry"
                  style={{ background: t.tint }}
                >
                  {t.name.split(' ').map((p) => p[0]).join('')}
                </span>
                <div>
                  <p className="font-semibold text-berry">{t.name}</p>
                  <p className="text-xs text-berry/55">{t.relation}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- WHY PARENTS -------------------- */

const reasons = [
  { title: 'Safe Environment', icon: Shield, desc: 'Safeguarding, risk assessments and clear house procedures throughout the day.', tint: '#E1ECDB' },
  { title: 'Small Groups', icon: Users, desc: 'Independent childminders create warmer, calmer group relationships.', tint: '#DCEEF9' },
  { title: 'Independent Childminders', icon: HomeIcon, desc: 'Trusted, qualified providers operating with shared values and standards.', tint: '#F8D1CD' },
  { title: 'Community Values', icon: Heart, desc: 'Operating under Liverpool Muslim Society for local, lasting community benefit.', tint: '#F4E1C9' },
  { title: 'Daily Updates', icon: Bell, desc: 'A parent portal that keeps care visible, transparent and emotionally close.', tint: '#E6DEF0' },
  { title: 'Professional Support', icon: FileText, desc: 'Admin, room allocation, invoices and shared systems so childminders can focus on care.', tint: '#FBDDD2' },
];

function WhyParents() {
  return (
    <section className="section-pad bg-[#FBF3E6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHead
          eyebrow="Why parents choose Rosebery"
          title="Built for trust"
          intro="Six commitments that shape every routine, every decision and every conversation with families."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.title} className="warm-card group rounded-3xl p-7 transition-smooth hover:-translate-y-1">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl"
                style={{ background: r.tint }}
              >
                <r.icon className="h-6 w-6 text-berry" />
              </div>
              <h3 className="mt-6 font-display text-2xl uppercase text-berry">{r.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-berry/68">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */

function FinalCta() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#F8E5D6,transparent_30rem),radial-gradient(circle_at_80%_80%,#E1ECDB,transparent_30rem),linear-gradient(180deg,#FBF3E6,#FFF9F1)]" />
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <Eyebrow>Begin here</Eyebrow>
        <h2 className="mt-5 font-display text-4xl uppercase leading-[1.02] text-berry md:text-6xl">
          Ready to begin with Rosebery?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-berry/70">
          Register your child, apply as a childminder, or get in touch — we'd love to hear from you.
        </p>
        <div className="mt-9 flex flex-col flex-wrap justify-center gap-3 sm:flex-row">
          <Link to="/register-interest"><Button size="lg">Register Your Child</Button></Link>
          <Link to="/become-a-childminder"><Button variant="secondary" size="lg">Become a Childminder</Button></Link>
          <Link to="/contact"><Button variant="outline" size="lg">Contact Us</Button></Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-berry/60">
          <span className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#5C7E58]" /> Liverpool Muslim Society</span>
          <span className="flex items-center gap-2"><HomeIcon className="h-4 w-4 text-[#5C7E58]" /> Facility-based hub</span>
          <span className="flex items-center gap-2"><MessageSquare className="h-4 w-4 text-[#5C7E58]" /> Parent enquiry support</span>
        </div>
      </div>
    </section>
  );
}

/* unused-import shim so tree-shaking doesn't complain in some bundlers */
export const __icons = { Sparkles, CalendarCheck, CreditCard, Blocks };
