import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";
import DialogContext from "../../contexts/DialogContext";
import { useContext, useState, useRef, useEffect } from "react";

type CartItem = {
    id: number;
    serviceName: string;
    socialMedia: string;
    socialMediaLogo: string;
    account: string;
    quality: string;
    country: string;
    countryFlag: string;
    warranty: string;
    quantity: number;
    price: number;
    isSelected: boolean;
};

type SocialMediaGroup = {
    name: string;
    logo: string;
    items: CartItem[];
    total: number;
    isExpanded: boolean;
};

const mockCartItems: CartItem[] = [
    {
        id: 1,
        serviceName: "TikTok Followers",
        socialMedia: "TikTok",
        socialMediaLogo: "/build/assets/services/3/logo.webp",
        account: "Oscar Cedano",
        quality: "Premium",
        country: "USA",
        countryFlag: "🇺🇸",
        warranty: "60 days",
        quantity: 1000,
        price: 100,
        isSelected: true,
    },
    {
        id: 2,
        serviceName: "TikTok Likes",
        socialMedia: "TikTok",
        socialMediaLogo: "/build/assets/services/3/logo.webp",
        account: "Oscar Cedano",
        quality: "Premium",
        country: "USA",
        countryFlag: "🇺🇸",
        warranty: "60 days",
        quantity: 1000,
        price: 57,
        isSelected: true,
    },
    {
        id: 3,
        serviceName: "Facebook Followers",
        socialMedia: "Facebook",
        socialMediaLogo: "/build/assets/services/2/logo.webp",
        account: "Oscar Cedano",
        quality: "Premium",
        country: "USA",
        countryFlag: "🇺🇸",
        warranty: "60 days",
        quantity: 1000,
        price: 20,
        isSelected: true,
    },
    {
        id: 4,
        serviceName: "Facebook Reactions",
        socialMedia: "Facebook",
        socialMediaLogo: "/build/assets/services/2/logo.webp",
        account: "Oscar Cedano",
        quality: "Premium",
        country: "USA",
        countryFlag: "🇺🇸",
        warranty: "60 days",
        quantity: 1000,
        price: 57,
        isSelected: true,
    },
];

function CartItemRow({ item, onToggle, onDelete }: { item: CartItem; onToggle: () => void; onDelete: () => void }) {
    return (
        <div className="flex items-start gap-3 border-b border-[#E5E7EB] py-4 px-4">
            <input
                type="checkbox"
                checked={item.isSelected}
                onChange={onToggle}
                className="mt-1 size-5 rounded border-[#D1D5DB] accent-[#111827]"
            />
            <img
                src={item.socialMediaLogo}
                alt={item.socialMedia}
                className="size-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
                <p className="font-[Montserrat] font-semibold text-[#111827] text-[15px]">{item.serviceName}</p>
                <div className="text-[12px] text-[#6B7280] space-y-0.5 mt-1">
                    <p className="flex items-center gap-1">
                        <span>👤</span> {item.account}
                    </p>
                    <p className="flex items-center gap-1">
                        <span>⭐</span> Quality: <span className="font-medium text-[#111827]">{item.quality}</span>
                    </p>
                    <p className="flex items-center gap-1">
                        <span>🌍</span> Country: <span className="font-medium text-[#111827]">{item.countryFlag} {item.country}</span>
                    </p>
                    <p className="flex items-center gap-1">
                        <span>🛡️</span> Warranty: <span className="font-medium text-[#111827]">{item.warranty}</span>
                    </p>
                    <p className="flex items-center gap-1">
                        <span>📦</span> Quantity: <span className="font-medium text-[#111827]">{item.quantity.toLocaleString()}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <span className="font-[Montserrat] font-semibold text-[#111827]">$ {item.price} MXN</span>
                <button
                    type="button"
                    onClick={onDelete}
                    className="p-2 hover:bg-[#F3F4F6] rounded-lg transition-colors"
                >
                    <span className="text-[#9CA3AF] text-xl">🗑️</span>
                </button>
            </div>
        </div>
    );
}

function SocialMediaGroupHeader({ 
    group, 
    onToggleExpand, 
    onToggleAll 
}: { 
    group: SocialMediaGroup; 
    onToggleExpand: () => void; 
    onToggleAll: () => void;
}) {
    const allSelected = group.items.every(item => item.isSelected);

    return (
        <div className="flex items-center gap-3 bg-white py-3 px-4 border-b border-[#E5E7EB]">
            <input
                type="checkbox"
                checked={allSelected}
                onChange={onToggleAll}
                className="size-5 rounded border-[#D1D5DB] accent-[#111827]"
            />
            <img
                src={group.logo}
                alt={group.name}
                className="size-8 rounded-full"
            />
            <span className="font-[Montserrat] font-semibold text-[#111827]">{group.name}</span>
            <span className="ml-auto font-[Montserrat] text-[#22C55E] font-semibold">
                Total: $ {group.total} MXN
            </span>
            <button
                type="button"
                onClick={onToggleExpand}
                className="p-1"
            >
                <span className={`text-[#6B7280] transition-transform inline-block ${group.isExpanded ? 'rotate-180' : ''}`}>
                    ▲
                </span>
            </button>
        </div>
    );
}

function CheckoutDialog() {
    const { handleClosingDialog } = useContext(DialogContext);
    const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);
    const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
        TikTok: true,
        Facebook: true,
    });
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handlerClick = () => {
        console.info('Checkout!');
    }

        const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const hasMoreContent = container.scrollHeight > container.clientHeight;
            const isNotAtBottom = container.scrollTop + container.clientHeight < container.scrollHeight - 10;
            setShowScrollIndicator(hasMoreContent && isNotAtBottom);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            checkScrollPosition();
        }, 100);
        window.addEventListener('resize', checkScrollPosition);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkScrollPosition);
        };
    }, [cartItems, expandedGroups]);

    // Group items by social media
    const groupedItems: SocialMediaGroup[] = cartItems.reduce((groups, item) => {
        const existingGroup = groups.find(g => g.name === item.socialMedia);
        if (existingGroup) {
            existingGroup.items.push(item);
            existingGroup.total += item.isSelected ? item.price : 0;
        } else {
            groups.push({
                name: item.socialMedia,
                logo: item.socialMediaLogo,
                items: [item],
                total: item.isSelected ? item.price : 0,
                isExpanded: expandedGroups[item.socialMedia] ?? true,
            });
        }
        return groups;
    }, [] as SocialMediaGroup[]);

    const totalPrice = cartItems.filter(item => item.isSelected).reduce((sum, item) => sum + item.price, 0);
    const selectedCount = cartItems.filter(item => item.isSelected).length;

    const toggleItemSelection = (id: number) => {
        setCartItems(items =>
            items.map(item =>
                item.id === id ? { ...item, isSelected: !item.isSelected } : item
            )
        );
    };

    const toggleGroupSelection = (socialMedia: string) => {
        const groupItems = cartItems.filter(item => item.socialMedia === socialMedia);
        const allSelected = groupItems.every(item => item.isSelected);
        
        setCartItems(items =>
            items.map(item =>
                item.socialMedia === socialMedia ? { ...item, isSelected: !allSelected } : item
            )
        );
    };

    const toggleGroupExpand = (socialMedia: string) => {
        setExpandedGroups(prev => ({
            ...prev,
            [socialMedia]: !prev[socialMedia],
        }));
    };

    const deleteItem = (id: number) => {
        setCartItems(items => items.filter(item => item.id !== id));
    };

    return (
        <FullScreenDialog onClose={handleClosingDialog} title="Checkout">
            <div className="h-full overflow-y-auto" ref={scrollContainerRef} onScroll={checkScrollPosition}>
                <div className="pb-[195px]">
                    {groupedItems.map(group => (
                        <div key={group.name}>
                            <SocialMediaGroupHeader
                                group={{ ...group, isExpanded: expandedGroups[group.name] ?? true }}
                                onToggleExpand={() => toggleGroupExpand(group.name)}
                                onToggleAll={() => toggleGroupSelection(group.name)}
                            />
                            {(expandedGroups[group.name] ?? true) && (
                                <div>
                                    {group.items.map(item => (
                                        <CartItemRow
                                            key={item.id}
                                            item={item}
                                            onToggle={() => toggleItemSelection(item.id)}
                                            onDelete={() => deleteItem(item.id)}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator - positioned above the checkout footer */}
            {showScrollIndicator && (
                <div className="fixed bottom-[210px] left-0 right-0 flex justify-center pointer-events-none z-10">
                    <div className="bg-white/90 rounded-full p-2 shadow-md animate-bounce">
                        <span className="text-[#6B7280] text-lg">▼</span>
                    </div>
                </div>
            )}

            {/* Fixed checkout footer */}
            <div className="fixed bottom-17 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                        <span className="font-[Montserrat] font-semibold text-[#111827]">Total</span>
                        <span className="font-[Montserrat] font-semibold text-[#111827]">$ {totalPrice} MXN</span>
                    </div>
                    <button
                        type="button"
                        className="flex w-full gap-2 rounded-full bg-[#22C55E] px-4 py-4 justify-center shadow-md"
                        onClick={handlerClick}
                    >
                        <span className="text-[18px] font-[Montserrat] font-semibold text-white">
                            🛒 Checkout ({selectedCount} items)
                        </span>
                </button>
            </div>
        </FullScreenDialog>
    );
}

export { CheckoutDialog }