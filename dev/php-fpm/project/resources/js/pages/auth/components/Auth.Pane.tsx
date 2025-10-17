import { ReactNode } from "react";

interface PaneContainer {
    children: ReactNode
}

function Pane(data: PaneContainer) {
    return (
        <div key="main-pane" className="flex pt-50 h-screen">
            <div key="child-pane" className="bg-white w-full rounded-t-[100px] p-[50px]">
                { data.children }
            </div>
        </div>
    );
}

export {Pane};