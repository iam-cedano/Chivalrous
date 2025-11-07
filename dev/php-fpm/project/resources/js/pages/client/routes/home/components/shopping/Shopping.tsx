import { ShoppingHeader } from "./ShoppingHeader";
import { SearchInput } from "./SearchInput";
import { ServicesContainer } from "./ListOfServices";
import { useEffect, useState } from "react";

function CartButton() {
    return (
        <div className="p-[15x] flex justify-center">
            <button className="bg-[#39B437]">
                <img src="/build/assets/filled-cart.webp" alt="Cart button "/>
                <span className="text-white">Cart</span>
            </button>
        </div>
    );
}

function SearchInputAndServices() {
    const [input, setInput] = useState<string>('');
    const [debouncedQuery, setDebouncedQuery] = useState<string>('');

    function handleInput(text: string) {
        setInput(text);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(input);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [input]);

    return (
        <>
            <SearchInput handleInput={handleInput}  />
            <ServicesContainer query={debouncedQuery} />
            <CartButton />
        </>
    );
}

function Shopping() {
    return (
        <section id="shopping" className="w-full p-[10px]">
            <div className="bg-white flex flex-col gap-[15px] rounded-2xl p-[10px]">
                
                <ShoppingHeader />

                <SearchInputAndServices />
        

            </div>
        </section>
    );
}

export { Shopping };