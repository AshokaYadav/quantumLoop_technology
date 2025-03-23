import React from "react";
import Image from "next/image";

const demoImages = [
  {
    src: "https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-home.jpg",
    alt: "Home - Image Background",
    title: "Home - Image Background",
  },
  {
    src: "https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-home-video.jpg",
    alt: "Home - Video Background",
    title: "Home - Video Background",
  },
  {
    src: "https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/10/infine-home-slider.jpg",
    alt: "Home - Slider Background",
    title: "Home - Slider Background",
  },
];

const PremiumDemos = () => {
  return (
    <section className="py-16 px-6 md:px-20 text-center bg-gray-50">
      <p className="text-gray-500 text-sm">Select one of the Ready-Made Layouts</p>
      <h2 className="text-3xl font-bold text-gray-900 mt-2">Premium Demos</h2>

      {/* Buttons */}
      <div className="mt-4 flex justify-center space-x-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600 transition">
          Home Page
        </button>
        <button className="border border-gray-400 text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
          Inner Pages
        </button>
      </div>

      {/* Images Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {demoImages.map((image, index) => (
          <div key={index} className="border-2 border-green-400 p-2 rounded-lg shadow-lg">
            <Image src={image.src} alt={image.alt} width={300} height={220} className="rounded-md" />
            <p className="mt-2 text-gray-900 text-sm font-medium">{image.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumDemos;
