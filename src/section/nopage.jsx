 import React from "react";
import { useNavigate } from "react-router";

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md text-center">
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Oops! The page you're looking for doesn't exist.
        </p>
        <button
          onClick={() => navigate("/")}
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NoPage;
