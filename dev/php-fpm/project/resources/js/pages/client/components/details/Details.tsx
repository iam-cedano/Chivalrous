import { Wallet } from "./Wallet";
import { Orders } from "./Orders";

function Details() {
    return (
        <section id="details" className="w-full p-[10px]">
            <div className="bg-white flex w-full rounded-2xl pt-[5px] pb-[5px] pr-[5px] pl-[5px]">
                <Wallet />
                <Orders />
            </div>
        </section>
    );
}

export { Details };