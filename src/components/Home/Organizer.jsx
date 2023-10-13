

const Organizer = () => {
    return (
        
        <div>
            <h1 className="text-4xl font-bold text-pink-600 mt-8 ml-80">Speakers And Organizers</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 py-12">
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/K7Vyyqq/speaker5.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-center">Sophia Martinez</h2>
                    <p className="text-xs leading-5 text-justify px-3 text-gray-500">Sophia has extensive experience in full-stack development and will guide you through advanced concepts and techniques.</p>
                </div>
            </div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/PTnswCw/person1.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">John Doe</h2>
                    <p className="text-xs leading-5 text-justify px-3 text-gray-500">full-stack developer, has worked on numerous MERN stack projects and is excited to share his knowledge with you.</p>
                </div>
            </div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/0ry51NH/speaker.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Jane Smith</h2>
                    <p className="text-xs leading-5 text-justify px-3 text-gray-500">Jane specializes in front-end development using React and has a keen eye for user interfaces. She will be leading the React portion of the workshop.</p>
                </div>
            </div>
            <div className="card card-compact w-64 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/3NxWXnR/istock.jpg" alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Michael Davis</h2>
                    <p className="text-xs leading-5 text-justify px-3 text-gray-500">Michael specializes in optimizing MERN stack applications for performance .</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Organizer;