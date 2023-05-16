import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import Logo from "../public/logo-final.png";

export default function Header() {
  const [ethPrice, setEthPrice] = useState("");
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await axios.get("http://localhost:5001/getethprice", {});
      setEthPrice(response.data.usdPrice);
    };

    getEthPrice();
  });

  return (
    <div>
      <nav className=" bg-[#37203D]">
        <section className="bg-gradient-to-r from-violet-500 to-fuchsia-500 fixed w-full z-20 top-0 left-0  p-2 text-sm text-white pl-10">
          ETH Price:{" "}
          <span className="text-blue-900">${Number(ethPrice).toFixed(2)}</span>
          &nbsp; Gas: {""}
          <span className="text-blue-900">83 Gwei</span>
        </section>
      </nav>
      <nav className=" bg-[#37203D] w-full ">
        <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1 mt-9">
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
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-[#37203D] ">
              <li>
                <a
                  href="/"
                  className={
                    currentRoute === "/"
                      ? " block py-2 pl-3 pr-4  rounded  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 "
                      : "block py-2 pl-3 pr-4  rounded  md:bg-transparent  md:p-0 dark:text-white "
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className={
                    currentRoute === "/about"
                      ? " block py-2 pl-3 pr-4  rounded  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 "
                      : "block py-2 pl-3 pr-4  rounded  md:bg-transparent  md:p-0 dark:text-white "
                  }
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/blocks"
                  className={
                    currentRoute === "/blocks"
                      ? " block py-2 pl-3 pr-4  rounded  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 "
                      : "block py-2 pl-3 pr-4  rounded  md:bg-transparent  md:p-0 dark:text-white "
                  }
                >
                  Blocks
                </a>
              </li>
              <li>
                <a
                  href="/transactions"
                  className={
                    currentRoute === "/transactions"
                      ? " block py-2 pl-3 pr-4  rounded  md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 "
                      : "block py-2 pl-3 pr-4  rounded  md:bg-transparent  md:p-0 dark:text-white "
                  }
                >
                  Transactions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
