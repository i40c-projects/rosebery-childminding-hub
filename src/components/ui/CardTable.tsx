import { cn } from '@/lib/utils';

interface CardTableColumn<T> {
  key: string;
  header: string;
  render: (item: T) => React.ReactNode;
  className?: string;
}

interface CardTableProps<T> {
  columns: CardTableColumn<T>[];
  data: T[];
  keyExtractor: (item: T) => string;
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
}

export function CardTable<T>({ columns, data, keyExtractor, onRowClick, emptyMessage = 'No records found' }: CardTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="premium-card p-12 text-center">
        <div className="mx-auto mb-4 h-12 w-12 rounded-2xl bg-gradient-to-br from-rose/15 to-sky/20 ring-1 ring-white/60" />
        <p className="font-semibold text-berry">{emptyMessage}</p>
        <p className="mt-1 text-sm text-berry/55">New records will appear here when they are available.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="hidden md:grid md:grid-cols-[repeat(var(--cols),1fr)] gap-4 px-6 py-2 text-xs font-semibold uppercase tracking-wider text-berry/50"
        style={{ '--cols': columns.length } as React.CSSProperties}
      >
        {columns.map((col) => (
          <div key={col.key} className={col.className}>{col.header}</div>
        ))}
      </div>
      {data.map((item) => (
        <div
          key={keyExtractor(item)}
          onClick={() => onRowClick?.(item)}
          className={cn(
            'premium-card rounded-2xl p-4 md:px-6 transition-smooth',
            onRowClick && 'cursor-pointer hover:-translate-y-0.5'
          )}
        >
          <div className="grid gap-3 md:grid-cols-[repeat(var(--cols),1fr)] md:items-center"
            style={{ '--cols': columns.length } as React.CSSProperties}
          >
            {columns.map((col) => (
              <div key={col.key} className={col.className}>
                <span className="mb-1 block text-xs font-semibold uppercase text-berry/40 md:hidden">{col.header}</span>
                {col.render(item)}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
