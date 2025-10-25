function Orders() {
    return (
        <div className="flex gap-[5px] pt-[2px] pb-[2px] ">
            
            <div className="flex items-center">
                <img className="size-[45px]" src="build/assets/shopping-bag.webp" alt="Check mark" />
            </div>

            <div className="flex flex-col">
                <span className="font-[Montserrat] text-[13px]">Orders completed</span>
                <span className="font-[Montserrat] font-bold">100</span>
            </div>
        </div>
    );
}

export { Orders };