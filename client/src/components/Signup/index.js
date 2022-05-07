import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      class="flex flex-col h-screen bg-red-100 "
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1494376877685-d3d2559d4f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
      }}
    >
      <div class="bg-grey-lighter min-h-screen flex flex-col mt-8">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 ">
          <div class="bg-white px-6 py-3 rounded shadow-md text-black w-full bg-opacity-5">
            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Sign Up
            </h2>
            <label
              for="email"
              class="block text-xs font-semibold text-white uppercase mt-3 mx-1"
            >
              E-mail
            </label>
            <input
              type="text"
              class="block w-full py-3 px-1 mt-2 rounded-xl bg-gray-700
                    text-gray-800 appearance-none 
                    border-2 border-gray-300
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 "
              name="fullname"
              placeholder="Email"
            />

            <label
              for="email"
              class="block text-xs font-semibold text-white uppercase mt-3 mx-1"
            >
              username
            </label>

            <input
              type="text"
              class="block w-full py-3 px-1 mt-2 rounded-xl bg-gray-700
                    text-gray-800 appearance-none 
                    border-2 border-gray-300
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 "
              name="email"
              placeholder="Username"
            />

            <label
              for="email"
              class="block text-xs font-semibold text-white uppercase mt-3 mx-1"
            >
              password
            </label>

            <input
              type="password"
              class="block w-full py-3 px-1 mt-2 rounded-xl bg-gray-700
                    text-gray-800 appearance-none 
                    border-2 border-gray-300
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 "
              name="password"
              placeholder="Password"
            />
            <label
              for="email"
              class="block text-xs font-semibold text-white uppercase mt-3 mx-1"
            >
             Confirm password
            </label>
            <input
              type="password"
              class="block w-full py-3 px-1 mt-2 rounded-xl bg-gray-700
                    text-gray-800 appearance-none 
                    border-2 border-gray-300
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 "
              name="password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              class="w-full py-3 mt-8 bg-gray-800 rounded-xl
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
            >
              Create Account
            </button>

            <div class="text-center text-sm text-white my-4">
              By signing up, you agree to the 
              <Link
                class="no-underline border-b border-grey-dark text-grey-dark"
                to="#"
              >
                 Terms of Service
              </Link>{" "}
              and
              <Link
                class="no-underline border-b border-grey-dark text-grey-dark"
                to="#"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          <div class="text-grey-dark mt-6">
            Already have an account?
            <Link
              class="no-underline border-b border-blue text-blue"
              to="/login"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
