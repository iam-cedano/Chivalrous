import { JSX, useState } from "react";
import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { 
    faCartShopping, 
    faClipboardList, 
    faCircleDollarToSlot,
    faLayerGroup,
    faPlus,
    faListCheck,
    faCircleQuestion,
    faEnvelope,
    faFileContract,
    faChevronRight,
    faChevronDown,
    faHouse
} from "@fortawesome/free-solid-svg-icons";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

interface SidebarLinkProps {
    to: string;
    icon: IconDefinition;
    label: string;
    onClick?: () => void;
}

function SidebarLink({ to, icon, label, onClick }: SidebarLinkProps): JSX.Element {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <li>
            <Link 
                to={to}
                onClick={onClick}
                className={`flex items-center justify-between py-2 ${isActive ? 'text-[#22C55E]' : 'text-[#374151]'}`}
            >
                <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={icon} className="w-[25px] h-[25px]" />
                    <span className="text-[15px]">{label}</span>
                </span>
                <FontAwesomeIcon 
                    icon={faChevronRight} 
                    className={`w-[25px] h-[25px] ${isActive ? 'text-[#22C55E]' : 'text-[#9CA3AF]'}`} 
                />
            </Link>
        </li>
    );
}

function Accordion({ title, children, defaultOpen = false }: AccordionProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-gray-200 bg-[#E0E6EE]">
            <button
                className="flex justify-between items-center 
                w-full py-3 px-4 text-left text-sm font-semibold text-[#737B8B] uppercase"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <div className="bg-white rounded p-[5px]">
                    <FontAwesomeIcon 
                        icon={faChevronDown} 
                        className={`w-[25px] h-[25px] transition-transform ${isOpen ? "rotate-180" : ""}`} 
                    />
                </div>
            </button>
            {isOpen && <div className="px-4 pb-3">{children}</div>}
        </div>
    );
}

function Sidebar({ isOpen, onClose }: SidebarProps): JSX.Element {
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={onClose}
                />
            )}

     
            <aside
                className={`fixed top-0 left-0 h-full w-[280px] bg-[#E9EFF6] z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
        
                <div className="flex flex-col items-center py-6">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-2">
                        <img
                            src="/build/assets/brand.webp"
                            alt="Chivalrous Logo"
                            className="rounded-full"
                        />
                    </div>
                    <h1 className="text-xl font-semibold">Chivalrous</h1>
                    <p className="text-xl italic font-[Lobster]">
                        ¡Grow faster &amp; grow stronger!
                    </p>
                </div>

                <nav className="mt-2 space-y-1">
                    <Accordion title="QUICK LINKS" defaultOpen={true}>
                        <ul className="space-y-1">
                            <SidebarLink to="/home" icon={faHouse} label="Home" onClick={onClose} />
                            <SidebarLink to="/cart" icon={faCartShopping} label="Go to cart" onClick={onClose} />
                            <SidebarLink to="/history" icon={faClipboardList} label="Order history" onClick={onClose} />
                            <SidebarLink to="/funds" icon={faCircleDollarToSlot} label="Add Funds" onClick={onClose} />
                        </ul>
                    </Accordion>

                    <Accordion title="ORDERS & SERVICES">
                        <ul className="space-y-1">
                            <SidebarLink to="/services" icon={faLayerGroup} label="All Services" onClick={onClose} />
                            <SidebarLink to="/orders/new" icon={faPlus} label="New Order" onClick={onClose} />
                            <SidebarLink to="/orders/mass" icon={faListCheck} label="Mass Order" onClick={onClose} />
                        </ul>
                    </Accordion>

                    <Accordion title="SUPPORT & HELP">
                        <ul className="space-y-1">
                            <SidebarLink to="/faq" icon={faCircleQuestion} label="FAQ" onClick={onClose} />
                            <SidebarLink to="/contact" icon={faEnvelope} label="Contact Us" onClick={onClose} />
                            <SidebarLink to="/terms" icon={faFileContract} label="Terms of Service" onClick={onClose} />
                        </ul>
                    </Accordion>
                </nav>
            </aside>
        </>
    );
}

export { Sidebar };
