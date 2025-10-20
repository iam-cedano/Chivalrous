import { JSX, ReactNode } from "react";
import WalletImg from "@/assets/wallet.png";
import SrajoImg from "@/assets/srajo.jpg";
import DownArrowImg from "@/assets/down-arrow.png";

interface HeaderInterface {
    children: ReactNode
}

import HambugerImg from "@/assets/hambuger.png";

function Hambuger(): JSX.Element {
    return (
        <button className="rounded-[50%] bg-white size-[50px]">
            <img src={HambugerImg} alt="Navigation Button" className="size-[40px] mx-auto" />
        </button>   
    );
}

function Wallet(): JSX.Element {
    return (
        <div className="flex gap-2.5 bg-white rounded-3xl p-[8px]">
            <img src={WalletImg} alt="Current balance of your account at the header" className="size-[40px]" />
            <span className="font-[Montserrat] text-[20px] relative top-[5px] max-w-[214px] truncate">$100,500.12 MXN</span>
        </div>
    );
}

function Account(): JSX.Element {
    return (
        <div className="flex gap-[5px] rounded-3xl bg-white p-2">
            <img className="size-[37px] rounded-[50%] object-cover" src={SrajoImg} alt="Profile photo"/>
            <img className="size-[32px] rounded-[50%] relative top-[5px]" src={DownArrowImg} alt="Down Arrow"/>
        </div>
    );
}

function Parent({children}: HeaderInterface): JSX.Element {
    return (
        <header className="flex justify-between">
            {children}
        </header>
    );
}

export {Parent, Hambuger, Wallet, Account};