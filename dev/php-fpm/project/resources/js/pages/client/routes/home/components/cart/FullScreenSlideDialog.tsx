import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface FullScreenSlideDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  closeLabel?: string;
}

const FullScreenSlideDialog: React.FC<FullScreenSlideDialogProps> = ({
  open,
  onClose,
  title = 'Dialog',
  children,
  closeLabel = 'Close dialog'
}) => {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      lastFocusedElementRef.current = document.activeElement as HTMLElement;

      setTimeout(() => {
        dialogRef.current?.focus();
      }, 0);
      
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
        if (e.key === 'Tab') {
          const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusable || focusable.length === 0) return;
          const first = focusable[0];
            const last = focusable[focusable.length - 1];
          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      lastFocusedElementRef.current?.focus();
    }
  }, [open, onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fsd-overlay"
    >
      <div
        className="fsd-container"
        ref={dialogRef}
        tabIndex={-1}
      >
        <header className="fsd-header">
          <h2 className="fsd-title">{title}</h2>
          <button
            type="button"
            className="fsd-close-btn"
            aria-label={closeLabel}
            onClick={onClose}
          >
            ×
          </button>
        </header>
        <section className="fsd-body">
          {children}
        </section>
      </div>
    </div>,
    document.body
  );
};

export default FullScreenSlideDialog;