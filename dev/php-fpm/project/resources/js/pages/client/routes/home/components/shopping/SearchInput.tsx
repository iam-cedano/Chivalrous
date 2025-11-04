type SearchProps = {
    handleInput: (text: string) => void,
};

function SearchInput({handleInput}: SearchProps) {
    return (
        <form className="flex w-full gap-[9px] p-[10px] border-[1px] border-[#F3F3F3]" action="/">            
            <img className="size-[20px]" src="/build/assets/zoom-lens.webp" alt="Len image" />
            <input onChange={e => handleInput(e.target.value)} name="search-input" id="search-input" type="text" className="outline-0 text-left w-full font-[Montserrat] text-[15px]" placeholder="Search"></input>
        </form>
    );
}

export { SearchInput }; 