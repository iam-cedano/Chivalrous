import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { Service } from "@/domain/entities";
import { serviceRepository } from "@/data/repositories";
import DialogContext from "../../../../contexts/DialogContext";

type ListOfServicesProps = {
    query: string;
};

type ServiceProps = {
    service: Service;
    onAddingService: (dialogId: number) => void;
};

type ServiceCounterProps = {
    serviceId: number;
    onAddingService: (dialogId: number) => void;
};

function ServiceCounter({ serviceId, onAddingService }: ServiceCounterProps) {
    const [count, setCount] = useState(0);

    function decrement() {
        if (count == 0) {
            return;
        }

        setCount(count - 1);
    }

    return (
        <div className="flex gap-2.5 items-center">
            <img onClick={decrement} className="size-[27px]" src="/build/assets/subtracting.webp" alt="Minus image" />
            <span className="font-[Montserrat] text-2xl">{count}</span>
            <img onClick={() => onAddingService(serviceId)} className="size-[27px]" src="/build/assets/add.webp" alt="Addition image" />
        </div>
    );
}

function ServiceInformation({ id, name, shortDescription }: Service) {
    return (
        <div className="flex w-55 items-center gap-[5px]">
            <img className="size-[50px]" src={`/build/assets/services/${id}/logo.webp`} alt={`${name} official logo`} />
            <div className="flex flex-col gap-[5px]">
                <span className="font-[Montserrat] text-[16px] w-[250px]">{name}</span>
                <span className="font-[Montserrat] text-[12px] w-[170px]">{shortDescription}</span>
            </div>
        </div>
    );
}

function ServiceItem({ service, onAddingService }: ServiceProps) {
    return (
        <div className="flex justify-between border-[#f1f1f1] border-b pb-5">
            <ServiceInformation {...service} />
            <ServiceCounter serviceId={service.id} onAddingService={onAddingService} />
        </div>
    );
}

function Loader() {
    return (
        <div className="flex flex-col items-center gap-[5px] pt-[10px]">
            <img className="size-[35px]" src="/build/assets/loading.gif" />
            <span className="text-[15px] text-gray-600">Loading...</span>
        </div>
    );
}

function ServicesContainer({ query }: ListOfServicesProps) {
    const { handleAddingService } = useContext(DialogContext);
    const [services, setServices] = useState<Service[]>([]);
    const [isVisible, setVisible] = useState<boolean>(false);
    const areRequestsBlocked = useRef<boolean>(false);

    const page = useRef(1);

    useEffect(() => {
        if (query.length == 0) {
            serviceRepository.getAllServicesAsPage(1).then((data) => {
                setServices(data);
                areRequestsBlocked.current = false;
            }).catch(() => {
                areRequestsBlocked.current = false;
            });
        }

        return () => {
            setServices([]);
        };
    }, [query]);

    const handleScrollToBottom = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const target = e.target;

        if (
            "scrollHeight" in target && "scrollTop" in target && "clientHeight" in target &&
            typeof target.scrollHeight == "number" && typeof target.scrollTop == "number" && typeof target.clientHeight == "number"
            && !areRequestsBlocked.current
        ) {
            if ((target.scrollHeight - target.scrollTop) == target.clientHeight) {
                areRequestsBlocked.current = true;
                setVisible(true);

                serviceRepository.getAllServicesAsPage(page.current + 1).then((data) => {
                    areRequestsBlocked.current = false;

                    if (data.length == 0) {
                        setVisible(false);
                        areRequestsBlocked.current = true;

                        setTimeout(() => {
                            areRequestsBlocked.current = false;
                        }, 5000);

                        return;
                    }

                    const servicesWithNewPages = services.concat(data);
                    setServices(servicesWithNewPages);
                    page.current = page.current + 1;
                    setVisible(false);

                }).catch(() => {
                    areRequestsBlocked.current = false;
                    setVisible(false);
                });
            }
        }
    };

    const listOfServices = useMemo(() => {
        return services ? services.map(service => <ServiceItem key={service.id} service={service} onAddingService={handleAddingService} />) : <div>Loading</div>;
    }, [services]);

    return (
        <div id="list-services" onScroll={(e) => handleScrollToBottom(e)} className="w-full pt-[15px] h-[285px] overflow-y-scroll no-scrollbar">
            {listOfServices}
            {isVisible ? <Loader /> : <></>}
        </div>
    );
}

export { ServicesContainer };
