import React from "react";

interface StatCardProps {
  title: string;
  count: number;
  bg: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, count, bg }) => {
  return (
    <div
      className={`w-full max-w-xs ${bg} rounded-lg shadow-lg transition-transform hover:scale-105 m-4 p-4`}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-xl sm:text-2xl font-bold text-black tracking-wide text-center">
          {title}
        </h1>
        <p className="text-9xl font-bold text-black text-center">{count}</p>
      </div>
    </div>
  );
};

export default StatCard;
