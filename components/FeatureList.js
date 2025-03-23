import React from "react";

const features = [
  "⭐ 100% Responsive Design",
  "💡 Awesome Support",
  "🎨 Multiple Unique Demos",
  "✅ Quality Check by Themeforest",
];

const FeatureList = () => {
  return (
    <div className="bg-gradient-to-r from-[#019297] to-[#73ED7C] text-white py-16 px-8 text-center">
      <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold">
        {features.map((feature, index) => (
          <div key={index} className="whitespace-nowrap">
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
