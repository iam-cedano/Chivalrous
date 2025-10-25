import { JSX } from "react";

function Wallet(): JSX.Element {
    return (
        <div className="flex gap-2.5 bg-white rounded-3xl p-[8px]">
            <img src="/build/assets/wallet.webp" alt="Current balance of your account at the header" className="size-[37px]" />
            <span className="font-[Montserrat] text-[16px] relative top-[8px] max-w-[214px] truncate">$10,500.12 MXN</span>
        </div>
    );
}

export { Wallet };