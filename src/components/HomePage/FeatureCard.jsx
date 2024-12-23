import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white shadow-lg shadow-orange-500 rounded-lg">
      <div className="text-orange-500 text-4xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
