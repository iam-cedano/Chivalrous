import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

type OrderProps = {
    socialMediaLogo: string;
    status: string;
    statusColor: string;
    serviceName: string;
    quantity: number;
    total: number;
    profileIcon: string;
    profileText: string;
    url: string;
};

function Order({
    socialMediaLogo,
    status,
    statusColor,
    serviceName,
    quantity,
    total,
    profileIcon,
    profileText,
    url
}: OrderProps) {
    return (
        <div className="bg-[#F8F8F8] p-4 space-y-4">
            {/* Social Media Logo */}
            <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                    <img src={socialMediaLogo} alt="Social Media" className="w-12 h-12" />
                </div>
            </div>

            {/* Status */}
            <div className="flex items-center gap-2">
                <span className="text-2xl">📦</span>
                <span className="font-[Montserrat] font-semibold text-black">Status:</span>
                <span 
                    className="font-[Montserrat] font-semibold text-white px-3 py-0.5 rounded"
                    style={{ backgroundColor: statusColor }}
                >
                    {status}
                </span>
            </div>

            {/* Service */}
            <div className="flex items-center gap-2">
                <span className="text-2xl">📋</span>
                <span className="font-[Montserrat] font-semibold text-black">Service:</span>
                <span className="font-[Montserrat] text-black">{serviceName}</span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <span className="font-[Montserrat] font-semibold text-black">Quantity:</span>
                <span className="font-[Montserrat] text-black">{quantity}</span>
            </div>

            {/* Total */}
            <div className="flex items-center gap-2">
                <span className="text-2xl">💲</span>
                <span className="font-[Montserrat] font-semibold text-black">Total:</span>
                <span className="font-[Montserrat] text-black">${total} MXN</span>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2">
                <span className="text-2xl">👤</span>
                <span className="font-[Montserrat] font-semibold text-black">Profile:</span>
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded border border-[#E5E7EB]">
                    <img src={profileIcon} alt="Profile" className="w-4 h-4" />
                    <span className="font-[Montserrat] text-black text-sm truncate max-w-[200px]">
                        {profileText}
                    </span>
                </div>
            </div>

            {/* URL */}
            <div className="flex items-center gap-2">
                <span className="text-2xl">🔗</span>
                <span className="font-[Montserrat] font-semibold text-black">URL:</span>
                <a 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-[Montserrat] text-blue-600 text-sm truncate max-w-[200px] hover:underline"
                >
                    {url}
                </a>
            </div>

            {/* Add again to cart button */}
            <button
                type="button"
                className="w-full bg-[#22C55E] text-white font-[Montserrat] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-[#16A34A] transition-colors"
            >
                <FontAwesomeIcon icon={faCartShopping} className="w-5 h-5" />
                <span>Add again to cart</span>
            </button>

            {/* Support Section */}
            <div className="text-center space-y-3 pt-2">
                <p className="font-[Montserrat] text-black">
                    Do you have any trouble<br />with the order?
                </p>
                <button
                    type="button"
                    className="w-full bg-black text-white font-[Montserrat] font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                    <span>Contact Support</span>
                </button>
            </div>
        </div>
    );
}

export { Order };