import { useCallback, useContext, useMemo, useState } from "react";
import type { FormEvent, FocusEvent, JSX } from "react";
import FullScreenDialog from "@/pages/shared/components/FullScreenDialog";
import TextMagic from "@/functions/TextMagic";
import DialogContext from "../../contexts/DialogContext";
import ServiceDialogResponse from "../../api/res/ServiceDialogResponse";
import SourceService from "../../api/res/SourceService";
import * as EmojiTool from "@/functions/EmojiTool";
import CountryDictionary from "@/functions/CountryDictionary";
import SourceServiceResponse from "../../api/res/SourceServiceResponse";
import Select, { components } from 'react-select';

type AddingServiceProps = {
    service: ServiceDialogResponse;
};

type ServiceInformationProps = {
    title: string;
    description: string;
    details: string;
};

type QualityProps = {
    id: number;
    icon: string;
    label: string;
    description: string;
}

type CountryProps = {
    serviceID: number;
    flag: string;
    name: string;
};

function Quality({ id, icon, label, description }: QualityProps) {
    return (
        <li key={id} className="space-y-3">
            <label className="block">
                <input
                    type="radio"
                    name="quality"
                    value={id}
                    className="sr-only"
                    checked={false}
                    onChange={() => console.info('on change')}
                    required
                />
                <div
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${false
                        ? "border-[#111827] bg-[#111827] text-white shadow-lg"
                        : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#111827]/30 hover:bg-[#F9FAFB]"
                        }`}
                >
                    <span className="flex items-center gap-2 leading-[1.6]">
                        <span aria-hidden>{icon}</span>
                        <span className="font-[Montserrat]">{label.substring(1)}</span>
                    </span>
                    <span
                        aria-hidden="true"
                        className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${false
                            ? "border-white bg-white"
                            : "border-[#D1D5DB] bg-white"
                            }`}
                    >
                        <span
                            className={`size-3 rounded-full transition-colors duration-200 ${false ? "bg-[#111827]" : "bg-transparent"
                                }`}
                        />
                    </span>
                </div>
            </label>

            {false ? (
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
                        {description}
                    </p>
                </div>
            ) : null}
        </li>
    );
}

function Country({serviceID, flag, name}: CountryProps) {
    return (
        <li key={serviceID} className="w-full">
            <label className="block">
                <input
                    type="radio"
                    name="country"
                    value={serviceID}
                    className="sr-only"
                    checked={false}
                    onChange={() => console.info('on Change Country')}
                    required
                />
                <div
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${false
                        ? "border-[#111827] bg-[#111827] text-white shadow-lg"
                        : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#111827]/30 hover:bg-[#F9FAFB]"
                        }`}
                >
                    <span className="flex items-center gap-3 text-[15px] leading-[1.6]">
                        <span aria-hidden>{flag}</span>
                        <span className="font-[Montserrat]">{name}</span>
                    </span>
                    <span
                        aria-hidden="true"
                        className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${false
                            ? "border-white bg-white"
                            : "border-[#D1D5DB] bg-white"
                            }`}
                    >
                        <span
                            className={`size-3 rounded-full transition-colors duration-200 ${false ? "bg-[#111827]" : "bg-transparent"
                                }`}
                        />
                    </span>
                </div>
            </label>
        </li>
    );
}

function ServiceInformation({ title, description, details }: ServiceInformationProps) {

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
                    {title}
                </h3>
            </header>

            <p className="text-[#4B5563] text-[15px] leading-[1.6]" dangerouslySetInnerHTML={{ __html: purifiedDescription }}></p>

            <ul className="space-y-1.5 text-[15px] text-[#1F2937]">
                {detailsAsBulletpoints}
            </ul>
        </>
    );
}

function AccountSelector({ image }: { image: string }) {
    const options = [
        { value: 'account1', label: "Oscar Cedano's Account - /mrc...", image },
        { value: 'account2', label: "John Doe's Account - /johndoe", image },
        { value: 'account3', label: "Jane Smith's Account - /janesmith", image },
        { value: 'account4', label: "Alex Johnson's Account - /alexj", image }
    ];

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            border: '1px solid #D1D5DB',
            borderRadius: '14px',
            backgroundColor: 'white',
            boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            padding: '12px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
            fontSize: '15px',
            fontFamily: 'Montserrat',
            color: '#111827',
            minHeight: 'auto',
        }),
        valueContainer: (provided: any) => ({
            ...provided,
            padding: 0,
        }),
        input: (provided: any) => ({
            ...provided,
            fontSize: '15px',
            fontFamily: 'Montserrat',
            color: '#111827',
            marginLeft: '50px',
            textOverflow: 'ellipsis'
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        menu: (provided: any) => ({
            ...provided,
            borderRadius: '14px',
            border: '1px solid #D1D5DB',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -2px rgb(0 0 0 / 0.05)',
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#111827' : state.isFocused ? '#B6B8BA' : 'white',
            color: state.isSelected ? 'white' : '#1F2937',
            cursor: 'pointer',
            padding: '12px 16px',
        }),
    };

    const CustomSingleValue = (props: any) => (
        <components.SingleValue {...props}>
            <span className="flex items-center gap-3">
                <img className="size-9 rounded-full" src={props.data.image} alt="Selected account" />
                <span>{props.data.label}</span>
            </span>
        </components.SingleValue>
    );

    const CustomOption = (props: any) => (
        <components.Option {...props}>
            <span className="flex items-center gap-3">
                <img className="size-9 rounded-full" src={props.data.image} alt="Account" />
                <span>{props.data.label}</span>
            </span>
        </components.Option>
    );

    const CustomDropdownIndicator = (props: any) => (
        <components.DropdownIndicator {...props}>
            <img className="size-5" src="/build/assets/down-arrow.webp" alt="Change account" />
        </components.DropdownIndicator>
    );

    const CustomNoOptionsMessage = (props: any) => (
        <components.NoOptionsMessage {...props}>
            No accounts available.
        </components.NoOptionsMessage>
    );

    return (
        <Select
            options={options}
            defaultValue={options[0]}
            components={{ SingleValue: CustomSingleValue, Option: CustomOption, DropdownIndicator: CustomDropdownIndicator, NoOptionsMessage: CustomNoOptionsMessage }}
            styles={customStyles}
            menuPortalTarget={document.body}
        />
    );
}

function AddingServiceDialog({ service }: AddingServiceProps) {
    const { handleClosingDialog } = useContext(DialogContext);
    const namesOfQualities: string[] = Object.keys(service.sources);
    const sources: SourceServiceResponse = service.sources;

    const mockupDetails: string = `|**Lorem** ipsum dolor **sit** amet, 
    cotetur adipiscing|nisi ut aliquip ex ea
     commodo consequat. Duis aute irure dolor in reprehenderit in 
     voluptate velit esse cillum dolore eu fugiat nulla pariatur`;

    if (namesOfQualities.length == 0) {
        handleClosingDialog();

        return;
    }

    const [selectedQuality, setSelectedQuality] = useState<string>(namesOfQualities[0]);
    const sourcesServices: SourceService[]  = service.sources[selectedQuality]; 

    const qualitiesJSXElements: JSX.Element[] = useMemo(() => {
        let key = 1;

        return namesOfQualities.map((name, index) => {
            const id = key;
            const icon = TextMagic.extractEmojis(name)[0];
            const label = name.substring(1);
            const description = 'lorem impsum dolor amet, cotetur adipiscing';
            
            const data: QualityProps = { id, icon, label, description };

            key += 1;

            return <Quality {...data} />
        });
    }, []);

    const countriesJSXElements: JSX.Element[] = sourcesServices.map((source: SourceService) => {
        const serviceID = source.id;
        const [name, flag] = CountryDictionary.getCountry(source.country_abbreviation);

        const props: CountryProps = {serviceID, name, flag};

        return (
            <Country {...props} />
        );
    });

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

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
                    width="640"
                    height="426"
                    src={`/build/assets/services/${service.id}/banner.webp`}
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

                    <label className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Account:
                    </label>
                    <AccountSelector image={`/build/assets/services/${service.id}/logo.webp`} />

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Quality:
                    </p>

                    <ul className="space-y-4">
                        { qualitiesJSXElements }
                    </ul>

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Country:
                    </p>
                    <ul className="grid grid-cols-2 gap-6">
                        { countriesJSXElements }
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