import Image from "next/image";
import React from "react";

function Mission() {
  return (
    <section className="bg-secondary rounded-3xl mt-20  py-10 w-full border-2">
      <div className=" flex flex-wrap  w-full justify-center items-center">
        <div className="max-w-[100%] md:max-w-[50%] text-white text-center p-5 md:p-20">
          <h2
            data-aos="fade-in"
            className="text-2xl md:text-4xl font-bold mb-5 "
          >
            Our Mission
          </h2>
          <p data-aos="fade-in" className="text-md md:text-xl">
            To become a sustainable, innovative player in the global food value
            chain industry through internationalized projects, strategic
            partnerships, and adherence to both long-term and short-term
            objectives that align with our core values.
          </p>
        </div>
        <div className=" max-w-[100%] md:max-w-[50%] before:absolute before:rounded-3xl before:h-[500px]  before:content-['']  before:w-[300px]">
          <Image
            data-aos="fade-left"
            className="relative rounded-xl"
            alt=""
            src="/wwd2.jpeg"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className=" flex flex-row-reverse flex-wrap  w-full justify-center items-center mt-20 ">
        <div className="max-w-[100%] md:max-w-[50%] text-white text-center p-5 md:p-20">
          <h2
            data-aos="fade-in"
            className="text-2xl md:text-4xl font-bold mb-5 "
          >
            Our Vision
          </h2>
          <p data-aos="fade-in" className="text-md md:text-xl">
            To transform the food industry by introducing sustainable,
            high-quality products that cater to global demands while maintaining
            a commitment to environmental responsibility and social impact.
          </p>
        </div>
        <div className=" max-w-[100%] md:max-w-[50%] before:absolute before:rounded-3xl before:h-[500px]  before:content-['']  before:w-[300px]">
          <Image
            data-aos="fade-right"
            className="relative rounded-xl"
            alt=""
            src="/vision.jpeg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default Mission;
