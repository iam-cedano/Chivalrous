
function Wallet() {
    return (
        <div className="flex">
           
           <div className="flex items-center w-[60px]">
                <img className="block size-[45px]" src="build/assets/wallet-details.webp" alt="Wallet image"/> 
           </div>
           
           <div className="flex flex-col w-fit border-r-[0.3px] border-r-[#F3F3F3]">
                <span className="font-[Montserrat] text-[15px]">Balance</span>
                <span className="font-[Montserrat] font-bold">$10,500.12 MXN</span>
                <a className="text-blue-500 font-[Montserrat] text-[12px]" href="https://google.com">Fill balance</a>
           </div>
        </div>
    );
}

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

function Details() {
    return (
        <section id="details" className="w-full p-[10px]">
            <div className="bg-white flex w-full rounded-2xl pt-[5px] pb-[5px] pr-[5px] pl-[5px]">
                <Wallet />
                <Orders />
            </div>
        </section>
    );
}

export {Details};