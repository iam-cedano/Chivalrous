import { Wallet } from "./Wallet";
import { Orders } from "./Orders";
import { ReactNode } from "react";

type DetailsProps = {
    children: ReactNode
};

function Details({children}: DetailsProps) {
    return (
        <section id="details" className="w-full p-2.5">
            <div className="bg-white flex w-full rounded-2xl pt-[5px] pb-[5px] pr-[5px] pl-[5px]">
                {children}
            </div>
        </section>
    );
}

export { Details };