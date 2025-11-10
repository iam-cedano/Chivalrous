import { JSX, ReactNode } from "react";

interface ContainerInterface {
    children: ReactNode
}

function Container({children}: ContainerInterface): JSX.Element {
    return (
        <div className="bg-[#F8F8F8] w-full flex flex-col pt-2 pb-20">
            {children}
        </div>
    );
}

export {Container};