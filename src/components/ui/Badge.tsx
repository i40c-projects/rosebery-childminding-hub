import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-white/70 text-berry ring-1 ring-berry/10',
    success: 'bg-sage/35 text-berry ring-1 ring-sage/40',
    warning: 'bg-beige/80 text-berry ring-1 ring-berry/15',
    danger: 'bg-rose/15 text-rose ring-1 ring-rose/20',
    info: 'bg-sky/35 text-berry ring-1 ring-sky/50',
  };

  return (
    <span className={cn('inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold shadow-sm', variants[variant], className)}>
      {children}
    </span>
  );
}
