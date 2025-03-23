import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-500 to-green-300 py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="max-w-lg text-center md:text-left">
        <p className="text-sm text-gray-900 font-medium uppercase">#1 Page Builder</p>
        <h1 className="text-4xl font-bold text-white leading-tight mt-2">
          Customize Everything With <br /> Elementor Page Builder
        </h1>
        <p className="text-white mt-4">
          Infine is a beautifully crafted Elementor WordPress Theme that has been built 
          to be a fully-fledged site-building tool.
        </p>

        {/* Features List */}
        <div className="mt-6 grid grid-cols-2 gap-2 text-white text-sm">
          <p>✨ Drag and Drop Editor</p>
          <p>✨ 100+ Premium Widgets</p>
          <p>✨ Header and Footer Builder</p>
          <p>✨ Responsive Editing</p>
          <p>✨ Mega-Menu Builder</p>
        </div>

        {/* Button */}
        <button className="mt-6 bg-black text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-gray-800 transition">
          Purchase Now
        </button>
      </div>

      {/* Right Image */}
      <div className="mt-8 md:mt-0">
        <Image 
          src="https://demo.awaikenthemes.com/landing/wp-content/uploads/2024/11/infine-elementor-300x220.jpg" 
          alt="Elementor Page Builder"
          width={400}
          height={320}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default Hero;
