import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../../Shared/Navbar";



const ServiceDetails = () => {
    
    const services = useLoaderData();
    console.log(services);
    const {id} = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);
    const {image,title,level,date,time,location,description,instructors,agenda,
    registrationLink,contactEmail,contactPhone} = service;
    console.log(instructors);
    

    return (
        <div>
            <div>
                <div><img src={image} alt="" /></div>
                <div>
                    <p>{title}</p>
                    <p>
                        <span>{level}</span>
                        <span>{date}</span>
                    </p>
                    <p>
                        <span>{time}</span>
                        <span>{location}</span>
                    </p>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                {
                    instructors.map(instructor => <p> {instructor.name} </p>)
                } 
                {
                    instructors.map(instructor => <p> {instructor.title} </p>)
                } 
                {
                    instructors.map(instructor => <p> {instructor.bio} </p>)
                } 
                
            </div>
            <div>
                <div>
                   {
                        agenda.map(item => <p>{item.time}</p>)
                   }
                   {
                        agenda.map(item => <p>{item.sessionTitle}</p>)
                   }
                   {
                        agenda.map(item => <p>{item.description}</p>)
                   }
                </div>
            </div>
            <div>
                <>
                    <address>{registrationLink}</address>
                    <address>{contactEmail}</address>
                    <small>{contactPhone}</small>
                </>
            </div>
        </div>
    );
};

export default ServiceDetails;