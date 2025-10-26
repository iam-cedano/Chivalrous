import { ShoppingHeader } from "./ShoppingHeader";
import { SearchInput } from "./SearchInput";
import { ListOfServices } from "./ListOfServices";

function Shopping() {
    return (
        <section id="shopping" className="w-full p-[10px]">
            <div className="bg-white flex flex-col gap-[15px] rounded-2xl p-[10px]">
                
                <ShoppingHeader />
                <SearchInput />
                <ListOfServices />

            </div>
        </section>
    );
}

export { Shopping };