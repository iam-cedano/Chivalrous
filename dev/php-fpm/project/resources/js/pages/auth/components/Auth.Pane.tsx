import { ReactNode } from "react";

interface PaneContainer {
    children: ReactNode
}

function Pane(data: PaneContainer) {
    return (
        <>
            <div className="bg-white mx-auto rounded-10">
                <p>Hello world</p>
            </div>
        </>
    );
}

export {Pane};