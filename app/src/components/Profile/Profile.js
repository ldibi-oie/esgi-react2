import React from "react";
import Navbar from "../Navbar/Navbar";
export default function Profile() {
  return (
    <>
      <Navbar />
      <div class="bg-white">
        <div>
          <main class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                Mon compte
              </h1>

              <div class="flex items-center">
                <div class="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      aria-expanded="false"
                      aria-haspopup="true"
                    >
                      <svg
                        class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  class="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">View grid</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  type="button"
                  class="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                >
                  <span class="sr-only">Filters</span>
                  <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" class="pt-6 pb-24">
              <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                <div class="lg:col-span-6">
                  <div class="border-4 border-dashed border-gray-200 rounded-lg h-96 lg:h-full">
                    <div className="bg-gray-100">
                      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
                          <svg
                            viewBox="0 0 88 88"
                            className="w-full max-w-screen-xl text-indigo-100"
                          >
                            <circle
                              fill="currentColor"
                              cx="44"
                              cy="44"
                              r="15.5"
                            />
                            <circle
                              fillOpacity="0.2"
                              fill="currentColor"
                              cx="44"
                              cy="44"
                              r="44"
                            />
                            <circle
                              fillOpacity="0.2"
                              fill="currentColor"
                              cx="44"
                              cy="44"
                              r="37.5"
                            />
                            <circle
                              fillOpacity="0.3"
                              fill="currentColor"
                              cx="44"
                              cy="44"
                              r="29.5"
                            />
                            <circle
                              fillOpacity="0.3"
                              fill="currentColor"
                              cx="44"
                              cy="44"
                              r="22.5"
                            />
                          </svg>
                        </div>
                        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
