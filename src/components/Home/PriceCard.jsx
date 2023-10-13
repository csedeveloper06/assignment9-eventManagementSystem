import green from "../../assets/green2.jpg";
import redCross from "../../assets/red3.png";

const PriceCard = () => {
  return (
    <div className="py-10">
        <h1 className =" ml-5 mb-5 text-3xl text-pink-500  font-bold lg:p-8 lg:text-center lg:text-6xl">Speakers And Organizers</h1>
      <div
        className="ml-5 grid gap-5 grid-cols-1 lg:grid-cols-3 "
        data-aos="zoom-in-down"
      >
        <div
          className="card bg-primary text-primary-content shadow-xl w-[380px]"
        >
          <div className="card-body">
            <h2 className="card-title text-6xl">Silver</h2>
            <p className="text-7xl font-extrabold text-center">
              <span className="text-2xl">$</span>90
              <span className="text-3xl">/month</span>
            </p>
            <div className="card-actions justify-center">
              <div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={green} alt="" />
                  <div className="">
                    <h3 className="text-2xl font-semibold">Full Conference</h3>
                    <p className="text-xs">(WorkShops,snacks,etc.)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={redCross} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold">Live Video</h3>
                    <p className="text-xs">(Can access online free)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={redCross} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold">Meet Speakers</h3>
                    <p className="text-xs">(Ask questions privately)</p>
                  </div>
                </div>
              </div>
              <button
                className="btn w-full brightness-100 bg-pink-500 border-0 
                text-primary-content"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-[380px] bg-violet-700 text-primary-content shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title text-6xl text-center">Platinum</h2>
            <p className="text-7xl font-extrabold text-center">
              <span className="text-2xl">$</span>120
              <span className="text-3xl">/month</span>
            </p>
            <div className="card-actions justify-center">
              <div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={green} alt="" />
                  <div className="">
                    <h3 className="text-2xl font-semibold">Full Conference</h3>
                    <p className="text-xs">(WorkShops,snacks,etc.)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={green} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold">Live Video</h3>
                    <p className="text-xs">(Can access online free)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={green} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold">Meet Speakers</h3>
                    <p className="text-xs">(Ask questions privately)</p>
                  </div>
                </div>
              </div>
              <button
                className="btn w-full brightness-100 bg-pink-500 border-0 
                text-primary-content"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div
          className="card w-[380px] bg-green-600 text-primary-content shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title text-6xl text-center">Golden</h2>
            <p className="text-7xl font-extrabold text-center">
              <span className="text-2xl">$</span>100
              <span className="text-3xl">/month</span>
            </p>
            <div className="card-actions justify-center">
              <div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={green} alt="" />
                  <div className="">
                    <h3 className="text-2xl font-semibold">Full Conference</h3>
                    <p className="text-xs">(WorkShops,snacks,etc.)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={green} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold">Live Video</h3>
                    <p className="text-xs">(Can access online free)</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 m-5">
                  <img className="w-6 h-6 rounded-full" src={redCross} alt="" />
                  <div>
                    <h3 className="text-2xl font-semibold">Meet Speakers</h3>
                    <p className="text-xs">(Ask questions privately)</p>
                  </div>
                </div>
              </div>
              <button
                className="btn w-full brightness-100 bg-pink-500 border-0 
                text-primary-content"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
