import { Link } from "react-router-dom";
import { motion } from "motion/react";
import ProductCard from "../components/ui/ProductCard";
import Button from "../components/ui/Button";
import { Star, CheckCircle2 } from "lucide-react";

const newArrivals = [
  {
    id: 1,
    name: "T shirt with Tape Details",
    price: 120,
    image: "/assests/TShirtWithTapeDetails.png",
  },
  {
    id: 2,
    name: "Skinny Fit Jeans",
    price: 240,
    oldPrice: 260,
    discount: "-20%",
    image: "/assests/SkinnyFitJeans.png",
  },
  {
    id: 3,
    name: "Checkered Shirt",
    price: 180,
    image: "/assests/CheckeredShirt.png",
  },
  {
    id: 4,
    name: "Sleeve Striped T shirt",
    price: 130,
    oldPrice: 160,
    discount: "-30%",
    image: "/assests/ShirtSleeveStriped.png",
  },
];

const topSelling = [
  {
    id: 5,
    name: "Vertical Striped Shirt",
    price: 212,
    oldPrice: 232,
    discount: "-20%",
    image: "/assests/VerticalStriped.png",
  },
  {
    id: 6,
    name: "Courage Graphic T shirt",
    price: 145,
    image: "/assests/CourageGraphicTshirt.png",
  },
  {
    id: 7,
    name: "T shirt with Tape Details",
    price: 120,
    image: "/assests/TShirtWithTapeDetails.png",
  },
  {
    id: 8,
    name: "Faded Skinny Jeans",
    price: 210,
    image: "/assests/FadedSkinnyJean.png",
  },
];

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="pt-10 lg:pt-20 overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 z-10"
            >
              <h1 className="text-5xl md:text-6xl lg:text-[64px] leading-[1.1] mb-6 uppercase">
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </h1>
              <p className="text-gray-600 mb-8 max-w-md text-base md:text-lg">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <Link to="/shop" className="block w-full sm:w-auto">
                <Button className="w-full sm:w-[210px] rounded-full">
                  Shop Now
                </Button>
              </Link>

              {/* Stats */}
              <div className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-start gap-x-8 gap-y-4 mt-12 mb-10 lg:mb-0">
                <div className="text-center sm:text-left pr-8 sm:border-r border-gray-300">
                  <h3 className="font-brutal text-4xl mb-1">200+</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    International Brands
                  </p>
                </div>
                <div className="text-center sm:text-left pr-8 sm:border-r border-gray-300">
                  <h3 className="font-brutal text-4xl mb-1">2,000+</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    High-Quality Products
                  </p>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-brutal text-4xl mb-1">30,000+</h3>
                  <p className="text-sm text-gray-500 font-medium">
                    Happy Customers
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative flex justify-center"
            >
              {/* Stars decoration */}
              <motion.svg
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-10 w-12 h-12 text-black"
                viewBox="0 0 100 100"
              >
                <polygon
                  points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"
                  fill="currentColor"
                />
              </motion.svg>
              <motion.svg
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/2 left-0 w-8 h-8 text-black"
                viewBox="0 0 100 100"
              >
                <polygon
                  points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40"
                  fill="currentColor"
                />
              </motion.svg>

              <img
                src="/assests/HeroImage.png"
                alt="Fashion Couple"
                className="w-full max-w-[500px] object-cover object-top h-[500px] lg:h-[650px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brands Banner */}
      <div className="bg-black py-8 lg:py-16 border-y-2 border-black">
        <div className="container mx-auto px-4 overflow-hidden">
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center justify-between min-w-max gap-16 text-white font-brutal text-3xl uppercase"
          >
            <span>VERSACE</span>
            <span>ZARA</span>
            <span>GUCCI</span>
            <span>PRADA</span>
            <span>CALVIN KLEIN</span>
            <span>VERSACE</span>
            <span>ZARA</span>
            <span>GUCCI</span>
            <span>PRADA</span>
            <span>CALVIN KLEIN</span>
          </motion.div>
        </div>
      </div>

      {/* New Arrivals */}
      <section className="py-16 lg:py-24 container mx-auto px-4 md:px-6 lg:px-8 border-b-2 border-black">
        <h2 className="text-center text-4xl lg:text-5xl uppercase tracking-tight mb-12">
          NEW ARRIVALS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop?new=true">
            <Button
              variant="outline"
              className="w-full md:w-auto rounded-full px-12"
            >
              View All
            </Button>
          </Link>
        </div>
      </section>

      {/* Top Selling */}
      <section className="py-16 lg:py-24 container mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-center text-4xl lg:text-5xl uppercase tracking-tight mb-12">
          TOP SELLING
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {topSelling.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop?topselling=true">
            <Button
              variant="outline"
              className="w-full md:w-auto rounded-full px-12"
            >
              View All
            </Button>
          </Link>
        </div>
      </section>

      {/* Browse By Dress Style */}
      <section className="py-10 container mx-auto px-4 md:px-6 lg:px-8 mb-20 border-b-2 border-black pb-24">
        <div className="bg-[#F0F0F0] rounded-3xl p-6 md:p-12 lg:p-16 border-2 border-black">
          <h2 className="text-center text-3xl md:text-5xl uppercase tracking-tight mb-10">
            BROWSE BY DRESS STYLE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <Link
              to="/shop?style=casual"
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden md:col-span-1 border-2 border-black transition-colors"
            >
              <img
                src="/assests/Casual.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Casual"
              />
              <h3 className="absolute top-6 left-6 font-heading font-bold text-2xl uppercase bg-white/90 px-4 py-1 rounded">
                Casual
              </h3>
            </Link>
            <Link
              to="/shop?style=formal"
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden md:col-span-2 border-2 border-black transition-colors"
            >
              <img
                src="/assests/Formal.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Formal"
              />
              <h3 className="absolute top-6 left-6 font-heading font-bold text-2xl uppercase bg-white/90 px-4 py-1 rounded">
                Formal
              </h3>
            </Link>
            <Link
              to="/shop?style=party"
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden md:col-span-2 border-2 border-black transition-colors"
            >
              <img
                src="/assests/Party.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Party"
              />
              <h3 className="absolute top-6 left-6 font-heading font-bold text-2xl uppercase bg-white/90 px-4 py-1 rounded">
                Party
              </h3>
            </Link>
            <Link
              to="/shop?style=gym"
              className="group relative h-48 md:h-64 rounded-2xl overflow-hidden md:col-span-1 border-2 border-black transition-colors"
            >
              <img
                src="/assests/Gym.png"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt="Gym"
              />
              <h3 className="absolute top-6 left-6 font-heading font-bold text-2xl uppercase bg-white/90 px-4 py-1 rounded">
                Gym
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-6 lg:px-8 overflow-hidden w-full">
        <h2 className="container mx-auto text-4xl lg:text-5xl uppercase tracking-tight mb-10 text-left">
          OUR HAPPY CUSTOMERS
        </h2>
        <div className="relative w-full">
          <motion.div
            initial={{ x: "0%" }}
            animate={{ x: "-50%" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex w-max gap-6 pb-8"
          >
            {[
              {
                name: "Sarah M.",
                text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
              },
              {
                name: "Alex K.",
                text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.",
              },
              {
                name: "James L.",
                text: "As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co.",
              },
              {
                name: "Mooen",
                text: "The shipping was incredibly fast and the customer service team was very helpful. I will definitely be shopping here again for my summer wardrobe.",
              },
              {
                name: "Sarah M.",
                text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
              },
              {
                name: "Alex K.",
                text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes.",
              },
              {
                name: "James L.",
                text: "As someone who's always on the lookout for unique fashion pieces. I'm thrilled to have stumbled upon Shop.co.",
              },
              {
                name: "Mooen",
                text: "The shipping was incredibly fast and the customer service team was very helpful. I will definitely be shopping here again for my summer wardrobe.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[400px] max-w-[400px] border-2 border-black rounded-3xl p-8 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} fill="currentColor" />
                  ))}
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                  {review.name}
                  <CheckCircle2
                    size={18}
                    className="text-green-500"
                    fill="currentColor"
                    color="white"
                  />
                </h3>
                <p className="text-gray-600">"{review.text}"</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
