import Services from "@/component/Services";
import TeamComp from "@/component/TeamComp";
import Image from "next/image";

// pages/about.js
const Team = () => {
  return (
    <div className=" text-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="w-full min-h-[70vh] relative flex flex-col justify-center items-center">
          <h1 className="text-5xl font-semibold text-center mb-8">
            Meet the Team
          </h1>
          <div className=" max-w-[90%] md:max-w-[50%] text-center border-dashed border-2 p-5 rounded-xl">
            <p className="text-xl">
              Meet the dedicated professionals driving our vision, ensuring
              excellence and innovation in health and food sustainability for
              you.
            </p>
          </div>
        </div>
        <TeamComp />
      </div>
    </div>
  );
};

export default Team;
