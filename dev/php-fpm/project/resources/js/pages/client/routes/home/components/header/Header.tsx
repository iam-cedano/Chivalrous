import { JSX, ReactNode } from "react";

interface HeaderInterface {
    children: ReactNode
}

function Header({children}: HeaderInterface): JSX.Element {
    return (
        <header className="flex justify-between">
            {children}
        </header>
    );
}

export { Header };