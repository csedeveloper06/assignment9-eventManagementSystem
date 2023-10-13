

const Service = ({service}) => {

    const { image,title,titleDesc,price } = service;

    return (
        <div className="card w-[250] bg-base-100 shadow-xl">
            <figure><img className="w-[100%] h-44" src={image} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="text-sm text-gray-400">{titleDesc}</p>
                <span>Price: {price}</span>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary w-full">Course  Details</button>
                </div>
            </div>
        </div>
    );
};

export default Service;