import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Life and Business Coach WordPress Theme
          </h1>

          <div className="flex justify-center space-x-4">
            <Link href="#demo" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">
              Explore Demos
            </Link>
            <Link href="https://1.envato.market/infine-wp" target="_blank" rel="noopener noreferrer" className="bg-purple-500 text-white px-6 py-3 rounded-md hover:bg-purple-600">
              Purchase Now
            </Link>
          </div>
        </div>

        {/* Banner Image */}
        <div className="mt-12">
          <img
            src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-banner-1024x576.png"
            alt="Banner"
            width={800}
            height={450}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
