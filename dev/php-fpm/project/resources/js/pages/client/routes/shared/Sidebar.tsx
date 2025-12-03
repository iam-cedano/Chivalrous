import { JSX, useState } from "react";

interface AccordionProps {
    title: string;
    children: React.ReactNode;
}

function Accordion({ title, children }: AccordionProps): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-3 px-4 text-left text-sm font-semibold text-gray-700 hover:bg-gray-50"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && <div className="px-4 pb-3">{children}</div>}
        </div>
    );
}

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

function Sidebar({ isOpen, onClose }: SidebarProps): JSX.Element {
    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={onClose}
                />
            )}

            {/* Sidebar panel */}
            <aside
                className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                {/* Header / Logo */}
                <div className="flex flex-col items-center py-6 border-b border-gray-200">
                    <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-2">
                        <img
                            src="/build/assets/logo.webp"
                            alt="Chivalrous Logo"
                            className="w-10 h-10"
                        />
                    </div>
                    <h1 className="text-lg font-semibold">Chivalrous</h1>
                    <p className="text-xs text-gray-500 italic">Grow faster &amp; grow stronger!</p>
                </div>

                {/* Navigation Accordions */}
                <nav className="mt-2">
                    <Accordion title="QUICK LINKS">
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/home" className="hover:text-black">Home</a></li>
                            <li><a href="/history" className="hover:text-black">Order History</a></li>
                            <li><a href="/profile" className="hover:text-black">Profile</a></li>
                        </ul>
                    </Accordion>

                    <Accordion title="ORDERS & SERVICES">
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/services" className="hover:text-black">All Services</a></li>
                            <li><a href="/orders/new" className="hover:text-black">New Order</a></li>
                            <li><a href="/orders/mass" className="hover:text-black">Mass Order</a></li>
                        </ul>
                    </Accordion>

                    <Accordion title="SUPPORT & HELP">
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><a href="/faq" className="hover:text-black">FAQ</a></li>
                            <li><a href="/contact" className="hover:text-black">Contact Us</a></li>
                            <li><a href="/terms" className="hover:text-black">Terms of Service</a></li>
                        </ul>
                    </Accordion>
                </nav>
            </aside>
        </>
    );
}

export { Sidebar };
