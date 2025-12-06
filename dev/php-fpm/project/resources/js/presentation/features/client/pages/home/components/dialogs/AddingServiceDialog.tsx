import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import type { FormEvent, JSX } from "react";
import { FullScreenDialog } from "@/presentation/shared/components";
import { TextMagic, EmojiTool, CountryDictionary, Calculator } from "@/core/utils";
import { ServiceDialogDTO, ServiceDetailDTO } from "@/data/dto";
import DialogContext from "../../../../contexts/DialogContext";
import Select, { components } from 'react-select';

type SourceService = {
    id?: number;
    name?: string;
    service_id?: number;
    country_abbreviation?: string;
    price_per_thousand?: number;
    status?: number;
    warranty?: number;
    warranty_text?: string;
};

type AddingServiceProps = {
    service: ServiceDialogDTO;
};

type ServiceInformationProps = {
    title: string;
    description: string;
    details: ServiceDetailDTO[];
};

type QualityProps = {
    id: number;
    icon: string;
    label: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
};

type CountryProps = {
    id: number;
    flag: string;
    name: string;
    countryAbbreviation: string;
    selectedCountryAbbreviation: string;
    onClick: () => void;
};

type GuaranteeProps = {
    id: number;
    content: string;
    onClick: () => void;
    isSelected: boolean;
};

function Quality({ id, icon, label, description, isSelected, onClick }: QualityProps) {
    return (
        <li key={id} className="space-y-3">
            <label className="block">
                <input
                    type="radio"
                    name="quality"
                    value={id}
                    className="sr-only"
                    checked={isSelected}
                    onChange={onClick}
                    required
                />
                <div
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${isSelected
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
                        className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${isSelected
                            ? "border-white bg-white"
                            : "border-[#D1D5DB] bg-white"
                            }`}
                    >
                        <span
                            className={`size-3 rounded-full transition-colors duration-200 ${isSelected ? "bg-[#111827]" : "bg-transparent"
                                }`}
                        />
                    </span>
                </div>
            </label>
        </li>
    );
}

function Country({ id, flag, name, countryAbbreviation, selectedCountryAbbreviation, onClick }: CountryProps) {
    const isSelected = selectedCountryAbbreviation === countryAbbreviation;

    return (
        <li key={id} className="w-full">
            <label className="block">
                <input
                    type="radio"
                    name="country"
                    value={id}
                    className="sr-only"
                    checked={isSelected}
                    onChange={onClick}
                    required
                />
                <div
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-colors duration-200 ${isSelected
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
                        className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${isSelected
                            ? "border-white bg-white"
                            : "border-[#D1D5DB] bg-white"
                            }`}
                    >
                        <span
                            className={`size-3 rounded-full transition-colors duration-200 ${isSelected ? "bg-[#111827]" : "bg-transparent"
                                }`}
                        />
                    </span>
                </div>
            </label>
        </li>
    );
}

function Guarantee({ id, content, onClick, isSelected }: GuaranteeProps) {
    return (
        <li key={id} className="space-y-3">
            <label className="block">
                <input
                    type="radio"
                    name="quality"
                    value={id}
                    className="sr-only"
                    checked={isSelected}
                    onChange={onClick}
                    required
                />
                <div
                    className={`flex w-full items-center justify-between rounded-2xl border px-3 py-4 text-left transition-colors duration-200 ${isSelected
                        ? "border-[#111827] bg-[#111827] text-white shadow-lg"
                        : "border-[#E5E7EB] bg-white text-[#1F2937] hover:border-[#111827]/30 hover:bg-[#F9FAFB]"
                        }`}
                >
                    <span>
                        <span className="font-[Montserrat]">{content}</span>
                    </span>
                    <span
                        aria-hidden="true"
                        className={`grid size-6 place-items-center rounded-full border transition-colors duration-200 ${isSelected
                            ? "border-white bg-white"
                            : "border-[#D1D5DB] bg-white"
                            }`}
                    >
                        <span
                            className={`size-3 rounded-full transition-colors duration-200 ${isSelected ? "bg-[#111827]" : "bg-transparent"
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
    const purifiedDetails = details.map(detail => TextMagic.transformText(detail.content));

    const detailsAsBulletpoints = purifiedDetails
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

function AccountSelector({ image, onChange, onAccountChange }: { image: string; onChange: (isAddAccount: boolean) => void; onAccountChange: (accountId: string) => void }) {
    const options = [
        { value: 'add_account', label: "Add account", image: '/build/assets/plus-symbol.webp' },
        { value: 'account1', label: "Oscar Cedano's Account - /mrc...", image },
        { value: 'account2', label: "John Doe's Account - /johndoe", image },
        { value: 'account3', label: "Jane Smith's Account - /janesmith", image },
        { value: 'account4', label: "Alex Johnson's Account - /alexj", image },
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
            onChange={(option) => {
                onChange(option?.value === 'add_account');
                onAccountChange(option?.value || 'account1');
            }}
        />
    );
}

function AddingServiceDialog({ service }: AddingServiceProps) {
    const { handleClosingDialog } = useContext(DialogContext);
    const namesOfQualities: string[] = useMemo(() => Object.keys(service.sources), [service.sources]);
    const [selectedQuality, setSelectedQuality] = useState<string>(namesOfQualities[0]);
    const namesOfCountries: string[] = useMemo(() => Object.keys(service.sources[selectedQuality]), [service.sources, selectedQuality]);
    const [selectedCountryAbbreviation, setSelectedCountryAbbreviation] = useState<string>(namesOfCountries[0]);
    const [selectedWarranty, setSelectedWarranty] = useState<SourceService>(service.sources[selectedQuality][selectedCountryAbbreviation][0]);

    const quantityInputRef = useRef<HTMLInputElement>(null);
    const [price, setPrice] = useState<number>(0);
    const [showAccountInputs, setShowAccountInputs] = useState<boolean>(false);
    const [selectedAccount, setSelectedAccount] = useState<string>('account1');

    useEffect(() => {
        const input = quantityInputRef.current;
        if (input && selectedWarranty.price_per_thousand !== undefined) {
            const quantity = input.valueAsNumber || 1000;
            setPrice(Calculator.getPriceOfService(quantity, selectedWarranty.price_per_thousand));
        }
    }, [selectedWarranty]);

    const qualitiesJSXElements = useMemo(function () {
        return namesOfQualities.map((name, index) => {
            const id = index;
            const icon = EmojiTool.extractEmojis(name)[0];
            const label = name.substring(1);
            const description = 'lorem impsum dolor amet, cotetur adipiscing';
            const onClick = () => {
                setSelectedQuality(name);
                const newSourceService = service.sources[name];
                const newNamesOfCountries = Object.keys(newSourceService);
                const newWarranties = newSourceService[newNamesOfCountries[0]];
                setSelectedCountryAbbreviation(newNamesOfCountries[0]);
                setSelectedWarranty(newWarranties[0]);
            };

            const isSelected = selectedQuality === name;
            const data: QualityProps = { id, icon, label, description, isSelected, onClick };

            return <Quality key={`quality-${id}`} {...data} />;
        });
    }, [namesOfQualities, selectedQuality]);

    const countriesJSXElements = useMemo(() => namesOfCountries.map((countryAbbreviation: string, id: number) => {
        const [name, flag] = CountryDictionary.getCountry(countryAbbreviation);
        const onClick = () => {
            setSelectedCountryAbbreviation(countryAbbreviation);
            const newWarranties = service.sources[selectedQuality][countryAbbreviation];
            setSelectedWarranty(newWarranties[0]);
        };

        const props: CountryProps = { id, name, flag, countryAbbreviation, selectedCountryAbbreviation, onClick };

        return (
            <Country key={`country-${id}`} {...props} />
        );
    }), [namesOfCountries, selectedCountryAbbreviation]);

    const warrantiesJSXElements: JSX.Element[] = useMemo(() =>
        service.sources[selectedQuality][selectedCountryAbbreviation].map(
            (warrantyService: SourceService) => <Guarantee
                key={warrantyService.id ?? 0} id={warrantyService.id ?? 0}
                onClick={() => setSelectedWarranty(warrantyService)}
                content={warrantyService.warranty_text ?? ''}
                isSelected={warrantyService.id == selectedWarranty.id}
            />), [service.sources, selectedQuality, selectedCountryAbbreviation, selectedWarranty]);

    const handleOnInput = () => {
        const input = quantityInputRef.current;

        if (input == null || selectedWarranty.price_per_thousand == undefined) {
            return;
        }

        if (input.value == '') {
            setPrice(0);
            return;
        }

        setPrice(Calculator.getPriceOfService(input.valueAsNumber, selectedWarranty.price_per_thousand));
    };

    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const formValues: Record<string, any> = {};

        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        console.group("AddingServiceDialog form submission");
        console.log("Selected Account ID:", selectedAccount);
        console.log("Quality:", selectedQuality);
        console.log("Country:", selectedCountryAbbreviation);
        console.log("Warranty ID:", selectedWarranty.id);
        console.log("Form Values:", formValues);
        console.log("\nAll Values:", {
            account_id: selectedAccount,
            quality: selectedQuality,
            country: selectedCountryAbbreviation,
            warranty_id: selectedWarranty.id,
            ...formValues
        });
        console.groupEnd();
    };

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
                    <ServiceInformation title={service.name} description={service.long_description} details={service.details} />

                    <label className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Account:
                    </label>
                    <AccountSelector
                        image={`/build/assets/services/${service.id}/logo.webp`}
                        onChange={setShowAccountInputs}
                        onAccountChange={setSelectedAccount}
                    />

                    {showAccountInputs && (
                        <>
                            <label className="space-y-1.5">
                                <span className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                    Username:
                                </span>
                                <input
                                    type="text"
                                    name="account_username"
                                    placeholder="Enter username"
                                    className="w-full rounded-[14px] border border-[#D1D5DB] px-4 py-3 text-[15px] font-[Montserrat] text-[#111827] shadow-sm"
                                    required
                                />
                            </label>

                            <label className="space-y-1.5">
                                <span className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                    Profile URL:
                                </span>
                                <input
                                    type="url"
                                    name="account_url"
                                    placeholder="https://..."
                                    className="w-full rounded-[14px] border border-[#D1D5DB] px-4 py-3 text-[15px] font-[Montserrat] text-[#111827] shadow-sm"
                                    required
                                />
                            </label>
                        </>
                    )}

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Quality:
                    </p>

                    <ul className="space-y-4">
                        {qualitiesJSXElements}
                    </ul>

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Country:
                    </p>
                    <ul className="grid grid-cols-2 gap-6">
                        {countriesJSXElements}
                    </ul>

                    <p className="text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                        Guarantees:
                    </p>

                    <ul className="grid grid-cols-2 gap-1.5">
                        {warrantiesJSXElements}
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
                                onInput={handleOnInput}
                                ref={quantityInputRef}
                                className="w-full scroll-mt-32 rounded-[14px] border border-[#D1D5DB] px-4 py-3 text-[18px] font-[Montserrat] text-[#111827] shadow-inner"
                                required
                            />
                        </label>

                        <div className="space-y-1.5">
                            <span className="block text-[15px] font-semibold font-[Montserrat] text-[#111827]">
                                Total:
                            </span>
                            <div className="flex items-center justify-between rounded-[14px] border border-[#D1D5DB] bg-[#F9FAFB] px-4 py-3 text-[18px] font-[Montserrat] text-[#111827]">
                                <span>$ {price} MXN</span>
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

export { AddingServiceDialog };
