import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

import Logo from "../public/logo-final.png";

export default function Header() {
  const [ethPrice, setEthPrice] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await axios.get("http://localhost:5001/getethprice", {});
      setEthPrice(response.data.usdPrice);
    };

    getEthPrice();
  });

  return (
    // <section className={styles.header}>
    //   <section className={styles.topHeader}>
    //     ETH Price:{" "}
    //     <span className={styles.blueText}>${Number(ethPrice).toFixed(2)}</span>
    //   </section>
    //   <section className={styles.navbar}>
    //     <Image src={Logo} alt="BlockchainX logo" className={styles.logo} />
    //     <section className={styles.menu}>
    //       <p>Home</p>
    //       <p>
    //         Blockchain
    //         <span className={styles.arrow}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </p>
    //       <p>
    //         Token
    //         <span className={styles.arrow}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </p>
    //       <p>
    //         NFTs
    //         <span className={styles.arrow}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </p>
    //       <p>
    //         Resources
    //         <span className={styles.arrow}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </p>
    //       <p>
    //         Developers
    //         <span className={styles.arrow}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </p>
    //       <p>
    //         More
    //         <span className={styles.arrow}>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 24 24"
    //             fill="currentColor"
    //             className="w-6 h-6"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //         </span>
    //       </p>
    //       <p>|</p>
    //       <p className={styles.signIn}>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className={styles.profile}
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
    //           />
    //         </svg>
    //         Sign In
    //       </p>
    //     </section>
    //   </section>
    // </section>
    <div>
      <nav className=" bg-gray-900">
        <section className="bg-indigo-900 fixed w-full z-20 top-0 left-0 border-b border-indigo-800 p-2 text-sm text-gray-400 pl-10">
          ETH Price:{" "}
          <span className="text-blue-500">${Number(ethPrice).toFixed(2)}</span>
          &nbsp; Gas: {""}
          <span className="text-blue-500">30 Gwei</span>
        </section>
      </nav>
      <nav className=" bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 mt-9">
          <Link href="/" class="flex items-center">
            <Image src={Logo} alt="BlockchainX logo" className={styles.logo} />
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Blocks
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Transactions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
