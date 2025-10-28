type NavItem = {
    key: string,
    label: string,
    image: string
};

type TabType = {
    details: NavItem,
    withBorder: boolean
}

const NAV_ITEMS: NavItem[] = [
    { key: 'orders', label: 'Orders', image: 'build/assets/order.webp' },
    { key: 'support', label: 'Support', image: 'build/assets/support.webp' },
    { key: 'home', label: 'Home', image: 'build/assets/home.webp' },
    { key: 'offers', label: 'Offers', image: 'build/assets/offer.webp' },
    { key: 'config', label: 'Config', image: 'build/assets/config.webp' },
];

function Tab({ details, withBorder = true  }: TabType) {
    return (
        <div className={`flex flex-col pr-[5px] ${ withBorder ? 'border-r-2' : '' }`}>
            <img src={ details.image } alt={ `${details.label}'s link` } 
             className="size-[35px] m-auto" />
            <span className="text-center">{ details.label }</span>
        </div>
    );
}

function Footer() {
    const NavItems = NAV_ITEMS.map((item, index) => <Tab details={item} withBorder={ (index < NAV_ITEMS.length - 1) } />);

    return (
        <nav id="footer" className="w-full p-[10px] fixed inset-x-0 bottom-0 flex justify-center bg-white">
            <ul className="flex flex-row gap-[10px]">
                { NavItems } 
            </ul>
        </nav>
    );
}

export {Footer};