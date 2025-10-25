import { JSX } from "react";

function Account(): JSX.Element {
    return (
        <div className="flex gap-[5px] rounded-3xl bg-white p-2">
            <img className="size-[37px] rounded-[50%] object-cover" src="/build/assets/srajo.webp" alt="Profile photo"/>
            <img className="size-[32px] rounded-[50%] relative top-[5px]" src="/build/assets/down-arrow.webp" alt="Down Arrow"/>
        </div>
    );
}

export { Account };