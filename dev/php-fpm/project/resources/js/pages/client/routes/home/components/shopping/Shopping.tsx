import { ReactNode } from "react";

type ShoppingProps = {
    children: ReactNode
};

function Shopping({children}: ShoppingProps) {
    return (
        <section id="shopping" className="w-full p-2.5">
            <div className="bg-white flex flex-col gap-[15px] rounded-2xl p-2.5">
                {children}
            </div>
        </section>
    );
}

export { Shopping };