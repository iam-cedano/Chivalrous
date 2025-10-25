function Header() {
    return (
        <header className="w-full text-center">
                <span className="font-[Montserrat] m-auto font-bold text-[12px] text-white pt-[6px] pb-[6px] pl-[20px] pr-[20px] rounded-2xl bg-black">New Order</span>
        </header>
    )
}

function Input() {
    return (
        <div className="flex w-full p-[10px] border-[1px] border-[#F3F3F3]">            

            <img src="/build/assets/zoom-lens.webp" alt="Len image" />
            <input type="text" />
        </div>
    );
}

function Shopping() {
    return (
        <section id="shopping" className="w-full p-[10px]">
            <div className="bg-white rounded-2xl p-[10px]">
                
                <Header />
                <Input />

            </div>
        </section>
    );
}

export {Shopping};