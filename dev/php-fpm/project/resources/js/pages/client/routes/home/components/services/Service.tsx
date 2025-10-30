import { JSX } from "react";
import ServiceType from "../../types/Service.type";

function Service({title, service, image}: ServiceType): JSX.Element {
    return (
        <div className="w-full h-full p-[10px] border-[1px] border-[#F3F3F3]">
            <img src={image} className="size-[33px] m-auto" alt={`${service} image`} />
            <span className="font-[Montserrat] text-[7px] mt-[5px] block text-center">{service}</span>
        </div>
    );
}

export { Service }