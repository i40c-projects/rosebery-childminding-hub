import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const variants = {
      primary: 'gradient-rose text-white shadow-xl shadow-rose/25 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-rose/30',
      secondary: 'bg-white/70 text-berry ring-1 ring-white/70 shadow-lg shadow-berry/5 hover:-translate-y-0.5 hover:bg-white',
      outline: 'border border-berry/20 bg-white/30 text-berry shadow-sm hover:-translate-y-0.5 hover:border-rose/60 hover:bg-white/60 hover:text-rose',
      ghost: 'text-berry hover:bg-white/55 hover:-translate-y-0.5',
      danger: 'bg-red-500 text-white shadow-lg shadow-red-500/20 hover:-translate-y-0.5 hover:bg-red-600',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-smooth disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
