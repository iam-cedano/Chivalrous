import { ReactNode } from "react";

type ShoppingProps = {
    children: ReactNode
};

function Shopping({children}: ShoppingProps) {
    return (
    <section id="shopping" className="w-full flex justify-center">
            <div className="bg-white w-full flex flex-col gap-4 rounded-2xl p-3">
                {children}
            </div>
    </section>
    );
}

export { Shopping };