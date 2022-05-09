import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div 
    class="flex flex-col h-screen bg-red-100 justify-center items-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`,
      backgroundPosition: 'right top',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'
    }}
    >
          <div class="flex">
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1620247405684-8352d6d7ce09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')`,
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                opacity: '1'
              }}
            ></div>

            <div class="w-full lg:w-1/2 bg-gray-800 p-5 rounded-lg lg:rounded-l-none opacity-80">
              <div class="px-8 mb-4 text-center">
                <h3 class="pt-4 mb-2 text-2xl text-white">Forgot Your Password?</h3>
                <p class="mb-4 text-sm text-white">
                  We get it, stuff happens. Just enter your email address below
                  and we'll send you a link to reset your password!
                </p>
              </div>
              <form class="px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded">
                <div class="mb-4">
                  <label
                    class="block mb-2 text-sm font-bold text-white"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Enter Email Address..."
                  />
                </div>
                <div class="mb-6 text-center">
                  <button
                    class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Reset Password
                  </button>
                </div>
                <hr class="mb-6 border-t" />
                <div class="text-center">
                  <Link
                    class="inline-block text-sm text-white align-baseline underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."
                    to="/signup"
                  >
                    Create an Account!
                  </Link>
                </div>
                <div class="text-center">
                  <Link
                    class="inline-block text-sm text-white align-baseline underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ..."
                    to="/login"
                  >
                    Already have an account? Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
    </div>
  );
};

export default ForgetPassword;
