import React from "react";

const features = [
  { title: "Elementor Builder", description: "The most user-friendly drag-and-drop builder for easy web designing.", icon: "📐" },
  { title: "Contact Form 7", description: "A powerful form plugin that integrates seamlessly.", icon: "📩" },
  { title: "Theme Typography", description: "Customize typography with ease and flexibility.", icon: "🔤" },
  { title: "Clean Code", description: "Structured and well-commented code for developers.", icon: "📜" },
  { title: "Google Map", description: "Display location maps easily using Google Maps API.", icon: "🗺️" },
  { title: "Friendly Support", description: "Get fast and responsive customer support anytime.", icon: "💬" },
  { title: "Easy to Customize", description: "Advanced theme options for easy customization.", icon: "⚙️" },
  { title: "Well Documented", description: "Access detailed documentation for quick integration.", icon: "📖" },
  { title: "Google Font", description: "Choose from thousands of Google fonts for typography.", icon: "🔠" },
];

const FeaturesGrid = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-16 px-8">
      <h4 className="text-gray-500 uppercase text-sm">Why Choose Our Theme</h4>
      <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-8">Exclusive Features</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center border">
            <span className="text-4xl">{feature.icon}</span>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGrid;
