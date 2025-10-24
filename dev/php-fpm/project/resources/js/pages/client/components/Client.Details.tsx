
function Wallet() {
    return (
        <div className="flex gap-[5px]  justify-between">
           <div className="flex items-center">
                <img className="block size-[50px]" src="build/assets/wallet-details.webp" alt="Wallet image"/> 
           </div>
           
           <div className="flex flex-col border-r-[0.3px] border-r-[#F3F3F3] pr-[15px]">
                <span className="font-[Montserrat] text-[15px]">Balance</span>
                <span className="font-[Montserrat] font-bold">$101.12 MXN</span>
                <a className="text-blue-500 font-[Montserrat] text-[12px]" href="https://google.com">Fill balance</a>
           </div>
        </div>
    );
}

function Orders() {
    return (
        <div className="flex gap-[5px] pt-[10px] pb-[10px] pl-[20px] pr-[20px]">
            <div>
                <img src="build/assets/check-mark.webp" alt="Check mark" />
            </div>
            <div className="flex flex-col">
                <span className="font-[Montserrat]">Orders completed</span>
                <span className="font-[Montserrat] font-bold">100</span>
            </div>
        </div>
    );
}

function Details() {
    return (
        <section id="details" className="w-full p-[10px]">
            <div className="bg-white w-full flex justify-between rounded-2xl">
                <Wallet />
                <Orders />
            </div>
        </section>
    );
}

export {Details};