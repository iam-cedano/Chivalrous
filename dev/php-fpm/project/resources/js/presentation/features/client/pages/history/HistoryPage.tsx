import { JSX, ReactNode, useCallback, useContext, useRef, useState } from "react";
import { Header } from "../home/components/header/Header";
import { SearchInput } from "../home/components/shopping/SearchInput";
import { LoadingOverlay } from "../home/components/loading/LoadingOverlay";
import Select, { SingleValue, StylesConfig } from "react-select";
import { TextMagic } from "@/core/utils";
import ClientContext from "../../contexts/ClientContext";
import { FullScreenDialog } from "@/presentation/shared/components";
import { createContext } from "react";

// Local DialogContext for History page
type HistoryDialogProps = {
    handlerClose: () => void;
};

const HistoryDialogContext = createContext<HistoryDialogProps>({
    handlerClose: () => {
        throw new Error("Not implemented yet.");
    },
});

enum DialogsEnum {
    ORDER_DIALOG
}

enum OrderStatus {
    PENDIENT,
    DELIVERED,
    IN_PROGRESS,
    CANCELLED,
}

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

type OrderResponse = {};

type DialogInformation = {
    status: boolean;
    data: OrderResponse | null;
};

type OrderGroupProps = {
    date: string;
    children: ReactNode;
};

const filterForServices: FilterOption[] = [
    { value: 'everything', label: '••• Everything' },
];

const filterForStatus: FilterOption[] = [
    { value: 'status', label: 'Status' }
];

const filterForDate: FilterOption[] = [
    { value: 'date', label: 'Date' }
];

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
                );
            case OrderStatus.DELIVERED:
                return (
                    <div className="flex bg-[#3CA252] rounded-[5px] px-2 text-center">
                        <span className="font-[Montserrat] text-white text-[15px]">Delivered</span>
                    </div>
                );
            case OrderStatus.IN_PROGRESS:
                return (
                    <div className="flex bg-[#6590ED] rounded-[5px] px-2 text-center whitespace-nowrap">
                        <span className="font-[Montserrat] text-white text-[15px]">In Progress</span>
                    </div>
                );
            case OrderStatus.CANCELLED:
                return (
                    <div className="flex bg-[#FF0000] rounded-[5px] px-2 text-center">
                        <span className="font-[Montserrat] text-white text-[15px]">Cancelled</span>
                    </div>
                );
        }
    }, [status]);

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

function OrderDialog() {
    const { handlerClose } = useContext(HistoryDialogContext);

    return (
        <FullScreenDialog onClose={handlerClose} title="Order">
            <div className="bg-[#F8F8F8] p-4 space-y-4">
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center">
                        <img src="/build/assets/instagram-logo.png" alt="Social Media" className="w-12 h-12" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-2xl">📦</span>
                    <span className="font-[Montserrat] font-semibold text-black">Status:</span>
                    <span className="font-[Montserrat] font-semibold text-white px-3 py-0.5 rounded" style={{ backgroundColor: "#22C55E" }}>
                        Completed
                    </span>
                </div>
            </div>
        </FullScreenDialog>
    );
}

function HistoryPage(): JSX.Element {
    const { user } = useContext(ClientContext);

    const [isDialog, setDialog] = useState<DialogInformation>({
        status: false,
        data: null
    });

    const [isLoading, setIsLoading] = useState(false);

    const dialogSelected = useRef<DialogsEnum | null>(null);

    return (
        <HistoryDialogContext.Provider value={{
            handlerClose: () => {
                dialogSelected.current = null;
                setDialog({
                    data: null,
                    status: false
                });
                console.log('[DialogContext] Closing Dialog');
            },
        }}>
            <LoadingOverlay isVisible={isLoading} />

            {isDialog.status && <OrderDialog />}

            <div className={`p-3 pb-[60px] ${isDialog.status ? 'hidden' : 'block'}`}>
                <Header amount={user?.balance?.amount ?? 0} profile_img_url="/build/assets/srajo.webp" />

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
                    </OrderGroup>
                </div>
            </div>
        </HistoryDialogContext.Provider>
    );
}

export { HistoryPage };
