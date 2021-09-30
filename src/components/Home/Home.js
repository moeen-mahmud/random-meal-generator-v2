import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-around mt-16">
        <div className="ml-12 leading-loose">
          <h1 className="text-6xl leading-snug font-bold">
            <span className="text-indigo-600">Skip</span> The Diet,
            <br />
            Just Eat Healthy
            <br />
            With Food Network
          </h1>
          <p className="text-xl leading-normal">
            Imagine you don't need a diet because we provide healthy
            <br />
            and delicious food for you!
          </p>
        </div>
        <div className="m-0 w-1/2">
          <img
            className="w-3/4 block mx-auto"
            src="./shapes/shape-indigo.png"
            alt="frames"
          />
        </div>
      </div>
      <div className="bg-hero-pattern bg-no-repeat bg-center bg-cover p-8 my-16 flex items-center justify-around">
        <div className="w-2/4">
          <img
            className="block w-1/2 mx-auto"
            src="./shapes/person-img.png"
            alt="person"
          />
        </div>
        <div className=" block w-2/4">
          <h1 className="text-4xl font-bold block mx-auto mb-12">About Us</h1>
          <p className="text-xl leading-loose block mx-auto">
            What can I say I love food. My journey as a chef brought me from
            Teknaf to Tetulia and now to Dhaka, and who knows where else.The
            thing I love most about food is the interaction between people.
            Whether that is cooking with friends or family, teaching someone to
            cook, or that feeling when they try your food.
          </p>
        </div>
      </div>
      <div className="bg-gray-900 text-white text-center p-32">
        <h1 className="text-indigo-600 font-bold text-4xl">FooodZa!</h1>
        <p className="text-xl mt-6">
          Eat healthy to live healthy. Live healthy to live happy
        </p>
      </div>
    </>
  );
};

export default Home;
