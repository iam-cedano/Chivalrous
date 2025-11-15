import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";
import SingleServiceResponse from "../../api/res/SingleServiceResponse";

type AddingServiceProps = {
    service: SingleServiceResponse;
    onClose: () => void
};

function AddingServiceDialog({ service, onClose }: AddingServiceProps) {
    const bannerImage = service.banner_uri || "/build/assets/services/1/banner.webp";

    const bulletPoints = service.long_description
        ? service.long_description
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean)
        : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            "Ut enim ad minim veniam, quis nostrud exercitation."
        ];

    return (
        <FullScreenDialog onClose={onClose} title="Adding Service">
            <div>
                    <img
                        className="w-full object-cover"
                        src={bannerImage}
                        alt={`${service.name} banner`}
                    />
            </div>
            <div className="relative w-full bg-red-500">
                <div className="flex flex-col gap-6 pb-10 pt-6">
                    <section className="space-y-4 overflow-y-scroll">
                        <header className="space-y-2">
                            <h3 className="text-[26px] font-[Montserrat] font-semibold text-black leading-[1.15]">
                                {service.name}
                            </h3>
                            <p className="text-[#4B5563] text-[15px] leading-[1.6]">
                                {service.long_description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                            </p>
                        </header>

                        <ul className="space-y-1.5 text-[15px] text-[#1F2937]">
                            {bulletPoints.map((point, index) => (
                                <li key={`service-detail-${index}`} className="flex items-start gap-2">
                                    <span aria-hidden="true" className="mt-[3px] text-[10px]">•</span>
                                    <span className="leading-normal">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <label htmlFor="account" className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                            Account:
                        </label>
                        <button
                            type="button"
                            id="account"
                            className="flex items-center justify-between gap-3 rounded-[14px] border border-[#D1D5DB] bg-white px-4 py-3 text-left shadow-sm"
                        >
                            <span className="flex items-center gap-3">
                                <img className="size-9 rounded-full" src="/build/assets/logos/instagram.webp" alt="Selected account" />
                                <span className="text-[15px] text-[#111827] font-[Montserrat]">
                                    Oscar Cedano&apos;s Account - /mrc...
                                </span>
                            </span>
                            <img className="size-5" src="/build/assets/down-arrow.webp" alt="Change account" />
                        </button>
                    </section>

                    <section className="space-y-3">
                        <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                            Quality:
                        </p>

                        <div className="flex gap-3">
                            <button
                                type="button"
                                className="flex-1 rounded-full border border-[#111827] bg-[#111827] px-4 py-3 text-[15px] font-[Montserrat] text-white"
                            >
                                <span className="mr-2" aria-hidden>🌟</span>
                                Real Followers
                            </button>
                            <button
                                type="button"
                                className="flex-1 rounded-full border border-[#E5E7EB] bg-white px-4 py-3 text-[15px] font-[Montserrat] text-[#374151]"
                            >
                                <span className="mr-2" aria-hidden>🤖</span>
                                Bot Follower
                            </button>
                        </div>

                        <div className="flex gap-3 overflow-x-auto">
                            <button
                                type="button"
                                className="min-w-[200px] flex-1 rounded-2xl border border-[#FACC15] bg-[#FEF08A] px-4 py-3 text-[15px] font-[Montserrat] text-[#854D0E] shadow-inner"
                            >
                                🏅 Real Followers
                            </button>
                        </div>
                    </section>

                    <section className="space-y-5">
                        <div className="space-y-3">
                            <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                Country:
                            </p>
                            <div className="flex gap-3">
                                <button
                                    type="button"
                                    className="flex-1 rounded-full border border-[#111827] bg-[#111827] px-4 py-3 text-[15px] font-[Montserrat] text-white"
                                >
                                    🇲🇽 Mexico
                                </button>
                                <button
                                    type="button"
                                    className="flex-1 rounded-full border border-[#E5E7EB] bg-white px-4 py-3 text-[15px] font-[Montserrat] text-[#374151]"
                                >
                                    🇺🇸 USA
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <label className="space-y-1.5">
                                <span className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                    Quantity:
                                </span>
                                <input
                                    type="text"
                                    defaultValue="1,000"
                                    readOnly
                                    className="w-full rounded-[14px] border border-[#D1D5DB] px-4 py-3 text-[18px] font-[Montserrat] text-[#111827] shadow-inner"
                                />
                            </label>

                            <div className="space-y-1.5">
                                <span className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                    Total:
                                </span>
                                <div className="flex items-center justify-between rounded-[14px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-[18px] font-[Montserrat] text-[#111827]">
                                    <span>$ 500 MXN</span>
                                    <span className="text-[14px] text-[#6B7280]">Real</span>
                                </div>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="w-full rounded-full bg-[#22C55E] px-4 py-4 text-center text-[18px] font-[Montserrat] font-semibold text-white shadow-md"
                        >
                            Add to cart
                        </button>
                    </section>
                </div>
            </div>
        </FullScreenDialog>
    );
}

export { AddingServiceDialog }