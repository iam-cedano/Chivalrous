import React from 'react';

type FullScreenDialogProps = {
    onClose: () => void;
    title?: string;
    children?: React.ReactNode;
};

type HeaderProps = {
    title: string;
    onClose: () => void;
};

function Header({ title, onClose }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex w-full items-center bg-white px-4 py-3 shadow-sm">
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
        <div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            className="flex h-screen bg-white overflow-hidden"
        >
            <div className="flex h-full w-full flex-col overflow-hidden">
                <Header title={title} onClose={onClose} />

                <div className="flex-1 min-h-0 overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}

export { FullScreenDialog };
