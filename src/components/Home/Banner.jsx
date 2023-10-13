import './Hero.css'

const Banner = () => {
  return (
    <div>
        <div className="relative hero hero-overlay opacity-60 h-screen ">
        </div>
        <div>
            <h1 className="absolute ml-5 top-36 text-2xl  font-semibold 
               text-white lg:text-5xl lg:top-60 lg:mx-60">Web Development Workshop</h1>
            <p className='absolute top-52 text-center text-orange-500 font-medium text-sm 
              lg:top-[300px] lg:mx-72 '>Join our Web 
            Development Workshop <br /> and unlock the world of coding and design! Start 
            your web development journey  </p>
           <div>
              <button className='absolute top-72 left-40  bg-pink-600 rounded-lg 
                    text-sm p-3 text-white lg:top-[380px] lg:mx-[500px]' data-aos="zoom-in-up">Apply Now</button>
           </div>
        </div>
    </div>
  );
};

export default Banner;
