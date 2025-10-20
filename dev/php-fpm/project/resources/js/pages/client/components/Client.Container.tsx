import { JSX, ReactNode } from "react";

interface ContainerInterface {
    children: ReactNode
}

function Container({children}: ContainerInterface): JSX.Element {
    return (
        <div className="bg-[#F8F8F8] h-screen pt-[30px] pl-[10px] pr-[10px]">
            {children}
        </div>
    );
}

export {Container};