import { useEffect, useState } from "react";
import { ServicesContainer } from "./ListOfServices";
import { SearchInput } from "./SearchInput";

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
        </>
    );
}

export { SearchInputAndServices };