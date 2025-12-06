import { JSX, ReactNode } from "react";

type ServiceListProps = {
    children: ReactNode;
};

function ServiceList({ children }: ServiceListProps): JSX.Element {
    return (
        <section className="w-full p-2" id="services">
            <div className="bg-white grid grid-cols-7 grid-rows-2 overflow-hidden rounded-2xl">
                {children}
            </div>
        </section>
    );
}

export { ServiceList };
