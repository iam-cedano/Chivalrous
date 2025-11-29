import { Wallet } from "./Wallet";
import { Orders } from "./Orders";
import { ReactNode } from "react";

type DetailsProps = {
    children: ReactNode
};

function Details({children}: DetailsProps) {
    return (
        <section id="details" className="w-full p-2.5">
            <div className="bg-white w-full rounded-2xl p-1.5 flex">
                {children}
            </div>
        </section>
    );
}

export { Details };