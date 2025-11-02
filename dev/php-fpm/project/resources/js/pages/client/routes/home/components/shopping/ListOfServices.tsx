import { useRef, useState } from "react";
import ServiceType from "@/types/client/Service.type";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import Lottie from "lottie-react";

function ServiceCounter() {
    const [count, setCount] = useState(0);

    function decrement() {
        if (count == 0) {
            return;
        }
        
        setCount(count - 1);
    }

    function increment() {

        if (count == 99) {
            return;
        }

        setCount(count + 1);
    }
    
    return (
        <div className="flex gap-[10px] items-center">
           
            <img onClick={decrement} className="size-[27px]" src="/build/assets/subtracting.webp" alt="Minus image" />

            <span className="font-[Montserrat] text-2xl">{ count }</span>

            <img onClick={increment} className="size-[27px]" src="/build/assets/add.webp" alt="Addition image" />

        </div>
    );
}

function ServiceInformation({service, title, image,description}: ServiceType) {
    return (
        <div className="flex w-[240px] items-center gap-[5px]">
            
            <img className="size-[50px]" src={image} alt={`${service} official logo`} />

            <div className="flex flex-col gap-[5px]">
                <span className="font-[Montserrat] text-[16px] w-[250px]">{title}</span>
                <span className="font-[Montserrat] text-[12px] w-[170px]">{description}</span>
            </div>
        </div>
    );
}

function Service(service: ServiceType) {
    return (
        <div className="flex justify-between border-[#f1f1f1] border-b-[1px] pb-[20px]">
            <ServiceInformation {...service} />
            <ServiceCounter />       
        </div>
    );
}

function ListOfServices() {
    const page = useRef(1);
    const [services, setServices] = useState([]);

    function fetchMoreServices() {
        console.log('fetchMoreServices() | Executed');

        axios.get('/api/services/').then((data) => {
            console.info(data);
        })

        page.current = page.current + 1;
    }

    return (
        <div id="list-services" className="w-full pt-[15px] pb-[15px] h-[290px] overflow-y-scroll no-scrollbar">
            <InfiniteScroll
                dataLength={services.length}
                next={fetchMoreServices}
                hasMore={true}
                loader={<h4>Loading</h4>}
                scrollableTarget="list-services"
                >
                <p>Hello world</p>
                <Lottie animationData={} loop={true}></Lottie>
            </InfiniteScroll>
        </div>
    );
}

export { ListOfServices };