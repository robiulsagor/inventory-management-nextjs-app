import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`light flex flex-col w-full h-screen bg-gray-50 `}>
      d{children}
    </div>
  );
};

export default DashboardWrapper;
