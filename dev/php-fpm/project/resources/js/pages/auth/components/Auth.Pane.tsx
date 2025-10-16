import { ReactNode } from "react";

interface PaneContainer {
    children: ReactNode
}

function Pane(data: PaneContainer) {
    return (
        <div key="main-pane" className="flex pt-50">
            <div key="child-pane" className="bg-white h-screen w-100 m-2 rounded-[50px] p-[25px]">
                { data.children }
            </div>
        </div>
    );
}

export {Pane};