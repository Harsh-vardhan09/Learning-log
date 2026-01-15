


import { useState, useEffect } from 'react';

const products = [
  {
    title: "Pouch Packaging Machines",
    description: "Reliable and efficient for food & consumer products",
    image: "https://www.spackmachine.com/wp-content/uploads/2022/05/Things-to-Know-Before-Choosing-Filling-Machine-6.png", // Example for pouch packaging
    // More images or specific product details can go here
  },
  {
    title: "Liquid Packaging Machines",
    description: "Specially designed for water & milk packaging",
    image: "https://assetpackaging.com.au/wp-content/uploads/2021/06/image-1.png", // Example for liquid packaging
  },
  {
    title: "Mixtures & Conveyers",
    description: "Smooth operations for industrial needs",
    image: "https://dphengg.com/wp-content/uploads/2022/10/1753806836-1080x675.jpg", // Example for mixtures/conveyers
  },
  {
    title: "AHU Drums & Fans",
    description: "Designed for durability and performance",
    image: "https://moduflow.co.uk/wp-content/uploads/2019/12/hall-roof-2560454_640.jpg", // Example for AHU
  },
  {
    title: "Transformers",
    description: "Built with precision and quality assurance",
    image: "https://ncetest.com/wp-content/uploads/2024/05/shutterstock_1971671024-scaled.jpg", // Example for Transformers
  },
  {
    title: "Vacuum Pumps",
    description: "High-performance solutions for various industries",
    image: "https://cpimg.tistatic.com/04478093/b/8/Dry-Vacuum-Pumps.jpg", // Example for Vacuum Pumps
  },
  {
    title: "Printing Machines",
    description: "Robust machinery for printing industries",
    image: "https://i0.wp.com/printersparts.com/wp-content/uploads/2023/10/Heidelberg-Offset-Printers.jpg?resize=1080%2C675&ssl=1", // Example for Printing Machines
  },
  {
    title: "Spare Parts",
    description: "Complete spare part solutions for all our machines",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVx0KFxpVWMha2ci8YBfpDFHILgCtlQTOhg&s", // Example for Spare Parts
  },
];

export default function SelfChanging() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProductIndex((prevIndex) =>
        (prevIndex + 1) % products.length
      );
    }, 7000); // Change product/image every 7 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProduct = products[currentProductIndex];

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex items-center justify-center p-4">
      {/* Background Image Layer (Carousel Effect) */}
      {products.map((product, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentProductIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${product.image})` }}
        ></div>
      ))}

      {/* Foreground Content Layer (The Blurred Card) */}
      <div className="relative z-10 w-full flex justify-center items-center min-h-screen">
        <div
          className="relative  bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-200 border-opacity-20 rounded-xl shadow-2xl p-8 md:p-12
                     flex flex-col items-center justify-center text-white text-center
                     max-w-7xl w-full md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-7/12
                     min-h-[50vh] transform transition-all duration-500 hover:scale-[1.01] hover:shadow-cyan-500/50 cursor-pointer"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg leading-tight">
            {currentProduct.title}
          </h2>
          <p className="text-2xl md:text-3xl leading-relaxed max-w-4xl drop-shadow-md">
            {currentProduct.description}
          </p>
          <button className="mt-8 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-xl transition-colors duration-300 shadow-lg hover:shadow-xl">
            Explore Product
          </button>
        </div>
      </div>
    </div>
  );
}