import { cn } from '@/lib/utils';

interface PageHeroProps {
  ghostText: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  compact?: boolean;
}

export function PageHero({ ghostText, title, subtitle, children, className, compact }: PageHeroProps) {
  return (
    <section className={cn('relative overflow-hidden gradient-warm', compact ? 'py-16 md:py-20' : 'min-h-[70vh] flex items-center py-24 md:py-32', className)}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,247,238,0.08))]" />
      <div className="ghost-text absolute inset-x-0 top-1/2 -translate-y-1/2 text-center whitespace-nowrap overflow-hidden pointer-events-none select-none" aria-hidden="true">
        {ghostText}
      </div>
      <GrainOverlay />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-berry max-w-4xl leading-[0.96] animate-fade-up">{title}</h1>
        {subtitle && <p className="mt-6 text-lg md:text-xl text-berry/70 max-w-2xl leading-relaxed animate-fade-up [animation-delay:120ms]">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

function GrainOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.04]" aria-hidden="true">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
    </div>
  );
}
