type SearchProps = {
    onInput: (text: string) => void;
    className: string;
};

function SearchInput({ onInput, className }: SearchProps) {
    return (
        <form className={className} action="/">
            <img className="size-5" src="/build/assets/zoom-lens.webp" alt="Len image" />
            <input onChange={e => onInput(e.target.value)} name="search-input" id="search-input" type="text" className="outline-0 text-left w-full font-[Montserrat] text-[15px]" placeholder="Search"></input>
        </form>
    );
}

export { SearchInput };
