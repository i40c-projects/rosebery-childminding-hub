import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Blocks, Brush, Moon, Salad, Shield, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const slides = [
  {
    title: 'Story Time',
    label: 'Reading, books, calm learning',
    bg: '#F3A1B3',
    accent: '#7A1F4D',
    glow: 'from-rose/35 to-cream/80',
    icon: BookOpen,
    objects: ['ABC', 'Read', 'Grow'],
  },
  {
    title: 'Creative Play',
    label: 'Crayons, blocks, painting, imagination',
    bg: '#A9D8F5',
    accent: '#E65A7A',
    glow: 'from-sky/40 to-white/80',
    icon: Brush,
    objects: ['Paint', 'Build', 'Make'],
  },
  {
    title: 'Healthy Meals',
    label: 'Breakfast, lunch, snacks, wellbeing',
    bg: '#A7C7A3',
    accent: '#8B6A48',
    glow: 'from-sage/45 to-beige/80',
    icon: Salad,
    objects: ['Fresh', 'Warm', 'Care'],
  },
  {
    title: 'Quiet Care',
    label: 'Rest, calm spaces, comfort, small groups',
    bg: '#BFA7D8',
    accent: '#FFF7EE',
    glow: 'from-berry/20 to-cream/90',
    icon: Moon,
    objects: ['Rest', 'Calm', 'Safe'],
  },
];

const glassFacts = [
  { icon: Shield, title: 'Safe Environment' },
  { icon: Users, title: 'Small Groups' },
  { icon: Blocks, title: 'Independent Childminders' },
  { icon: Heart, title: 'Community Values' },
];

type Direction = 'next' | 'prev';
type Role = 'center' | 'left' | 'right' | 'back';

export function RoseberyPlayHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const active = slides[activeIndex];

  const roleByIndex = useMemo(() => ({
    [activeIndex]: 'center',
    [(activeIndex + 3) % 4]: 'left',
    [(activeIndex + 1) % 4]: 'right',
    [(activeIndex + 2) % 4]: 'back',
  } as Record<number, Role>), [activeIndex]);

  const navigate = (direction: Direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => direction === 'next' ? (current + 1) % slides.length : (current + slides.length - 1) % slides.length);
    window.setTimeout(() => setIsAnimating(false), 650);
  };

  const roleStyles = (role: Role) => {
    const base = 'translateX(-50%)';
    if (role === 'center') {
      return {
        left: '50%',
        bottom: isMobile ? '23%' : '5%',
        height: isMobile ? '48%' : '68%',
        transform: `${base} scale(${isMobile ? 1.05 : 1.22})`,
        filter: 'blur(0)',
        opacity: 1,
        zIndex: 20,
      };
    }
    if (role === 'left') {
      return {
        left: isMobile ? '18%' : '28%',
        bottom: isMobile ? '30%' : '15%',
        height: isMobile ? '24%' : '36%',
        transform: `${base} scale(1)`,
        filter: 'blur(2px)',
        opacity: 0.72,
        zIndex: 10,
      };
    }
    if (role === 'right') {
      return {
        left: isMobile ? '82%' : '72%',
        bottom: isMobile ? '30%' : '15%',
        height: isMobile ? '24%' : '36%',
        transform: `${base} scale(1)`,
        filter: 'blur(2px)',
        opacity: 0.72,
        zIndex: 10,
      };
    }
    return {
      left: '50%',
      bottom: isMobile ? '33%' : '18%',
      height: isMobile ? '20%' : '30%',
      transform: `${base} scale(0.95)`,
      filter: 'blur(4px)',
      opacity: 0.45,
      zIndex: 5,
    };
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden text-white transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{ backgroundColor: active.bg }}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-br opacity-80 animate-slow-pan', active.glow)} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(255,255,255,0.34),transparent_24rem),radial-gradient(circle_at_80%_68%,rgba(122,31,77,0.18),transparent_28rem)]" />
      <div
        className="absolute inset-0 z-50 pointer-events-none opacity-35"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.45'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />
      <div className="absolute left-4 top-6 z-[60] text-xs font-semibold uppercase tracking-[0.18em] opacity-95 sm:left-8">
        ROSEBERY
      </div>
      <div className="absolute inset-x-0 top-[18%] z-[2] flex select-none justify-center whitespace-nowrap font-display text-[clamp(76px,20vw,300px)] uppercase leading-none tracking-normal text-white/55 sm:top-[15%]">
        PLAY LEARN GROW
      </div>

      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute left-1/2 top-[19%] z-[60] w-[min(92vw,860px)] -translate-x-1/2 text-center sm:top-[16%]">
          <h1 className="font-display text-[clamp(42px,7vw,104px)] leading-[0.9] text-white drop-shadow-[0_18px_46px_rgba(122,31,77,0.18)]">
            Helping Children Flourish Through Care, Community & Discovery
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-relaxed text-white/88 sm:text-lg">
            Rosebery operates under Liverpool Muslim Society as a shared childminding hub where families meet trusted independent childminders in a safe, well-supported environment.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/register-interest"><Button size="lg" className="w-full bg-white text-berry shadow-white/20 hover:bg-white sm:w-auto">Register Your Child</Button></Link>
            <Link to="/become-a-childminder"><Button variant="outline" size="lg" className="w-full border-white/70 bg-white/10 text-white hover:bg-white/18 hover:text-white sm:w-auto">Become a Childminder</Button></Link>
          </div>
        </div>

        {slides.map((slide, index) => {
          const role = roleByIndex[index];
          return (
            <article
              key={slide.title}
              className="liquid-glass absolute aspect-[0.78/1] rounded-[36px] p-5 text-berry transition-[transform,filter,opacity,left,height,bottom] duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[transform,filter,opacity]"
              style={roleStyles(role)}
            >
              <MomentCard slide={slide} isCenter={role === 'center'} />
            </article>
          );
        })}

        <div className="absolute bottom-6 left-4 z-[60] max-w-[420px] sm:bottom-20 sm:left-24">
          <p className="font-display text-lg uppercase tracking-wide text-white">Rosebery Childminding Hub</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
            A warm, facility-based childminding hub where independent childminders support children through care, play, learning and community values.
          </p>
          <div className="mt-5 flex gap-3">
            <button onClick={() => navigate('prev')} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/10 text-white transition-smooth hover:scale-[1.08] hover:bg-white/20" aria-label="Previous Rosebery moment">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button onClick={() => navigate('next')} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-white/10 text-white transition-smooth hover:scale-[1.08] hover:bg-white/20" aria-label="Next Rosebery moment">
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <Link to="/register-interest" className="absolute bottom-6 right-4 z-[60] flex items-center gap-3 font-display text-[clamp(20px,4vw,56px)] uppercase text-white opacity-95 transition-smooth hover:opacity-100 sm:bottom-20 sm:right-10">
          Register Interest <ArrowRight className="h-8 w-8" />
        </Link>

        <div className="absolute bottom-[18%] left-1/2 z-[55] hidden w-[min(92vw,900px)] -translate-x-1/2 grid-cols-4 gap-3 lg:grid">
          {glassFacts.map((fact) => (
            <div key={fact.title} className="liquid-glass rounded-[28px] px-4 py-4 text-white">
              <fact.icon className="h-5 w-5" />
              <p className="mt-2 text-sm font-semibold">{fact.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MomentCard({ slide, isCenter }: { slide: typeof slides[number]; isCenter: boolean }) {
  const Icon = slide.icon;

  return (
    <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] bg-white/72 p-5 shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_16%,rgba(255,255,255,0.9),transparent_14rem),radial-gradient(circle_at_80%_82%,rgba(230,90,122,0.16),transparent_16rem)]" />
      <div className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose">Rosebery Moment</p>
          <h2 className="mt-2 font-display text-3xl text-berry sm:text-5xl">{slide.title}</h2>
          <p className="mt-2 max-w-[15rem] text-sm font-medium text-berry/62">{slide.label}</p>
        </div>
        <div className="rounded-3xl p-4 text-white shadow-xl" style={{ backgroundColor: slide.accent }}>
          <Icon className="h-8 w-8" />
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-[18rem] grid-cols-2 gap-4">
        <div className="col-span-2 flex justify-center">
          <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-cream shadow-xl rotate-[-6deg]">
            <BookOpen className="h-12 w-12 text-rose" />
          </div>
        </div>
        {slide.objects.map((object, index) => (
          <div
            key={object}
            className={cn('rounded-[1.5rem] bg-white/82 p-4 text-center font-bold text-berry shadow-lg', isCenter && 'animate-float')}
            style={{ animationDelay: `${index * 180}ms` }}
          >
            {object}
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-between rounded-3xl bg-berry/8 px-4 py-3">
        <span className="text-sm font-semibold text-berry">Care, play, grow</span>
        <span className="h-3 w-3 rounded-full bg-rose shadow-[0_0_18px_rgba(230,90,122,0.8)]" />
      </div>
    </div>
  );
}
