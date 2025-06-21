const products = [
  {
    image: "https://via.placeholder.com/400x300?text=iPhone+13+Pro+Max",
    productName: "iPhone 13 Pro Max",
    description: "Exceptional performance, stunning display, and advanced camera.",
    specialPrice: 720,
    price: 780,
  },
  {
    image: "https://via.placeholder.com/400x300?text=Samsung+Galaxy+S21",
    productName: "Samsung Galaxy S21",
    description: "Vibrant AMOLED display, powerful camera, sleek design.",
    specialPrice: 699,
    price: 799,
  },
  {
    image: "https://via.placeholder.com/400x300?text=Google+Pixel+6",
    productName: "Google Pixel 6",
    description: "Cutting-edge AI features and exceptional photo quality.",
    specialPrice: 400,
    price: 599,
  }
];

const About = () => {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-center mb-8">
          Welcome to QuickShop
        </h1>

        <div className="flex flex-col lg:flex-row items-center gap-8 mb-16">
          <div className="w-full lg:w-1/2 space-y-4">
            <p className="text-lg text-gray-700">
              At QuickShop, we're committed to delivering top-tier products with fast and secure delivery. Explore our curated catalog and experience seamless shopping with confidence.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-lg transition transform hover:-translate-y-1">
              Shop Now
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400?text=QuickShop+Family"
              alt="About QuickShop"
              className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-slate-800 text-center mb-8">Our Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2"
            >
              <img
                src={p.image}
                alt={p.productName}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-xl font-semibold">{p.productName}</h3>
                <p className="text-gray-600 text-sm">{p.description}</p>
                <div className="text-right space-x-2">
                  <span className="text-xl font-bold text-green-600">${p.specialPrice}</span>
                  <span className="line-through text-gray-400">${p.price}</span>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700 transition">
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

export default About;
