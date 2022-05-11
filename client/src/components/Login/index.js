import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/signupSignin.jpg";

const Login = ({setLoggedIn}) => {
  return (
    <div
      class="flex flex-col h-screen bg-red-100 "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'right top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
      }}
    >
      <div class="grid place-items-center mx-2 my-20 sm:my-auto ">
        <div
          class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-3/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-white rounded-lg shadow-md lg:shadow-lg bg-opacity-5"
        >
          <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
            Login
          </h2>

          <form class="mt-10" method="POST">
            <label
              for="email"
              class="block text-xs font-semibold text-white uppercase"
            >
              Username
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Username"
              autocomplete="email"
              class="block w-full py-3 px-1 mt-2 rounded-xl bg-gray-700
                    text-gray-800 appearance-none 
                    border-2 border-gray-300
                    focus:text-gray-500 focus:outline-none focus:border-gray-200 "
              required
            />

            <label
              for="password"
              class="block mt-2 text-xs font-semibold text-white uppercase"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
              class="block w-full py-3 px-1 mt-2 rounded-xl bg-gray-700
              text-gray-800 appearance-none 
              border-2 border-gray-300
              focus:text-gray-500 focus:outline-none focus:border-gray-200 "
              required
            />

            <button
              type="submit"
              class="w-full py-3 mt-10 bg-gray-800 rounded-xl
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none"
              onClick={setLoggedIn(true)}
            >
              Login
            </button>

            <div class="sm:flex sm:flex-wrap mt-8 sm:mb-4 text-sm text-center">
              <a
                href="forgot-password"
                class="flex-2 underline font-semibold text-base text-white opacity-60"
              >
                Forgot password?
              </a>

              <p class="flex-1 text-gray-1000 text-md mx-2 my-1 sm:my-auto text-base ">
                or
              </p>

              <Link
                to="/signup"
                class="flex-2 underline font-semibold text-base text-white opacity-60"
              >
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
