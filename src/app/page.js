import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div class="w-full max-w-3xl">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-blue-400 text-sm font-bold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2 "
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-blue-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2 "
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-blue-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2 "
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-blue-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div class="mb-4">
            <label class="block text-blue-400 text-sm font-bold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div class="mb-4">
            <label class="block text-blue-400 text-sm font-bold mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2"
              for="gender"
            >
              Gender <span class="text-red-500">*</span>
            </label>
            <div class="flex flex-col">
              <div class="flex items-center">
                <input
                  class="mr-2 mb-2 shadow appearance-none border-2 border-grey-700 rounded-full w-5 h-5 checked:bg-gray-700 checked:border-transparent focus:outline-none focus:shadow-outline"
                  type="checkbox"
                />
                <span className="text-blue-500 text-xs">M</span>
              </div>
              <div className="flex items-center ">
                <input
                  class="mr-2 shadow appearance-none border-2 border-grey-700 rounded-full w-5 h-5 checked:bg-gray-700 checked:border-transparent focus:outline-none focus:shadow-outline"
                  type="checkbox"
                />
                <span className="text-blue-500 text-xs "> F</span>
              </div>
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2 "
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-blue-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2 "
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-blue-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <div className="flex space-x-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-400 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              class="block text-blue-400 text-sm font-bold mb-2 "
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            >
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-blue-400 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2023 B3. All rights reserved
        </p>
      </div>
    </main>
  );
}
