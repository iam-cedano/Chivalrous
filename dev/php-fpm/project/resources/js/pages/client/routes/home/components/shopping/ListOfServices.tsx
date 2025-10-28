import { useState } from "react";
import ServiceType from "@/types/client/Service.type";
import Services from "@/pages/client/routes/home/data/Services.data";

function ServiceCounter() {
    const [count, setCount] = useState(0);

    function decrement() {
        if (count == 0) {
            return;
        }
        
        setCount(count - 1);
    }

    function increment() {

        if (count == 99) {
            return;
        }

        setCount(count + 1);
    }
    
    return (
        <div className="flex gap-[10px] items-center">
           
            <img onClick={decrement} className="size-[27px]" src="/build/assets/subtracting.webp" alt="Minus image" />

            <span className="font-[Montserrat] text-2xl">{ count }</span>

            <img onClick={increment} className="size-[27px]" src="/build/assets/add.webp" alt="Addition image" />

        </div>
    );
}

function ServiceInformation({service, title, image,description}: ServiceType) {
    return (
        <div className="flex w-[240px] items-center gap-[5px]">
            
            <img className="size-[50px]" src={image} alt={`${service} official logo`} />

            <div className="flex flex-col gap-[5px]">
                <span className="font-[Montserrat] text-[16px] w-[250px]">{title}</span>
                <span className="font-[Montserrat] text-[12px] w-[170px]">{description}</span>
            </div>
        </div>
    );
}

function Service(service: ServiceType) {
    return (
        <div className="flex justify-between border-[#f1f1f1] border-b-[1px] pb-[20px]">
            <ServiceInformation {...service} />
            <ServiceCounter />       
        </div>
    );
}

function ListOfServices() {
    const FirstService: ServiceType = Services[1];

    return (
        <div className=" w-full pt-[15px] pb-[15px] h-[290px] overflow-scroll">
            <Service {...FirstService} />
        </div>
    );
}

export { ListOfServices };