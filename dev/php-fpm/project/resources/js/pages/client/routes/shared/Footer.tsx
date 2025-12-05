import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { 
    faClipboardList, 
    faHeadset, 
    faHouse, 
    faGift, 
    faGear 
} from "@fortawesome/free-solid-svg-icons";

type NavItem = {
    key: string,
    label: string,
    icon: IconDefinition
};

type TabProps = {
    details: NavItem,
    withBorder?: boolean,
    selected?: boolean,
};
    
const NAV_ITEMS: NavItem[] = [
    { key: 'history', label: 'Orders', icon: faClipboardList },
    { key: 'support', label: 'Support', icon: faHeadset },
    { key: 'home', label: 'Home', icon: faHouse },
    { key: 'offers', label: 'Offers', icon: faGift },
    { key: 'setting', label: 'Setting', icon: faGear },
];

function Tab({ details, withBorder = true, selected = false }: TabProps) {
    return (
        <Link to={`/${details.key}`}>
            <div className={`flex flex-col pr-[5px] ${withBorder ? 'border-r-[0.5px] border-r-[#F8F8F8]' : ''}`}>
                <FontAwesomeIcon 
                    icon={details.icon} 
                    className={`text-[25px] m-auto ${selected ? 'text-[#D4AF37]' : 'text-[#6B7280]'}`}
                />
                <span className={`text-center ${selected ? 'text-[#D4AF37]' : 'text-[#6B7280]'}`}>
                    {details.label}
                </span>
            </div>
        </Link>
    );
}

function Footer() {
    const location = useLocation();
    const activeKey = location.pathname.replace('/', '') || 'home';

    const navItems = NAV_ITEMS.map((item, index) => (
        <Tab
            key={item.key}
            details={item}
            selected={activeKey === item.key}
            withBorder={index < NAV_ITEMS.length - 1}
        />
    ));

    return (
        <nav id="footer" className="w-full p-2.5 fixed inset-x-0 bottom-0 flex justify-center bg-white h-[68px]">
            <ul className="flex flex-row gap-2.5">
                { navItems }
            </ul>
        </nav>
    );
}

export { Footer };