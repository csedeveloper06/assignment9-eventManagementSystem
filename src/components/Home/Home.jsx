import { useLoaderData } from "react-router-dom";
import Footer from "../../Shared/Footer";
import Navbar from "../../Shared/Navbar";
import Banner from "./Banner";
import Service from "./Service";
import Organizer from "./Organizer";
import PriceCard from "./PriceCard";


const Home = () => {

    const services = useLoaderData();
    // console.log(info);

    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-12">
                {
                    services.map(service => <Service 
                        key={service._id} 
                        service={service}
                        ></Service>)
                }
            </div>
            <Organizer></Organizer>
            <PriceCard></PriceCard>
        </div>
    );
};

export default Home;