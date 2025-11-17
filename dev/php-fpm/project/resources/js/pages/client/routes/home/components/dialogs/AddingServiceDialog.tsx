import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { FormEvent, FocusEvent } from "react";
import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";
import SingleServiceResponse from "../../api/res/SingleServiceResponse";
import TextMagic from "@/functions/TextMagic.function";
import DialogContext from "../../contexts/DialogContext";

type AddingServiceProps = {
    service: SingleServiceResponse;
};

type QualityOption = {
    id: string;
    label: string;
    icon: string;
    description: string;
};

type CountryOption = {
    id: string;
    label: string;
    flag: string;
};

type ServiceInformationProps = {
    title: string;
    description: string;
    details: string;
};

function ServiceInformation ({title, description, details}: ServiceInformationProps) {
    
    const purifiedDescription = TextMagic.transformText(description);
    const purifiedAndParsedDetails = TextMagic.transformText(details);

    const detailsAsBulletpoints = purifiedAndParsedDetails
        .split('|') 
        .filter(Boolean)
        .map((detail, index) => (
            <li key={`service-detail-${index}`} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[3px] text-[10px]">•</span>
                <span className="leading-normal" dangerouslySetInnerHTML={{ __html: detail }} />
            </li>
        ));

    return (
        <>
            <header className="space-y-2">
                <h3 className="text-[26px] font-[Montserrat] font-semibold text-black leading-[1.15]">
                    { title }
                </h3>
            </header>

            <p className="text-[#4B5563] text-[15px] leading-[1.6]" dangerouslySetInnerHTML={{__html: purifiedDescription}}></p>

            <ul className="space-y-1.5 text-[15px] text-[#1F2937]">
                {detailsAsBulletpoints}
            </ul>
        </>
    );
}

function AddingServiceDialog({ service }: AddingServiceProps) {
    const { handleClosingDialog } = useContext(DialogContext);
    const bannerImage = service.banner_uri || "/build/assets/services/1/banner.webp";

    const mockupDetails = `|**Lorem** ipsum dolor **sit** amet, cotetur adipiscing|nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur`;
    const qualityOptions = useMemo<QualityOption[]>(() => ([
        {
            id: "real-followers",
            label: "Real Followers",
            icon: "🌟",
            description: service.long_description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            id: "bot-followers",
            label: "Bot Follower",
            icon: "🤖",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ]), [service.long_description]);

    const [selectedQualityId, setSelectedQualityId] = useState<string>(
        qualityOptions[0]?.id || ""
    );

    useEffect(() => {
        if (qualityOptions.length === 0) {
            setSelectedQualityId("");
            return;
        }

        setSelectedQualityId((current) => (
            qualityOptions.some((option) => option.id === current)
                ? current
                : qualityOptions[0].id
            ));
        }, [qualityOptions]);

    const countryOptions = useMemo<CountryOption[]>(() => ([
        {
            id: "country-mx",
            label: "Mexico",
            flag: "🇲🇽"
        },
        {
            id: "country-us",
            label: "USA",
            flag: "🇺🇸"
        },
        {
            id: "country-br",
            label: "Brazil",
            flag: "🇧🇷"
        }
    ]), []);

    const [selectedCountryId, setSelectedCountryId] = useState<string>(
        countryOptions[0]?.id || ""
    );

    useEffect(() => {
        if (countryOptions.length === 0) {
            setSelectedCountryId("");
            return;
        }

        setSelectedCountryId((current) => (
            countryOptions.some((option) => option.id === current)
                ? current
                : countryOptions[0].id
        ));
    }, [countryOptions]);

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // Log each field so we can validate the payload during testing.
        console.group("AddingServiceDialog form submission (test mode)");
        formData.forEach((value, key) => {
            console.log(`${key}:`, value);
        });
        console.groupEnd();
    };

    const handleFieldFocus = useCallback((event: FocusEvent<HTMLElement>) => {
        if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
            return;
        }

        const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;

        if (!isMobileViewport) {
            return;
        }

        window.requestAnimationFrame(() => {
            event.currentTarget.scrollIntoView({ behavior: "smooth", block: "center" });
        });
    }, []);

    return (
        <FullScreenDialog onClose={handleClosingDialog} title="Adding Service">
            <div>
                    <img
                        className="w-full object-cover"
                        src={bannerImage}
                        alt={`${service.name} banner`}
                    />
            </div>
            <div className="relative w-full min-h-full">
                <form
                    className="flex min-h-full flex-col gap-6 p-5 pb-[calc(79px+20px)]"
                    action="/api/order/"
                    method="post"
                    target="_self"
                    onSubmit={handleFormSubmit}
                >

                    <ServiceInformation title={service.name} description={service.long_description} details={mockupDetails} />

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

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Quality:
                    </p>

                    <ul className="space-y-4">
                        {qualityOptions.map((option) => {
                            const isSelected = option.id === selectedQualityId;

                            return (
                                <li key={option.id} className="space-y-3">
                                    <label className="block">
                                        <input
                                            type="radio"
                                            name="quality"
                                            value={option.id}
                                            className="sr-only"
                                            checked={isSelected}
                                            onChange={() => setSelectedQualityId(option.id)}
                                            required
                                        />
                                        <div
                                            className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${
                                                isSelected
                                                    ? "border-[#111827] bg-[#111827] text-white shadow-lg"
                                                    : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#111827]/30 hover:bg-[#F9FAFB]"
                                            }`}
                                        >
                                            <span className="flex items-center gap-2 leading-[1.6]">
                                                <span aria-hidden>{option.icon}</span>
                                                <span className="font-[Montserrat]">{option.label}</span>
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${
                                                    isSelected
                                                        ? "border-white bg-white"
                                                        : "border-[#D1D5DB] bg-white"
                                                }`}
                                            >
                                                <span
                                                    className={`size-3 rounded-full transition-colors duration-200 ${
                                                        isSelected ? "bg-[#111827]" : "bg-transparent"
                                                    }`}
                                                />
                                            </span>
                                        </div>
                                    </label>

                                    {isSelected ? (
                                        <div className="relative rounded-2xl border border-[#111827]/90 bg-white p-4 text-[#111827] shadow-lg">
                                            <svg
                                                aria-hidden="true"
                                                className="absolute left-8 -top-3 h-3 w-6 text-[#111827]/90"
                                                viewBox="0 0 24 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 0L24 12H0L12 0Z" fill="currentColor" />
                                            </svg>
                                            <svg
                                                aria-hidden="true"
                                                className="absolute left-8 -top-2.5 h-3 w-6 text-white"
                                                viewBox="0 0 24 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M12 0L23 12H1L12 0Z" fill="currentColor" />
                                            </svg>
                                            <p className="text-[14px] leading-[1.6]">
                                                {option.description}
                                            </p>
                                        </div>
                                    ) : null}
                                </li>
                            );
                        })}
                    </ul>

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Country:
                    </p>
                    <ul className="grid grid-cols-2 gap-6">
                        {countryOptions.map((option) => {
                            const isSelected = selectedCountryId === option.id;

                            return (
                                <li key={option.id} className="w-full">
                                    <label className="block">
                                        <input
                                            type="radio"
                                            name="country"
                                            value={option.id}
                                            className="sr-only"
                                            checked={isSelected}
                                            onChange={() => setSelectedCountryId(option.id)}
                                            required
                                        />
                                        <div
                                            className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${
                                                isSelected
                                                    ? "border-[#111827] bg-[#111827] text-white shadow-lg"
                                                    : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#111827]/30 hover:bg-[#F9FAFB]"
                                            }`}
                                        >
                                            <span className="flex items-center gap-3 text-[15px] leading-[1.6]">
                                                <span aria-hidden>{option.flag}</span>
                                                <span className="font-[Montserrat]">{option.label}</span>
                                            </span>
                                            <span
                                                aria-hidden="true"
                                                className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${
                                                    isSelected
                                                        ? "border-white bg-white"
                                                        : "border-[#D1D5DB] bg-white"
                                                }`}
                                            >
                                                <span
                                                    className={`size-3 rounded-full transition-colors duration-200 ${
                                                        isSelected ? "bg-[#111827]" : "bg-transparent"
                                                    }`}
                                                />
                                            </span>
                                        </div>
                                    </label>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="grid grid-cols-2 gap-4">
                        <label className="space-y-1.5">
                            <span className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                Quantity:
                            </span>
                            <input
                                type="number"
                                name="quantity"
                                inputMode="numeric"
                                defaultValue={1000}
                                className="w-full scroll-mt-32 rounded-[14px] border border-[#D1D5DB] px-4 py-3 text-[18px] font-[Montserrat] text-[#111827] shadow-inner"
                                onFocus={handleFieldFocus}
                                required
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
                        type="submit"
                        className="flex w-full gap-2 rounded-full bg-[#22C55E] px-4 py-4 justify-center shadow-md"
                    >
                        <span className="text-[18px] font-[Montserrat] font-semibold text-white">Add To Cart</span>
                        <img src="/build/assets/cart.webp" alt="Tiny cart" className="relative size-5 top-0.5" />
                    </button>
                </form>
            </div>
        </FullScreenDialog>
    );
}

export { AddingServiceDialog }