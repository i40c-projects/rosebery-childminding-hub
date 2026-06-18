import { cn } from '@/lib/utils';

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function ChartCard({ title, subtitle, children, className }: ChartCardProps) {
  return (
    <div className={cn('premium-card p-5 sm:p-6', className)}>
      <div className="mb-6">
        <h3 className="font-display text-xl sm:text-2xl text-berry">{title}</h3>
        {subtitle && <p className="mt-1 text-sm text-berry/60">{subtitle}</p>}
      </div>
      <div className="min-h-[280px] min-w-0" style={{ width: '100%', height: 280 }}>
        {children}
      </div>
    </div>
  );
}
