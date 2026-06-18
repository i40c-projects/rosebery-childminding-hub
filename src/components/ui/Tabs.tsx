import { cn } from '@/lib/utils';

interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onChange: (id: string) => void;
  className?: string;
}

export function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={cn(
            'rounded-full px-5 py-2.5 text-sm font-semibold transition-smooth',
            activeTab === tab.id
              ? 'gradient-rose text-white shadow-md'
              : 'bg-white/60 text-berry hover:bg-white/80'
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
