import { ReactNode } from "react";

interface ContainerProps {
    backgroundImageURL: string,
    children: ReactNode
}

function Container(data: ContainerProps) {
    let bgImage = `url(${data.backgroundImageURL})`;
    
    return (
        <> 
            <div key='Auth.Container.1' className="w-full h-screen bg-no-repeat bg-cover bg-top" 
            style={{
                backgroundImage: bgImage,
            }}>
                { data.children }
            </div>
        </>
    );
}

export {Container};