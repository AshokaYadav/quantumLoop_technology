import React from "react";

const GetInTouch = () => {
  return (
    <div className="bg-gradient-to-r from-[#019297] to-[#73ED7C] text-white py-16 px-8 text-center">
      <h2 className="text-4xl font-bold mb-4">
        Get Informed and Create a Professional Website Today!
      </h2>

      <ul className="flex justify-center space-x-6 mt-4">
        <li className="flex items-center space-x-2">
          <span className="text-yellow-300 text-xl">⭐</span>
          <span>High-Quality Designs</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-yellow-300 text-xl">🔧</span>
          <span>Easy Customization</span>
        </li>
        <li className="flex items-center space-x-2">
          <span className="text-yellow-300 text-xl">🚀</span>
          <span>Fast Performance</span>
        </li>
      </ul>

      {/* Purchase Button */}
      <div className="ekit-btn-wraper mt-6">
        <a
          href="https://1.envato.market/infine-wp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-lg font-semibold text-white rounded-lg transition-all duration-300"
          style={{
            backgroundImage: "linear-gradient(90deg, #019297 0%, #73ED7C 100%)",
          }}
        >
          Purchase Now
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-2/3 mx-auto my-6 border-t border-white"></div>

      {/* Copyright Text */}
      <p className="text-sm">
        Copyright © Infine All Rights Reserved. Powered by Awaiken
      </p>
    </div>
  );
};

export default GetInTouch;
