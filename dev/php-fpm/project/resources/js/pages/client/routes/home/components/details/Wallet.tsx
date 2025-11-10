function Wallet() {
    return (
    <div className="flex">
           
         <div className="flex items-center w-1/5 sm:w-16">
             <img className="block w-4/5 h-auto" src="build/assets/wallet-details.webp" alt="Wallet image"/> 
           </div>
           
         <div className="flex flex-col w-fit border-r border-r-[#F3F3F3]">
             <span className="font-[Montserrat] text-sm">Balance</span>
                <span className="font-[Montserrat] font-bold">$10,500.12 MXN</span>
             <a className="text-blue-500 font-[Montserrat] text-xs" href="https://google.com">Fill balance</a>
           </div>
        </div>
    );
}

export { Wallet };