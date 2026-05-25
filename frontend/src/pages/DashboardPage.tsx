import React from "react";
const HomePage: React.FC = () => {
  return (
    <div className="bg-fuchsia-700 w-full h-screen">
      <div className="flex flex-row h-80 gap-4">
        <div className="w-1/4 bg-amber-200 rounded-lg m-4">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            APPLIED
          </h1>
        </div>
        <div className="w-1/4 bg-green-500 rounded-lg m-4">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            OFFERED
          </h1>
        </div>
        <div className="flex-3/12 bg-yellow-400 rounded-lg m-4">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            PENDING
          </h1>
        </div>
        <div className="flex-3/12 bg-red-500 rounded-lg m-4">
          <h1 className="text-3xl font-bold text-black mb-6 text-center">
            REJECTED
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
