import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Azeez Ibnrahim",
    price: "$49.99",
    description: "CEO",
    imageSrc: "/team-1.png",
    imageAlt: "Product 1",
  },
  {
    id: 2,
    name: "Khalifa",
    price: "$59.99",
    description: "COO",
    imageSrc: "/team-2.png",
    imageAlt: "Product 2",
  },

  // Add more products as needed
];

const TeamComp = () => {
  return (
    <section className=" relative py-0 ">
      <div className="  before:absolute before:top-0 before:left-[40%] before:h-[500px] before:w-[500px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-secondary before:opacity-50 before:to-transparent before:blur-2xl  before:content-[''] after:absolute after:bottom-0 after:right-[40%] after:-z-20 after:h-[500px] after:opacity-50 after:blur-2xl after:w-[500px] after:translate-x-1/3 after:bg-gradient-radial after:from-primary  after:content-[''] ">
        <div className="flex gap-20  md:gap-10  flex-wrap justify-center relative">
          {products.map((product, index) => (
            <div
              data-aos={"fade-up"}
              data-aos-delay={(index + 1) * 100}
              key={product.id}
              className="flex flex-col item-center flex-grow-[1] basis-[200px] max-w-[350px]  min-w-[200px] bg-white bg-opacity-60 backdrop-filter backdrop-blur-lg  rounded-xl shadow-md overflow-visible flex-shrink-0"
            >
              <div className=" w-[100px] h-[100px] shadow-xl  translate-y-[-50%] overflow-hidden  self-center flex justify-center items-center rounded-full">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={100}
                  height={100}
                  className="rounded-full "
                />
              </div>
              <div className="pb-10 text-center">
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

export default TeamComp;
