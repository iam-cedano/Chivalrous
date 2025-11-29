import { JSX, ReactNode } from "react";
import { Hambuger } from "./Hambuger";
import { Account } from "./Account";
import { Balance } from "./Balance";


function Header(): JSX.Element {
    return (
        <header className="flex justify-between">
            <Hambuger />

            <div className="flex gap-2.5">
                <Balance />
                <Account />
            </div>
        </header>
    );
}

export { Header };