import React from 'react';
import { createPortal } from 'react-dom';

type FullScreenDialogProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  closeAriaLabel?: string;
  closeOnOverlayClick?: boolean;
}

type HeaderProps = {
  title: string;
  closeAriaLabel: string;
  onClose: () => void
}

function Header({ title, closeAriaLabel, onClose }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b">
      <h2 className="text-lg font-semibold">{title}</h2>
      <button
        type="button"
        aria-label={closeAriaLabel}
        onClick={onClose}
        className="p-2 rounded-md hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <span aria-hidden className="text-2xl leading-none">×</span>
      </button>
    </header>
  );
}

export default function FullScreenDialog({
  onClose,
  title = 'Dialog',
  children,
  closeAriaLabel = 'Close dialog',
}: FullScreenDialogProps) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end md:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        tabIndex={-1}
        className={'w-full h-full bg-white flex flex-col outline-none'}
      >
        <Header title={title} closeAriaLabel={closeAriaLabel} onClose={onClose} />

        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
        
      </div>
    </div>,
    document.body
  );
}

export { FullScreenDialog };