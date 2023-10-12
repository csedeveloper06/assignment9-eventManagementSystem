import './Hero.css'

const Banner = () => {
  return (
    <div>
        <div className="relative hero h-screen hero-overlay opacity-60">
        </div>
        <div>
            <h1 className="absolute top-60 mx-60 font-semibold 
              text-5xl text-white">Web Development Workshop</h1>
            <p className='absolute top-[300px] mx-72 text-center text-orange-500 font-medium text-sm'>Join our Web 
            Development Workshop <br /> and unlock the world of coding and design! Start 
            your web development journey  </p>
           <div>
              <button className='absolute top-[380px] bg-pink-600 rounded-lg 
                    text-sm p-3 text-white mx-[500px]' data-aos="zoom-in-up">Apply Now</button>
           </div>
        </div>
    </div>
  );
};

export default Banner;
