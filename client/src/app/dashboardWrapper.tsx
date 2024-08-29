import Navbar from "@/components/Navbar";
import React from "react";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`light flex flex-col w-full h-screen bg-gray-50 text-gray-900 `}
    >
      sidebar
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-200 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
