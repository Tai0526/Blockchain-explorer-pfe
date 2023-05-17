import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import Logo from "../public/logo-final.png";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };
  const [ethPrice, setEthPrice] = useState("");
  const router = useRouter();
  const currentRoute = router.pathname;

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);

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

          {/**Mobile button */}
          <div onClick={handleNav} className="block sm:hidden z-10">
            {nav ? (
              <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
            ) : (
              <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
            )}
          </div>
          {/**Mobile Menu */}
          <div
            className={
              nav
                ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
                : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }
          >
            <ul>
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
