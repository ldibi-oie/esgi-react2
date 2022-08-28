import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

export default function Friends() {
  return (
    <>
      <Navbar />
      <div class="bg-white">
        <div>
          <main class="mx-auto px-4 sm:px-6 lg:px-8">
            <div class="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                Mes amis
              </h1>
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
                        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                          {/* <div>
                            <img
                              class="object-cover w-24 h-24 rounded-full shadow"
                              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                              alt="Person"
                            />
                            <div class="flex flex-col justify-center mt-2">
                              <p class="text-lg font-bold">Oliver Aguilerra</p>
                              <p class="mb-4 text-xs text-gray-800">
                                Product Manager
                              </p>
                              <p class="text-sm tracking-wide text-gray-800">
                                Pommy ipsum bent as a nine bob note naff off
                                biscuits nowt, a cuppa unhand me sir hadn't done
                                it in donkey's years sod's law.
                              </p>
                            </div>
                          </div> */}
                          {/* {users.map((user) => (
                            <div class="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                              <div class="p-5">
                                <div class="flex items-center justify-center w-10 h-10 mb-4 rounded-full bg-indigo-50">
                                  <svg
                                    class="w-8 h-8 text-deep-purple-accent-400"
                                    stroke="currentColor"
                                    viewBox="0 0 52 52"
                                  >
                                    <polygon
                                      stroke-width="3"
                                      stroke-linecap="round"
                                      strokeLinejoin="round"
                                      fill="none"
                                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                                    ></polygon>
                                  </svg>
                                </div>
                                <p class="mb-2 font-bold">
                                  {user.firstName + " " + user.lastName}
                                </p>
                                <p class="text-sm leading-5 text-gray-900">
                                  Sed ut perspiciatis unde omnis iste. Lorem
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit.
                                </p>
                                <span class="text-sm leading-5 text-gray-900">
                                  {user.city + " ," + user.country}
                                </span>
                                <br />
                                <button
                                  class="btn gap-2"
                                  onClick={() =>
                                    openModal(
                                      user.firstName + " " + user.lastName
                                    )
                                  }
                                >
                                  Ajouter comme ami(e)
                                </button>
                              </div>
                              <div class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"></div>
                            </div>
                          ))} */}
                        </div>
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
