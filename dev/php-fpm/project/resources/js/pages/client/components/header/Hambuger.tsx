import { JSX } from "react";

function Hambuger(): JSX.Element {
    return (
        <button className="rounded-[50%] bg-white size-[50px]">
            <img src="/build/assets/hambuger.webp" alt="Navigation Button" className="size-[40px] mx-auto" />
        </button>   
    );
}

export { Hambuger };