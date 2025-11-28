import { JSX, useCallback } from "react";
import { Header } from "../home/components/header/Header";
import { Hambuger } from "../home/components/header/Hambuger";
import { Balance } from "../home/components/header/Balance";
import { Account } from "../home/components/header/Account";
import { SearchInput } from "../home/components/shopping/SearchInput";
import Select, { SingleValue, StylesConfig } from "react-select";

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
    status: OrderStatus
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

function Order({status}: OrderProps) {

    const getStatusElement = useCallback(() => {
        switch(status) {
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
                <div className="flex bg-[#6590ED] rounded-[5px] px-2 text-center">
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
                src="/build/assets/services/3/logo.webp"
                alt="TikTok Logo"
                className="block size-[60px]"
            />
            
            <div className="flex flex-col gap-0.5 w-full overflow-hidden">
                <span className="font-[Montserrat] font-bold text-black">TikTok Followers - #432552</span>
                
                <div className="flex justify-between w-full">
                    <span className="font-[Montserrat] text-black">👤 Oscar Cedano's account</span>

                    { getStatusElement() }
                </div>
                
                <div className="flex flex-row gap-1.5">
                    <span className="font-[Montserrat] text-[14px]">Quantity: <span className="font-bold text-[14px]">1000</span></span>
                    <span className="font-[Montserrat] text-[14px]">Price: <span className="font-bold text-[14px]">$50,025 MXN</span></span>
                </div>
            </div>

        </div>
    );
}

function History(): JSX.Element {
    return (
        <div className="p-3">
                <Header>
                    <Hambuger />

                    <div className="flex gap-2.5">
                        <Balance />
                        <Account />
                    </div>
                </Header>

                <div className="py-7">
                   
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

                    <div className="rounded-xs mt-5 bg-white ">
                        <header className="border-b-[0.5px] p-2 border-b-[#E3E3E3]">
                            <span className="font-[Montserrat]">17 november 2025</span>
                        </header>

                        <Order status={OrderStatus.PENDIENT} />
                    
                    </div>

                </div>
        </div>
    );
}

export { History };