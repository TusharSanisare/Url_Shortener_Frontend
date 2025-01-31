import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 oops">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
      <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        {message ? message : "An unexpected error has occured"}
      </p>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
      >
        Go back to home
      </button>
      <img
        className="sm:w-[480px] w-[400px] object-cover rounded-md"
        src="../src/assets/images/oops1.jpg"
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
