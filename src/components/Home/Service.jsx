import { Link } from "react-router-dom";


const Service = ({service}) => {

    const { id,image,title,titleDesc,price } = service;

    return (
        <div className="ml-10 card w-[350px] bg-base-100 shadow-xl">
            <figure><img className="w-[100%] h-44" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-sm text-gray-400">{titleDesc}</p>
                <span>Price: {price}</span>
                <div className="card-actions justify-center">
                    <Link to={`/Service/${id}`}><button className="btn btn-primary w-full">Course  Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;