 import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login to DevHub
        </h2>

        <form className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600 dark:text-gray-300">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don’t have an account?{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-400">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
