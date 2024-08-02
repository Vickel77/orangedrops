import React from "react";

function TrustedBrands() {
  return (
    <section className=" w-full mt-52">
      <h2 className="text-3xl font-semibold mb-4 text-center opacity-50">
        Our Trusted Brands
      </h2>
      <div className=" p-5 rounded-lg w-full flex flex-wrap justify-between items-center space-x-4 space-y-4">
        <img
          data-aos="fade-up"
          data-aos-delay={100}
          src="/slack.png"
          alt="Brand 2"
          className="h-14 w-auto grayscale  hover:grayscale-0"
        />
        <img
          data-aos="fade-up"
          data-aos-delay={200}
          src="/tiktok.png"
          alt="Brand 3"
          className="h-14 w-auto grayscale  hover:grayscale-0"
        />
        <img
          data-aos="fade-up"
          data-aos-delay={300}
          src="/a.png"
          alt="Brand 1"
          className="h-24 w-auto grayscale  hover:grayscale-0"
        />
        <img
          data-aos="fade-up"
          data-aos-delay={400}
          src="/twitter.png"
          alt="Brand 4"
          className="h-14 w-auto grayscale  hover:grayscale-0"
        />
        <img
          data-aos="fade-up"
          data-aos-delay={500}
          src="/sina-weibo.png"
          alt="Brand 5"
          className="h-14 w-auto grayscale  hover:grayscale-0"
        />
      </div>
    </section>
  );
}

export default TrustedBrands;
