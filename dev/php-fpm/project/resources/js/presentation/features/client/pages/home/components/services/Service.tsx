import { JSX, ReactNode } from "react";
import { ServiceType } from "@/domain/entities";

type ServiceProps = ServiceType;

function Service({ title, service, image }: ServiceProps): JSX.Element {
    return (
        <div className="w-full h-full p-2.5 border border-[#F3F3F3]">
            <img src={image} className="size-[33px] m-auto" alt={`${service} image`} />
            <span className="font-[Montserrat] text-[7px] mt-[5px] block text-center">{service}</span>
        </div>
    );
}

export { Service };
