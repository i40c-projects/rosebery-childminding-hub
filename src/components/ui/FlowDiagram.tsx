import { cn } from '@/lib/utils';

interface FlowStep {
  title: string;
  description?: string;
}

interface FlowDiagramProps {
  steps: FlowStep[];
  direction?: 'vertical' | 'horizontal';
  className?: string;
}

export function FlowDiagram({ steps, direction = 'vertical', className }: FlowDiagramProps) {
  return (
    <div className={cn(
      direction === 'vertical' ? 'flex flex-col gap-0' : 'flex flex-wrap items-start gap-4',
      className
    )}>
      {steps.map((step, index) => (
        <div key={step.title} className={cn('flex items-stretch', direction === 'horizontal' && 'flex-1 min-w-[140px]')}>
          <div className="flex flex-col items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl gradient-rose text-white font-display text-lg shadow-xl shadow-rose/20 ring-4 ring-white/60">
              {index + 1}
            </div>
            {index < steps.length - 1 && direction === 'vertical' && (
              <div className="my-2 h-8 w-0.5 bg-gradient-to-b from-rose to-berry/30" />
            )}
          </div>
          <div className={cn('pb-8', direction === 'vertical' ? 'ml-4 pt-2' : 'mt-3 w-full text-center')}>
            <h4 className="font-display text-lg text-berry">{step.title}</h4>
            {step.description && <p className="mt-1 text-sm text-berry/70">{step.description}</p>}
          </div>
          {index < steps.length - 1 && direction === 'horizontal' && (
            <div className="hidden lg:block self-center mx-2 text-rose text-2xl">→</div>
          )}
        </div>
      ))}
    </div>
  );
}

interface FloatingCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  delay?: number;
}

export function FloatingCard({ title, description, icon, className, delay = 0 }: FloatingCardProps) {
  return (
    <div
      className={cn('premium-card p-6 hover-lift animate-float', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {icon && <div className="mb-4 text-rose">{icon}</div>}
      <h3 className="font-display text-xl text-berry">{title}</h3>
      <p className="mt-2 text-sm text-berry/70 leading-relaxed">{description}</p>
    </div>
  );
}
