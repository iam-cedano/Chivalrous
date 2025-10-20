import { JSX } from "react";
import ServiceType from "../types/Service.type";

type ServiceListType = {
    services: ServiceType[]
};

function Service({name, image}: ServiceType): JSX.Element {
    return (
        <div className="flex flex-col">
            <img src={image} alt={`${name} image`} />
            <span>{name}</span>
        </div>
    );
}

function ServiceList({services}: ServiceListType): JSX.Element {
    
    const FirstService = services[0];

    return (
        <section className="flex flex-col w-full h-auto bg-red-500 p-[1px]" id="listOfServices">
            
            <div className="flex flex-row w-full bg-blue-500">
                <Service name={FirstService.name} image={FirstService.image} />
            </div>    

            <div className="flex flex-row w-full bg-blue-500">
                <span>Second Row</span>
            </div>

        </section>
    );
}

export {ServiceList};