function Orders() {
    return (
    <div className="flex gap-1 py-0.5 ">
            
            <div className="flex items-center">
                <img className="w-10 h-10" src="build/assets/shopping-bag.webp" alt="Check mark" />
            </div>

            <div className="flex flex-col">
                <span className="font-[Montserrat] text-xs">Orders completed</span>
                <span className="font-[Montserrat] font-bold">100</span>
            </div>
        </div>
    );
}

export { Orders };