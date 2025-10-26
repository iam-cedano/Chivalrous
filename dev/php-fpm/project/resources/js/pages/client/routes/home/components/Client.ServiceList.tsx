import { JSX } from "react";
import ServiceType from "../../../types/Service.type";

type ServiceListType = {
    services: ServiceType[]
};

function Service({title, service, image}: ServiceType): JSX.Element {
    
    return (
        <div className="w-full h-full p-[10px] border-[1px] border-[#F3F3F3]">
            <img src={image} className="size-[33px] m-auto" alt={`${service} image`} />
            <span className="font-[Montserrat] text-[7px] mt-[5px] block text-center">{service}</span>
        </div>
    );
}

function ServiceList({services}: ServiceListType): JSX.Element {
    
    const servicesAsJSX = services.map(service => <Service key={service.service} {...service} />);

    return (
        <section className="w-full p-[10px]" id="services">
        
            <div className="bg-white grid grid-cols-7 grid-rows-2 overflow-hidden rounded-2xl">
                    {servicesAsJSX}               
            </div>

        </section>
    );
}

export {ServiceList};