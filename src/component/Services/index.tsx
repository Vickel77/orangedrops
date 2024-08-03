import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Food",
    price: "$49.99",
    description:
      "This is a great product that you will love and will be useful to you!",
    imageSrc: "/healthy.jpg",
    imageAlt: "Product 1",
  },
  {
    id: 2,
    name: "Fitness",
    price: "$59.99",
    description: "This is another great product that you will love!",
    imageSrc: "/work-out.jpg",
    imageAlt: "Product 2",
  },
  {
    id: 3,
    name: "Health",
    price: "$69.99",
    description: "This product is amazing and you should buy it!",
    imageSrc: "/healthy2.jpg",
    imageAlt: "Product 3",
  },
  // Add more products as needed
];

const Services = () => {
  return (
    <section className="relative py-12 ">
      <div className="sticky top-0 z-10 py-4">
        <h2 className="text-4xl font-bold text-center opacity-50 mb-10">
          Services
        </h2>
      </div>
      <div className=" before:absolute before:top-0 before:left-[40%] before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:absolute after:bottom-0 after:right-[40%] after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-[''] ">
        <div className="flex flex-wrap  gap-10  relative">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="flex flex-col min-w-[350px] w-[300px] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg  rounded-xl shadow-md overflow-hidden "
            >
              <div
                className={` min-h-[300px]  max-h-80 overflow-hidden flex-1 flex justify-center items-center rounded-xl`}
              >
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={300}
                  height={300}
                  className="w-full grayscale hover:grayscale-0 hover:scale-110 rounded-xl"
                />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                {/* <div className="text-lg font-bold mb-4">{product.price}</div>
                <button className="shadow-xl bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark">
                  Buy Now
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
