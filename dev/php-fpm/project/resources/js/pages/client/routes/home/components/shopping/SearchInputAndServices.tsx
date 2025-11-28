import { useEffect, useState } from "react";
import { ServicesContainer } from "./ListOfServices";
import { SearchInput } from "./SearchInput";

function SearchInputAndServices() {
    const [input, setInput] = useState<string>('');
    const [debouncedQuery, setDebouncedQuery] = useState<string>('');

    function handlerInput(text: string) {
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
            <SearchInput onInput={handlerInput} className="flex w-full gap-[9px] p-2.5 border border-[#F3F3F3]"  />
            <ServicesContainer query={debouncedQuery} />
        </>
    );
}

export { SearchInputAndServices };