/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

const NewArrivals = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
       
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <h1 className="text-6xl font-medium text-yellow-400 text-center mb-2 font-poppins">
        New Arrivals
      </h1>

      <p className="text-white mb-10 font-poppins text-center">
        Explore the latest additions to our collection.
      </p>

      <section className="flex flex-wrap items-center justify-center gap-6">
        <a href="#" className="group w-56">
          <img
            className="rounded-lg bg-white w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-top"
            src="https://thanx4askinmerch.com/cdn/shop/files/T4ATSHIRTMOCKUPBLACKANDWHITE2.png?v=1742242713&width=360"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 40.00</p>
        </a>

        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 bg-white object-cover object-right"
            src="https://thanx4askinmerch.com/cdn/shop/files/T4AHOODIEMOCKUPBLACK.png?v=1742242201&width=360"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 39.00</p>
        </a>

        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://thanx4askinmerch.com/cdn/shop/files/T4A_HOODIE_MOCK_UP_CREME.png?v=1742242249&width=360"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 29.00</p>
        </a>

        <a href="#" className="group w-56">
          <img
            className="rounded-lg w-full group-hover:shadow-xl hover:-translate-y-0.5 duration-300 transition-all h-72 object-cover object-right"
            src="https://thanx4askinmerch.com/cdn/shop/files/T4ATSHIRTMOCKUPGREYANDWHITE.png?v=1742242713&width=360"
            alt="White crew-Neck T-Shirt"
          />
          <p className="text-sm mt-2">White crew-Neck T-Shirt</p>
          <p className="text-xl">$ 49.00</p>
        </a>
      </section>
    </>
  );
};

export default NewArrivals;