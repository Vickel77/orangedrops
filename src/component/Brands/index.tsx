import Image from "next/image";

const brands = [
  {
    id: 1,
    name: "Product 1",
    price: "$49.99",
    description: "This is a great product that you will love!",
    imageSrc: "/img-slice-1.png",
    imageAlt: "Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$59.99",
    description: "This is another great product that you will love!",
    imageSrc: "/img-b-bread.png",
    imageAlt: "Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$69.99",
    description: "This product is amazing and you should buy it!",
    imageSrc: "/img-slice-3.png",
    imageAlt: "Product 3",
  },
  // Add more products as needed
];

const Brands = ({
  hideBottomBanner,
  onHomePage,
}: {
  hideBottomBanner?: boolean;
  onHomePage?: boolean;
}) => {
  return (
    <section className="relative py-12 w-full  ">
      <div className="">
        {!onHomePage && (
          <>
            <div
              className={`sticky  ${
                hideBottomBanner ? "min-h-[40vh]" : ""
              } flex justify-center items-center top-0 z-10 py-4`}
            >
              <h2 className="text-3xl md:text-5xl  font-bold text-center  pb-10 ">
                Our Products
              </h2>
            </div>

            <div className="flex flex-wrap gap-10 justify-evenly relative">
              <div
                data-aos="fade-right"
                key={"product.id"}
                className="flex flex-wrap  min-w-[150px] max-w-full  bg-primary text-white justify-center items-center  rounded-xl shadow-md overflow-hidden py-10  "
              >
                <div className=" flex  justify-center items-center">
                  <Image
                    src="/jitos-can.png"
                    alt={"white bread"}
                    width={300}
                    height={200}
                    className=" object-cover drop-shadow-xl"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Jitos</h3>
                  <p className="max-w-[200px] mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat, quam!
                  </p>
                </div>
              </div>
              <div
                key={"product.id"}
                data-aos="fade-left"
                className="flex  flex-wrap  min-w-[150px] max-w-full  bg-secondary text-white justify-center items-center  rounded-xl shadow-md overflow-hidden py-10  "
              >
                <div className=" flex justify-center items-center">
                  <Image
                    src="/sitro.png"
                    alt={"fruits powder"}
                    width={300}
                    height={200}
                    className=" object-cover drop-shadow-xl"
                  />
                </div>
                <div className="p-6 justify-center">
                  <h3 className="text-xl font-semibold mb-2">Citro</h3>
                  <p className="max-w-[200px] mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Placeat, quam!
                  </p>
                  {/* <button className="shadow-xl bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-primary-dark">
                Order Now
              </button> */}
                </div>
              </div>
            </div>
          </>
        )}
        {!hideBottomBanner && (
          <div
            key={"product.id"}
            className={`flex flex-wrap ${
              !onHomePage ? "mt-20" : "mb-20"
            }   min-w-[150px] bg-[#001200] text-white justify-center items-center  rounded-xl shadow-md overflow-hidden flex-shrink-0 `}
          >
            <div className="p-10  flex-1  justify-center">
              <h3 className="text-3xl font-semibold mb-2">
                Committed to technology and innovation
              </h3>
              {/* <p className="max-w-[400px] mb-4 text-xl">
              Committed to technology and innovation
            </p> */}
              {/* <button className="shadow-xl bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-primary-dark mt-5 text-2xl">
              Book a session
            </button> */}
            </div>
            <div className="hidden md:flex justify-center items-center">
              <Image
                src="/wwd1.png"
                alt={"fruits powder"}
                width={500}
                height={600}
                className=" object-cover drop-shadow-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
