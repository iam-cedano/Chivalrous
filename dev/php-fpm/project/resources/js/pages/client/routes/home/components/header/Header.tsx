import { JSX } from "react";

type HeaderProps = {
    amount: number;
    profile_img_url: string;
};

function Header({amount, profile_img_url}: HeaderProps): JSX.Element {
    return (
        <header className="flex justify-between">
            <button className="rounded-[50%] bg-white size-[50px]">
                <img src="/build/assets/hambuger.webp" alt="Navigation Button" className="size-10 mx-auto" />
            </button>

            <div className="flex gap-2.5">
                <div className="flex gap-2.5 bg-white rounded-3xl p-2">
                    <img src="/build/assets/wallet.webp" alt="Current balance of your account at the header" className="size-[37px]" />
                    <span className="font-[Montserrat] text-[16px] relative top-2 max-w-[214px] truncate">${amount} MXN</span>
                </div>
                <div className="flex gap-[5px] rounded-3xl bg-white p-2">
                    <img className="size-[37px] rounded-[50%] object-cover" src={profile_img_url} alt="Profile photo" />
                    <img className="size-8 rounded-[50%] relative top-[5px]" src="/build/assets/down-arrow.webp" alt="Down Arrow" />
                </div>
            </div>
        </header>
    );
}

export { Header };