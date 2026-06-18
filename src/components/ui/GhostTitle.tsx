import { cn } from '@/lib/utils';

interface GhostTitleProps {
  text: string;
  className?: string;
}

export function GhostTitle({ text, className }: GhostTitleProps) {
  return (
    <div
      className={cn('ghost-text absolute inset-x-0 top-1/2 -translate-y-1/2 text-center whitespace-nowrap overflow-hidden', className)}
      aria-hidden="true"
    >
      {text}
    </div>
  );
}
