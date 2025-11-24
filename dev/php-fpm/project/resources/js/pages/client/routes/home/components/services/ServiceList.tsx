import { JSX } from "react";
import ServiceListType from "../../types/ServiceList";

function ServiceList({children}: ServiceListType): JSX.Element {
    return (
    <section className="w-full p-2" id="services">
        
            <div className="bg-white grid grid-cols-7 grid-rows-2 overflow-hidden rounded-2xl">
                    { children }               
            </div>

        </section>
    );
}

export { ServiceList };