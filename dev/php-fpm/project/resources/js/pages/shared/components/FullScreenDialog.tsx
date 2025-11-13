import React from 'react';

type FullScreenDialogProps = {
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

type HeaderProps = {
  title: string;
  onClose: () => void;
}

function Header({ title, onClose }: HeaderProps) {
  return (
    <header className="flex items-center px-4 py-3">
      <button
        type="button"
        onClick={onClose}
        className="size-10"
        >
        <img className="size-full" src="/build/assets/left-arrow.webp" alt="Back to home" />
      </button>

      <div className="w-full text-center">
        <h2 className="relative text-2xl font-semibold font-[Montserrat]">{title}</h2>
      </div>
    </header>
  );
}

export default function FullScreenDialog({
  onClose,
  title = 'Dialog',
  children,
}: FullScreenDialogProps) {
  return (
    <>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div
          className="w-full h-full bg-white flex flex-col outline-none"
        >
          <Header title={title}  onClose={onClose} />

          <main className="flex-1 overflow-y-auto p-4">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

export { FullScreenDialog };