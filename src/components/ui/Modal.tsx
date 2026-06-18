import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Modal({ isOpen, onClose, title, children, footer, size = 'md' }: ModalProps) {
  if (!isOpen) return null;

  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-berry/40 backdrop-blur-sm" onClick={onClose} />
      <div className={cn('relative w-full glass rounded-[var(--radius-panel)] p-6 shadow-2xl animate-in fade-in', sizes[size])}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-2xl text-berry">{title}</h2>
          <button onClick={onClose} className="rounded-full p-2 text-berry/60 hover:bg-berry/5 hover:text-berry transition-smooth">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mb-6">{children}</div>
        {footer && <div className="flex justify-end gap-3">{footer}</div>}
      </div>
    </div>
  );
}

export function ModalActions({ onCancel, onConfirm, confirmLabel = 'Confirm', cancelLabel = 'Cancel', loading }: {
  onCancel: () => void;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  loading?: boolean;
}) {
  return (
    <>
      <Button variant="ghost" onClick={onCancel}>{cancelLabel}</Button>
      <Button onClick={onConfirm} disabled={loading}>{confirmLabel}</Button>
    </>
  );
}
