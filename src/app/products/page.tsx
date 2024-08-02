import Brands from "@/component/Brands";
import Services from "@/component/Services";
import TeamComp from "@/component/TeamComp";
import Image from "next/image";

// pages/about.js
const Team = () => {
  return (
    <div className="container mx-auto px-4 py-16 before:fixed before:top-0 before:left-0 before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:fixed after:bottom-0 after:right-0 after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-['']">
      {/* <div className="w-full min-h-[50vh] relative flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold text-center mb-8">
          Products and Brands
        </h1>
      </div> */}
      <Brands />
    </div>
  );
};

export default Team;
