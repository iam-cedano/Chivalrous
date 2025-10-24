import { JSX } from "react";
import ServiceType from "../types/Service.type";

type ServiceListType = {
    services: ServiceType[]
};

function Service({name, image}: ServiceType): JSX.Element {
    return (
        <div className="w-full h-full p-[10px] border-[1px] border-[#F3F3F3]">
            <img src={image} className="size-[33px] m-auto" alt={`${name} image`} />
            <span className="text-[6px] mt-[5px] block text-center">{name}</span>
        </div>
    );
}

function ServiceList({services}: ServiceListType): JSX.Element {
    
    const servicesAsJSX = services.map(service => <Service name={service.name} image={service.image} />);

    return (
        <section className="w-full p-[10px]" id="services">
        
            <div className="bg-white grid grid-cols-7 grid-rows-2 overflow-hidden rounded-2xl">
                    {servicesAsJSX}               
            </div>

        </section>
    );
}

export {ServiceList};