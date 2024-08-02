import Image from "next/image";

const products = [
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

const ProductSection = () => {
  return (
    <section className=" relative py-12 mt-32">
      <div className="sticky top-0 z-10 py-4">
        <h2 className="text-4xl font-bold text-center mb-5 opacity-50">
          Our Products
        </h2>
      </div>
      <div className=" py-10 before:absolute before:top-0 before:left-[40%] before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:absolute after:bottom-0 after:right-[40%] after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-[''] ">
        <div className="flex gap-10  relative">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col  min-w-[250px] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg  rounded-xl shadow-md overflow-hidden flex-shrink-0"
            >
              <div className=" flex-1 flex justify-center items-center">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={300}
                  height={200}
                  className=" object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="text-lg font-bold mb-4">{product.price}</div>
                <button className="shadow-xl bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
