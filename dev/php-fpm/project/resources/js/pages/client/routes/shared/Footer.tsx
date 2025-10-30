import { Link } from "react-router";
import { useState } from "react";

type NavItem = {
    key: string,
    label: string,
    image: string,
    gold: string
};

type TabProps = {
    details: NavItem,
    withBorder?: boolean,
    selected?: boolean,
    onSelect: (key: string) => void
};

const NAV_ITEMS: NavItem[] = [
    { key: 'history', label: 'Orders', image: 'build/assets/order.webp', gold: 'build/assets/orders_gold.webp' },
    { key: 'support', label: 'Support', image: 'build/assets/support.webp', gold: 'build/assets/support_gold.webp' },
    { key: 'home', label: 'Home', image: 'build/assets/home.webp', gold: 'build/assets/home_gold.webp' },
    { key: 'offers', label: 'Offers', image: 'build/assets/offer.webp', gold: 'build/assets/offer_gold.webp' },
    { key: 'setting', label: 'Setting', image: 'build/assets/setting.webp', gold: 'build/assets/setting_gold.webp' },
];

function Tab({ details, withBorder = true, selected = false, onSelect }: TabProps) {
    return (
        <Link to={`/${details.key}`} onClick={() => onSelect(details.key)}>
              <div className={`flex flex-col pr-[5px] ${ withBorder ? 'border-r-[0.5px] border-r-[#F8F8F8]' : '' }`}>
                <img
                    src={ selected ? details.gold : details.image }
                    alt={`${details.label}'s link`}
                    className="size-[35px] m-auto"
                />
                <span className="text-center">{ details.label }</span>
            </div>
        </Link>
    );
}

function Footer() {
    const [activeKey, setActiveKey] = useState<string>('home');

    const navItems = NAV_ITEMS.map((item, index) => (
        <Tab
            key={item.key}
            details={item}
            selected={activeKey === item.key}
            onSelect={setActiveKey}
            withBorder={index < NAV_ITEMS.length - 1}
        />
    ));

    console.info(`Selected Tab: ${activeKey}`);

    return (
        <nav id="footer" className="w-full p-[10px] fixed inset-x-0 bottom-0 flex justify-center bg-white">
            <ul className="flex flex-row gap-[10px]">
                { navItems }
            </ul>
        </nav>
    );
}

export { Footer };