import React from "react";

const LandingPage = () => {
  return (
    <div
      className="w-full h-screen relative bg-gradient-to-tr from-gray-500
     to-gray-700 "
    >
      <img
        src="https://images.pexels.com/photos/1054201/pexels-photo-1054201.jpeg"
        alt="climbing"
        className="w-full h-screen object-cover absolute mix-blend-overlay"
      />
      <div className="p-24">
        <h1 className="text-black text-6xl font-bold text-center">
          Los Angeles Mountains
        </h1>
      </div>
    </div>
  );
};

export default LandingPage;
