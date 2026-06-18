import { cn } from '@/lib/utils';

interface GrainOverlayProps {
  className?: string;
  opacity?: number;
}

export function GrainOverlay({ className, opacity = 0.04 }: GrainOverlayProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 z-[1]', className)}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}
