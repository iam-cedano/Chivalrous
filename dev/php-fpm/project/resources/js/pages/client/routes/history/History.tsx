import { JSX, ReactNode, useCallback } from "react";
import { Header } from "../home/components/header/Header";
import { Hambuger } from "../home/components/header/Hambuger";
import { Balance } from "../home/components/header/Balance";
import { Account } from "../home/components/header/Account";
import { SearchInput } from "../home/components/shopping/SearchInput";
import Select, { SingleValue, StylesConfig } from "react-select";
import TextMagic from "@/functions/TextMagic";

enum OrderStatus {
    PENDIENT,
    DELIVERED,
    IN_PROGRESS,
    CANCELLED,
};

type FilterOption = {
    value: string;
    label: string;
};

type OrderProps = {
    status: OrderStatus;
    orderNumber: string;
    serviceName: string;
    socialMediaLogo: string;
    url: string;
    isLink: boolean;
    quantity: number;
    price: number;
};

const filterForServices: FilterOption[] = [
    { value: 'everything', label: '••• Everything' },
];

const filterForStatus: FilterOption[] = [
    { value: 'status', label: 'Status' }
]

const filterForDate: FilterOption[] = [
    { value: 'date', label: 'Date' }
]

const filterSelectStyles: StylesConfig<FilterOption, false> = {
    control: (base) => ({
        ...base,
        borderRadius: '9999px',
        border: '1px solid #E5E7EB',
        boxShadow: 'none',
        minHeight: '36px',
        cursor: 'pointer',
        '&:hover': {
            borderColor: '#E5E7EB',
        },
    }),
    valueContainer: (base) => ({
        ...base,
        padding: '0 12px',
    }),
    singleValue: (base) => ({
        ...base,
        fontSize: '13px',
        color: '#374151',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    dropdownIndicator: (base) => ({
        ...base,
        padding: '0 8px 0 0',
        color: '#9CA3AF',
        '&:hover': {
            color: '#9CA3AF',
        },
    }),
    menu: (base) => ({
        ...base,
        borderRadius: '8px',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    }),
    option: (base, state) => ({
        ...base,
        fontSize: '13px',
        backgroundColor: state.isSelected ? '#F3F4F6' : state.isFocused ? '#F9FAFB' : 'white',
        color: '#374151',
        cursor: 'pointer',
        '&:active': {
            backgroundColor: '#F3F4F6',
        },
    }),
    input: (base) => ({
        ...base,
        fontSize: '13px',
        color: '#374151',
    })
};

const filterSelectStylesForImages: StylesConfig<FilterOption, false> = {
    ...filterSelectStyles,
    input: (base) => ({
        ...base,
        fontSize: '13px',
        color: '#374151',
        marginLeft: '23px'
    })
};

function FilterSelect({
    isSearchable,
    options,
    defaultValue,
    onChange
}: {
    isSearchable: boolean;
    options: FilterOption[];
    defaultValue?: FilterOption;
    onChange?: (option: SingleValue<FilterOption>) => void;
}) {
    return (
        <Select<FilterOption, false>
            options={options}
            defaultValue={defaultValue || options[0]}
            onChange={onChange}
            styles={filterSelectStyles}
            isSearchable={isSearchable}
        />
    );
}

function FilterSelectWithImages({
    isSearchable,
    options,
    defaultValue,
    onChange
}: {
    isSearchable: boolean;
    options: FilterOption[];
    defaultValue?: FilterOption;
    onChange?: (option: SingleValue<FilterOption>) => void;
}) {
    return (
        <Select<FilterOption, false>
            options={options}
            defaultValue={defaultValue || options[0]}
            onChange={onChange}
            styles={filterSelectStylesForImages}
            isSearchable={isSearchable}
        />
    );
}

function Order({ status, orderNumber, serviceName, socialMediaLogo, url, isLink, quantity, price }: OrderProps) {

    const getStatusElement = useCallback(() => {
        switch (status) {
            case OrderStatus.PENDIENT:
                return (
                    <div className="flex bg-[#FFB041] rounded-[5px] px-2 text-center">
                        <span className="font-[Montserrat] text-white text-[15px]">Pendient</span>
                    </div>
                )
            case OrderStatus.DELIVERED:
                return (
                    <div className="flex bg-[#3CA252] rounded-[5px] px-2 text-center">
                        <span className="font-[Montserrat] text-white text-[15px]">Delivered</span>
                    </div>
                )
            case OrderStatus.IN_PROGRESS:
                return (
                    <div className="flex bg-[#6590ED] rounded-[5px] px-2 text-center whitespace-nowrap">
                        <span className="font-[Montserrat] text-white text-[15px]">In Progress</span>
                    </div>
                )
            case OrderStatus.CANCELLED:
                return (
                    <div className="flex bg-[#FF0000] rounded-[5px] px-2 text-center">
                        <span className="font-[Montserrat] text-white text-[15px]">Cancelled</span>
                    </div>
                )
        };
    }, [status])

    return (
        <div className="border-b-[0.5px] border-b-[#E3E3E3] flex flex-row px-2 py-2.5 gap-2">

            <img
                src={socialMediaLogo}
                alt="Service Logo"
                className="block size-[60px]"
            />

            <div className="flex flex-col gap-0.5 w-full overflow-hidden">
                <span className="font-[Montserrat] font-bold text-black">{serviceName} - #{orderNumber}</span>

                <div className="flex justify-between w-full">
                    <span className="font-[Montserrat] text-black truncate">{isLink ? '🔗' : '👤'} {TextMagic.formatURL(url)}</span>

                    {getStatusElement()}
                </div>

                <div className="flex flex-row gap-1.5">
                    <span className="font-[Montserrat] text-[14px]">Quantity: <span className="font-bold text-[14px]">{quantity.toLocaleString()}</span></span>
                    <span className="font-[Montserrat] text-[14px]">Price: <span className="font-bold text-[14px]">${price.toLocaleString()} MXN</span></span>
                </div>
            </div>

        </div>
    );
}

type OrderGroupProps = {
    date: string;
    children: ReactNode;
};

function OrderGroup({ date, children }: OrderGroupProps) {
    return (
        <div className="rounded-xs mt-5 bg-white">
            <header className="border-b-[0.5px] p-2 border-b-[#E3E3E3]">
                <span className="font-[Montserrat]">{date}</span>
            </header>
            {children}
        </div>
    );
}

function OrderDivider() {
    return <hr className="my-4 border-t border-[#E3E3E3]" />;
}

function Searcher() {
    return (
        <div className="rounded-[10px] py-4 bg-white">

            <header>
                <div className="max-w-[180px] mx-auto p-1 bg-black text-center rounded-[10px]">
                    <span className="font-[Montserrat] text-[18px] font-bold text-white">History</span>
                </div>
            </header>

            <div className="mt-5 mx-5">
                <SearchInput
                    onInput={() => console.info('Type!')}
                    className="flex w-full gap-[9px] p-2.5 border border-[#F3F3F3]"
                />
            </div>

            <div className="flex gap-2 mt-4 mx-5">

                <div className="w-[200px]">
                    <FilterSelectWithImages isSearchable={true} options={filterForServices} />
                </div>

                <div className="w-[140px]">
                    <FilterSelect isSearchable={false} options={filterForStatus} />
                </div>

                <div className="w-[140px]">
                    <FilterSelect isSearchable={false} options={filterForDate} />
                </div>

            </div>

        </div>
    );
}

function History(): JSX.Element {
    return (
        <div className="p-3 pb-[60px]">
          
            <Header />

            <Searcher />

            <div className="pb-7">

                <OrderGroup date="17 november 2025">
                    <Order
                        status={OrderStatus.PENDIENT}
                        orderNumber="432552"
                        serviceName="TikTok Followers"
                        socialMediaLogo="/build/assets/services/3/logo.webp"
                        url="Oscar Cedano's account"
                        isLink={false}
                        quantity={1000}
                        price={50025}
                    />

                    <Order
                        status={OrderStatus.DELIVERED}
                        orderNumber="123456"
                        serviceName="Facebook Likes"
                        socialMediaLogo="/build/assets/services/2/logo.webp"
                        url="https://www.tiktok.com/@morena_simx/video/7577229018190171412"
                        isLink={true}
                        quantity={5000}
                        price={12500}
                    />
                </OrderGroup>



                <OrderGroup date="16 november 2025">
                    <Order
                        status={OrderStatus.IN_PROGRESS}
                        orderNumber="789012"
                        serviceName="Instagram Followers"
                        socialMediaLogo="/build/assets/services/1/logo.webp"
                        url="https://www.instagram.com/p/ABC123xyz/"
                        isLink={true}
                        quantity={2500}
                        price={35000}
                    />

                    <Order
                        status={OrderStatus.PENDIENT}
                        orderNumber="789013"
                        serviceName="TikTok Views"
                        socialMediaLogo="/build/assets/services/3/logo.webp"
                        url="https://www.tiktok.com/@user123/video/1234567890"
                        isLink={true}
                        quantity={10000}
                        price={8500}
                    />
                </OrderGroup>

                <OrderGroup date="15 november 2025">
                    <Order
                        status={OrderStatus.DELIVERED}
                        orderNumber="654321"
                        serviceName="YouTube Subscribers"
                        socialMediaLogo="/build/assets/services/4/logo.webp"
                        url="Mi Canal Principal"
                        isLink={false}
                        quantity={500}
                        price={75000}
                    />

                    <Order
                        status={OrderStatus.CANCELLED}
                        orderNumber="654322"
                        serviceName="Facebook Page Likes"
                        socialMediaLogo="/build/assets/services/2/logo.webp"
                        url="Negocio Local MX"
                        isLink={false}
                        quantity={3000}
                        price={22000}
                    />

                    <Order
                        status={OrderStatus.DELIVERED}
                        orderNumber="654323"
                        serviceName="Instagram Likes"
                        socialMediaLogo="/build/assets/services/1/logo.webp"
                        url="https://www.instagram.com/reel/XYZ789abc/"
                        isLink={true}
                        quantity={5000}
                        price={4500}
                    />
                </OrderGroup>

                <OrderGroup date="14 november 2025">
                    <Order
                        status={OrderStatus.IN_PROGRESS}
                        orderNumber="111222"
                        serviceName="TikTok Likes"
                        socialMediaLogo="/build/assets/services/3/logo.webp"
                        url="https://www.tiktok.com/@influencer_mx/video/9876543210"
                        isLink={true}
                        quantity={20000}
                        price={18000}
                    />
                </OrderGroup>

                <OrderGroup date="13 november 2025">
                    <Order
                        status={OrderStatus.DELIVERED}
                        orderNumber="333444"
                        serviceName="Instagram Comments"
                        socialMediaLogo="/build/assets/services/1/logo.webp"
                        url="https://www.instagram.com/p/DEF456ghi/"
                        isLink={true}
                        quantity={100}
                        price={15000}
                    />

                    <Order
                        status={OrderStatus.DELIVERED}
                        orderNumber="333445"
                        serviceName="YouTube Views"
                        socialMediaLogo="/build/assets/services/4/logo.webp"
                        url="https://www.youtube.com/watch?v=abc123XYZ"
                        isLink={true}
                        quantity={50000}
                        price={42000}
                    />
                </OrderGroup>

                <OrderGroup date="12 november 2025">
                    <Order
                        status={OrderStatus.PENDIENT}
                        orderNumber="555666"
                        serviceName="Facebook Followers"
                        socialMediaLogo="/build/assets/services/2/logo.webp"
                        url="Tienda Online MX"
                        isLink={false}
                        quantity={1500}
                        price={28000}
                    />

                    <Order
                        status={OrderStatus.IN_PROGRESS}
                        orderNumber="555667"
                        serviceName="TikTok Followers"
                        socialMediaLogo="/build/assets/services/3/logo.webp"
                        url="Cuenta de Entretenimiento"
                        isLink={false}
                        quantity={8000}
                        price={95000}
                    />

                    <Order
                        status={OrderStatus.CANCELLED}
                        orderNumber="555668"
                        serviceName="Instagram Followers"
                        socialMediaLogo="/build/assets/services/1/logo.webp"
                        url="https://www.instagram.com/brand_official/"
                        isLink={true}
                        quantity={10000}
                        price={120000}
                    />
                </OrderGroup>
            </div>
        </div>
    );
}

export { History };