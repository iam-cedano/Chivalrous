import { ReactNode } from "react";

interface ContainerProps {
    backgroundImageURL: string;
    children: ReactNode;
}

function Container(data: ContainerProps) {
    let bgImage = `url(${data.backgroundImageURL})`;

    return (
        <>
            <div key='Auth.Container.1' className="w-full h-screen bg-repeat bg-cover bg-position-[center_calc(50%-120px)]"
                style={{
                    backgroundImage: bgImage,
                }}>
                {data.children}
            </div>
        </>
    );
}

export { Container };
