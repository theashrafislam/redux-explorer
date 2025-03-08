import React from "react";

const TotalCount = ({ total }) => {
  return (
    <div className="bg-white shadow-xl p-6 rounded-lg text-center mt-4 border-t-4 border-blue-500">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Total Count</h2>
      <p className="text-3xl font-semibold text-blue-700">{total}</p>
    </div>
  );
};

export default TotalCount;