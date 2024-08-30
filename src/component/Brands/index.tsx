import Image from "next/image";

const products = [
  {
    id: 3,
    name: "Cloves",
    price: "$69.99",
    description:
      "A premium bead loaf line, offering variety of high volume, quality loaves",
    imageSrc: "/clove-1.png",
    imageAlt: "Product 3",
  },
  {
    id: 1,
    name: "Jitos",
    price: "$49.99",
    description:
      "Premium tomato paste, delivering rich, concentrated flavours and taste",
    imageSrc: "/jitos-can.png",
    imageAlt: "Product 1",
  },
  {
    id: 2,
    name: "Sitro",
    price: "$59.99",
    description:
      "Rich chocolate-malt beverage powder, versatile and enjoyable I'm various forms, offering a delightful and indulgent experience",
    imageSrc: "/sitro.png",
    imageAlt: "Product 2",
  },

  {
    id: 4,
    name: "Toyin",
    price: "$69.99",
    description:
      "Tomato cultivation program, including the a pilot  irrigated farm and multiple community engagement programs",
    imageSrc: "/toyin.png",
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
                hideBottomBanner ? "min-h-[30vh]" : ""
              } flex justify-center items-center top-0 z-10 py-4`}
            >
              <h2 className="text-3xl md:text-5xl  font-bold text-center  pb-10 ">
                Our Products
              </h2>
            </div>

            <div className="flex flex-wrap gap-10 justify-evenly relative">
              {products.map((product, index) => (
                <div
                  data-aos="fade-right"
                  key={"product.id"}
                  className={`flex flex-grow flex-shrink flex-wrap  min-w-[150px]  ${
                    index === 0 || index == 3 ? "bg-primary" : "bg-secondary"
                  }  text-white justify-center items-center  rounded-xl shadow-md overflow-hidden py-10`}
                >
                  <div className="flex justify-center items-center ">
                    <Image
                      src={product?.imageSrc}
                      alt={"white bread"}
                      width={250}
                      height={200}
                      className=" object-cover drop-shadow-xl"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">
                      {product?.name}
                    </h3>
                    <p className="max-w-[200px] mb-4">{product?.description}</p>
                  </div>
                </div>
              ))}
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
