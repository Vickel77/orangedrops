import Image from "next/image";
import React from "react";

function Vision() {
  return (
    <section className="bg-secondary flex flex-row-reverse flex-wrap  w-full justify-center items-center rounded-3xl mt-10 ">
      <div className="max-w-[100%] md:max-w-[50%] text-white text-center p-5 md:p-20">
        <h2 className="text-4xl font-bold mb-5 ">Our Vision</h2>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
          molestias, natus illo pariatur, temporibus molestiae minus veniam
          doloremque tempore, officiis provident magnam dolor quaerat!
        </p>
      </div>
      <div className=" max-w-[100%] md:max-w-[50%] before:absolute before:rounded-3xl before:h-[500px]  before:content-['']  before:w-[300px]">
        <Image
          data-aos="fade-left"
          className="relative rounded-xl"
          alt=""
          src="/mission-1.png"
          width={700}
          height={500}
        />
      </div>
    </section>
  );
}

export default Vision;
