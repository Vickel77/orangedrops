import CoreValues from "@/component/CoreValues";
import Mission from "@/component/Mission";
import Vision from "@/component/Vission";
import Image from "next/image";
import { FaBullseye, FaChessKnight } from "react-icons/fa";

// pages/about.js
const About = () => {
  return (
    <div className="w-[100vw] overflow-hidden text-gray-800">
      <div className="container mx-auto px-5 py-16">
        <div className="max-w-[100vw] min-h-[50vh] relative flex justify-center items-center before:absolute before:top-0 before:left-0 before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:absolute after:bottom-0 after:right-0 after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-['']">
          <h1 className="text-5xl font-semibold text-center mb-8">About Us</h1>
          <div>
            <Image alt="" src="" />
          </div>
        </div>

        {/* Section 2: Our Story  */}
        {/* <section className="mb-16 flex flex-wrap items-center justify-between ">
          <div className="w-full lg:w-[50%]">
            <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-4"></p>
          </div>
          <div className="bg-primary rounded-xl mt-10 mt:mb-0">
            <Image
              data-aos="fade-up-left"
              className="rounded-xl -translate-x-5 -translate-y-5"
              alt="wwd1"
              src="/wwd1.jpeg"
              width={500}
              height={300}
            />
          </div>
        </section> */}

        {/* Section 2: Our Story */}
        <section className="mb-16  flex   flex-wrap-reverse md:flex-row items-center justify-between ">
          <div className="bg-primary rounded-xl mb-10 md:mb-0">
            <Image
              data-aos="fade-up-right"
              className="rounded-xl translate-x-5 translate-y-5"
              alt="wwd2"
              src="/food-lab.jpg"
              width={500}
              height={300}
            />
          </div>
          <div className="w-full lg:w-[50%] mt-10 mt:mb-0 ">
            <h2 className="text-3xl font-semibold mb-4">Who we are</h2>
            <p className="text-lg mb-4">
              Orangedrops is a pioneering food and health-tech company based in
              Lagos State, committed to revolutionizing the intersection of
              nutrition, wellness, and healthcare. We are a food value chain
              contributor with interests in food processing, food production and
              food production technologies. Our mission is to bridge the gap
              between food and health by leveraging technology, innovations,
              scientific research, and a team of specialists. We operate in the
              food and beverage processing, virtual physical fitness/therapy
              services, and healthcare services sectors.
            </p>
          </div>
        </section>

        {/* <CoreValues /> */}
        <Mission />
        {/* <Vision /> */}

        <section className="py-10 mt-10">
          <div className="inline-flex flex-wrap justify-between relative">
            <div
              data-aos="fade-right"
              key={"product.id"}
              className="p-5 primary-glass flex flex-col max-w-full    min-w-[150px] text-white  items-center  rounded-xl shadow-md overflow-hidden flex-shrink flex-grow "
            >
              <div className=" flex self-start p-5">
                <FaBullseye className="text-6xl " />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">Objective</h3>
                <p className="text-xl mb-4">
                  To become a sustainable, innovative player in the food value
                  chain industry, with internationalized projects, institutions,
                  and engagements that align with company policies, and long and
                  short-term objectives.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
