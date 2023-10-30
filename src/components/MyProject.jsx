import React from "react";

const MyProject = () => {
  return (
    <div className="hello">
      <div class="flex items-center justify-center h-screen hello1">
        <div class="bg-white font-semibold text-center rounded-xl border shadow-lg p-10 max-w-xl">
          <img
            class="mb-3 w-full h-32 shadow-lg mx-auto"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="product designer"
          />
          <h1 class="text-lg text-gray-700"> John Doe </h1>
          <h3 class="text-sm text-gray-400 "> Creative Director </h3>
          <p class="text-xs text-gray-400 mt-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button class="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
