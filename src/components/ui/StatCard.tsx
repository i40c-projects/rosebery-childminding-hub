import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: LucideIcon;
  className?: string;
}

export function StatCard({ label, value, change, trend, icon: Icon, className }: StatCardProps) {
  const TrendIcon = trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus;
  const trendColor = trend === 'up' ? 'text-sage' : trend === 'down' ? 'text-rose' : 'text-berry/50';

  return (
    <div className={cn('premium-card p-5 sm:p-6 hover-lift', className)}>
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="font-display text-xs uppercase tracking-widest text-berry/50">{label}</p>
          <p className="mt-2 font-display text-3xl sm:text-4xl text-berry leading-none">{value}</p>
          {change && (
            <div className={cn('mt-2 flex items-center gap-1 text-sm font-medium', trendColor)}>
              <TrendIcon className="h-4 w-4" />
              <span>{change}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="rounded-2xl bg-gradient-to-br from-rose/15 to-sky/20 p-3 ring-1 ring-white/60 shadow-sm">
            <Icon className="h-6 w-6 text-rose" />
          </div>
        )}
      </div>
    </div>
  );
}
