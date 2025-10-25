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

export { Wallet };