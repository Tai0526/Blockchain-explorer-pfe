import { useState } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { Bean, Beans } from "@web3uikit/icons";
import { Illustration } from "@web3uikit/core";

import SearchResults from "./SearchResults.js";

export default function Search() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = async () => {
    document.querySelector("#inputField").value = "";

    const response = await axios.get(
      "https://blockchain-x-api.onrender.com/address",
      {
        params: { address: searchInput },
      }
    );

    setResult(response.data.result);
    setShowResult(true);
  };

  return (
    <section className="bg-[#8f539e7e] ">
      <section className="flex max-w-full custom-img h-[17rem] justify-center md:px-[11.5rem] md:pt-[3rem]">
        <section className="md:mt-0 mt-[3rem]">
          <h3 className="pl-2 md:pl-0 text-xl md:text-normal pb-[1rem] md:text-2xl leading-tight text-white">
            The Ethereum Blockchain Explorer
          </h3>
          <section className="flex items-center w-[23rem] md:w-[51rem] h-[3rem] border-purple-700 rounded-md bg-[#4c2a557e]">
            <input
              className=" w-[19.5rem] md:w-[47rem] ml-2 mr-2 text-gray-200 h-[2rem] md:h-[2rem] pl-[1rem] md:pl-[2rem] border-none bg-transparent text-[1rem] placeholder:text-gray-400 placeholder:text-base focus:transparent"
              type="text"
              id="inputField"
              name="inputField"
              maxLength="120"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              required
              onChange={changeHandler}
            />
            <button
              className="flex justify-center items-center w-[2rem] h-[2rem] text-[1rem] bg-blue-500 border-none rounded-md cursor-pointer"
              onClick={handleSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-[1.1rem]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </section>
        </section>
      </section>
      {showResult && <SearchResults result={{ result, searchInput }} />}
    </section>
  );
}
