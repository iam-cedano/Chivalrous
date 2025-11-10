import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface FullScreenSlideDialogProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  closeLabel?: string;
  closeOnOverlayClick?: boolean;
}

export default function FullScreenSlideDialog({
  open,
  onClose,
  title = 'Dialog',
  children,
  closeLabel = 'Close dialog',
  closeOnOverlayClick = true,
}: FullScreenSlideDialogProps) {
  const [mounted, setMounted] = useState(open);
  const [animatingOut, setAnimatingOut] = useState(false);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) {
      setMounted(true);
      setAnimatingOut(false);
    } else if (mounted) {
      setAnimatingOut(true);
    }
  }, [open, mounted]);

  useEffect(() => {
    if (!animatingOut) return;
    const t = setTimeout(() => {
      setMounted(false);
      setAnimatingOut(false);
    }, 320); // match transition duration
    return () => clearTimeout(t);
  }, [animatingOut]);

  useEffect(() => {
    if (!mounted) return;

    if (open) {
      lastFocusedRef.current = document.activeElement as HTMLElement | null;
      requestAnimationFrame(() => dialogRef.current?.focus());
    }

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const focusable = Array.from(nodes).filter((n) => !n.hasAttribute('disabled'));
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
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
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      if (!open) {
        lastFocusedRef.current?.focus();
      }
    };
  }, [mounted, open, onClose]);

  if (!mounted) return null;

  const translateClass = open && !animatingOut ? 'translate-y-0' : 'translate-y-full';

  function onOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (!closeOnOverlayClick) return;
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-end md:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={onOverlayClick}
    >
      <div
        ref={dialogRef}
        tabIndex={-1}
        className={[
          // container sizing: take the full viewport
          'w-full h-full bg-white flex flex-col outline-none',
          // animate transform from bottom -> top using Tailwind transitions
          // duration-300 ease-out provides a smooth slide
          'transform transition-transform duration-300 ease-out',
          translateClass,
        ].join(' ')}
        // ensure we unmount after transition end when closing
        onTransitionEnd={() => {
          if (animatingOut) {
            setMounted(false);
            setAnimatingOut(false);
          }
        }}
      >
        <header className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            type="button"
            aria-label={closeLabel}
            onClick={onClose}
            className="p-2 rounded-md hover:bg-slate-100 active:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <span aria-hidden className="text-2xl leading-none">×</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>,
    document.body
  );
}

export { FullScreenSlideDialog };