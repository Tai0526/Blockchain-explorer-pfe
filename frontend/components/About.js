import React from "react";

const About = () => {
  return (
    <>
      <section className="flex justify-center h-[17rem] pt-[3rem] p-[0 11.5rem] custom-img-2">
        <div className=" flex items-center justify-center text-center text-white text-5xl font-bold mb-2">
          <h2>About Us</h2>
        </div>
      </section>

      <section class="bg-[#37203D] custom-img">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div class="bg-[#4d2b55] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
            <a
              href="#"
              class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
            >
              Welcome to Blockchain-X
            </a>
            <h1 class="text-white text-3xl md:text-5xl font-extrabold mb-2">
              What is Blockchain-X?
            </h1>
            <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
              At Blockchain-X, we are passionate about cryptocurrencies and
              believe in the power of blockchain technology. Our mission is to
              provide users with a comprehensive platform to track transactions,
              analyze data, and gain valuable insights into the world of
              cryptocurrencies.
            </p>
          </div>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-[#4d2b55] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
              >
                What We Offer
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Transaction Tracking
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Our website allows you to view all transactions of major
                cryptocurrencies directly from their respective blockchains.
                Stay up-to-date with the latest transaction data, including the
                sender and recipient addresses, transaction amounts, and
                timestamps.
              </p>
            </div>
            <div class="bg-[#4d2b55] border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
              <a
                href="#"
                class="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
              >
                What We Offer
              </a>
              <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                Statistical Analysis
              </h2>
              <p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                We go beyond simple transaction viewing by providing advanced
                statistical analysis. Our platform enables you to calculate and
                explore various statistics related to exchanges, owners, and
                transaction amounts. Gain valuable insights into transaction
                trends and patterns to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
