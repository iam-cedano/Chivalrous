import { Wallet } from "./Wallet";
import { Orders } from "./Orders";
import { ReactNode } from "react";

function Details() {
    return (
        <section id="details" className="w-full p-2.5">
            <div className="bg-white w-full rounded-2xl p-1.5 flex">
                <Wallet />
                <Orders />
            </div>
        </section>
    );
}

export { Details };