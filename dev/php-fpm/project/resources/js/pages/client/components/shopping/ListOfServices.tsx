import { useState } from "react";
import ServiceType from "@/types/client/Service.type";
import Services from "@/data/client/Services.data";

function ServiceCounter() {
    const [count, setCount] = useState(0);
    
    return (
        <div className="">
            

        </div>
    );
}

function Service({service, title, image,description}: ServiceType) {
    return (
        <div className="flex">

            <div className="flex gap-[5px]">
                <div>
                    <img className="" src={image} alt={`${service} official logo`} />
                </div>
                
                
                <div className="flex flex-col gap-[5px]">
                    <span>{title}</span>
                    <span>{description}</span>
                </div>

            </div>

            <ServiceCounter />            
        </div>
    );
}

function ListOfServices() {
    const SecondService: ServiceType = Services[1];

    return (
        <div className="bg-white w-full h-[90px]">
            <Service {...SecondService} />
        </div>
    );
}

export { ListOfServices };