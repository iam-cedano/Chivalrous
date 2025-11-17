import { JSX } from "react";

type LoadingOverlayProps = {
    isVisible: boolean;
};

function LoadingOverlay({ isVisible }: LoadingOverlayProps): JSX.Element | null {
    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex cursor-wait items-center justify-center bg-gray-950/70">
            <div className="flex flex-col items-center gap-3">
                <span className="h-14 w-14 animate-spin rounded-full border-4 border-white/30 border-t-white" />
                <span className="text-sm font-medium text-white/80">Loading...</span>
            </div>
        </div>
    );
}

export { LoadingOverlay };
