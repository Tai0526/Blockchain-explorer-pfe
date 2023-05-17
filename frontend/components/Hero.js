import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection() {
  const [showResult, setShowResult] = useState(true);
  const [blockResult, setBlockResult] = useState([]);
  const [transactionsResult, setTransactionsResult] = useState([]);
  const [ethPrice, setEthPrice] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [latestBlock, setLatestBlock] = useState("");

  useEffect(() => {
    const getEthPrice = async () => {
      const response = await axios.get(`http://localhost:5001/getethprice`, {});
      setEthPrice(response.data.usdPrice);
    };

    const getBlockInfo = async () => {
      const response = await axios.get(
        `http://localhost:5001/getblockinfo`,
        {}
      );
      console.log("rrr", response);

      const blockArray = [
        response.data.previousBlockInfo[1],
        response.data.previousBlockInfo[2],
        response.data.previousBlockInfo[3],
        response.data.previousBlockInfo[4],
        response.data.previousBlockInfo[5],
      ];

      const transactions = [response.data.previousBlockInfo[0].transactions];

      console.log("transactions", transactions[0]);
      setTotalTransactions(
        response.data.previousBlockInfo[1].totalTransactions
      );
      setLatestBlock(response.data.latestBlock);
      setBlockResult(blockArray);
      setTransactionsResult(response.data.previousBlockInfo[0].transactions);
    };

    getEthPrice();
    getBlockInfo();
  }, []);

  const limitTransactions = (transactions) => {
    const limit = 5;
    const limitedTransactions = transactions.slice(0, limit);
    return limitedTransactions;
  };

  return (
    <section className="mt-[-4.5rem] pb-[5rem]">
      {showResult && (
        <section className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <section className="md:px-[8rem]">
            <section className="md:flex md:justify-between bg-[#37203d] md:h-[11rem] md:mx-[0 11.5rem] border-gray-500 rounded-[1rem] shadow-[#222222] shadow-lg">
              <section className="flex flex-col justify-evenly w-full text-gray-300 letter-spacing-[0.01rem] px-[0.5rem] py-[1rem] border-r-[1px] border-gray-500">
                <section className="flex items-center h-[4rem] md:w-[15rem] md:h-[5rem] md:pl-[2rem]">
                  <section className="text-center md:w-[2.2rem]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 417"
                      preserveAspectRatio="xMidYMid"
                      className={styles.svgEth}
                    >
                      <script
                        xmlns=""
                        id="argent-x-extension"
                        data-extension-id="dlcobpjiigpikoobohmabehhmhfoodbb"
                      />
                      <path
                        fill="#fff"
                        d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                      />
                      <path
                        fill="#fff"
                        d="M127.962 0L0 212.32l127.962 75.639V154.158z"
                      />
                      <path
                        fill="#fff"
                        d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
                      />
                      <path
                        fill="#fff"
                        d="M127.962 416.905v-104.72L0 236.585z"
                      />
                      <path
                        fill="#eee"
                        d="M127.961 287.958l127.96-75.637-127.96-58.162z"
                      />
                      <path fill="#bbb" d="M0 212.32l127.96 75.638v-133.8z" />
                      <script
                        xmlns=""
                        type="text/javascript"
                        src="chrome-extension://fnnegphlobjdpkhecapkijjdkgcjhkib/inject-script.js"
                        id="one-x-extension"
                        data-extension-id="fnnegphlobjdpkhecapkijjdkgcjhkib"
                      />
                    </svg>
                  </section>
                  <section>
                    <p>ETHER PRICE</p>
                    <p>${Number(ethPrice).toFixed(2)}</p>
                  </section>
                </section>
                <span className="w-full border-gray-500 border-b-[1px]"></span>
                <section className="flex items-center h-[4rem] md:w-[15rem] md:h-[5rem] md:pl-[2rem]">
                  <section className="text-center md:w-[2.2rem]">
                    <FontAwesomeIcon
                      icon={faGlobe}
                      className="mr-[1rem] md:text-xl md:mr-[0.5rem]"
                    />
                  </section>
                  <section>
                    <p>MARKET CAP</p>
                    <p>$223,920,408,826.00</p>
                  </section>
                </section>
                <span className="w-full border-gray-500 border-b-[1px] pb-5 md:pb-0 md:border-b-[1px] md:border-[#37203d]"></span>
              </section>
              <section className="flex flex-col justify-evenly w-full text-gray-300 letter-spacing-01 px-[0.5rem] py-[1rem] border-r-[1px] border-gray-500">
                <section className="flex items-center mt-[-2rem] h-[5rem] md:mt-0 md:w-[15rem] md:h-[5rem] md:pl-[2rem]">
                  <section className="text-center md:w-[2.2rem]">
                    <FontAwesomeIcon
                      icon={faServer}
                      className="font-[1.3rem] mr-[0.5rem]"
                    />
                  </section>
                  <section>
                    <p>TRANSACTIONS</p>
                    <p>{totalTransactions}</p>
                  </section>
                </section>
                <span className="w-full border-gray-500 border-b-[1px]"></span>
                <section className="flex items-center h-[4rem] md:w-[15rem] md:h-[5rem] md:pl-[2rem]">
                  <section className="text-center md:w-[2.2rem]">
                    <FontAwesomeIcon
                      icon={faGauge}
                      className="font-[0.5rem] mr-[0.5rem] md:font-[1.3rem] md:mr-[0.5rem]"
                    />
                  </section>
                  <section>
                    <p>LAST FINALIZED BLOCK</p>
                    <p>{latestBlock}</p>
                  </section>
                </section>
                <span className="w-full border-gray-500 border-b-[1px] pb-3 md:pb-0 md:border-b-[1px] md:border-[#37203d]"></span>
              </section>
              <section className="custom-section flex flex-col justify-evenly w-full text-gray-300 letter-spacing-01 px-05 py-1 border-gray-700">
                <section className="w-full h-full">
                  <p className="p-[1rem]">Average Transaction Value</p>
                </section>
              </section>
            </section>
          </section>
          <section className="flex sm:flex-wrap content-evenly justify-between w-[80%] m-auto mt-8">
            <section className="flex-col items-center bg-[#37203d] w-[49.5%] h-full rounded-[1rem] shadow-lg shadow-[#4d4b4d]">
              <section className="flex justify-start items-center w-full h-[4rem] p-[1.2rem] text-white text-lg text-extrabold border-b border-gray-500 ">
                Latest Blocks
              </section>
              <table className="flex justify-center items-center text-gray-300">
                <tbody className="w-[95%]">
                  {blockResult.map((block) => {
                    return (
                      <tr
                        className={`flex justify-between items-center border-b-[1px] border-gray-500 w-full h-[5rem] pr-0 pl-[1rem] ${
                          blockResult.indexOf(block) ==
                            blockResult.length - 1 && styles.lastTd
                        }`}
                        key={block.blockNumber}
                      >
                        <td className={styles.tdIcon}>
                          <FontAwesomeIcon icon={faCube} />
                        </td>
                        <td className={styles.tdBlock}>
                          <section className={styles.blueText}>
                            {block.blockNumber}
                          </section>
                          <section>
                            {moment(block.time, "YYYYMMDD").fromNow()}
                          </section>
                        </td>
                        <td className={styles.tdTxns}>
                          <section>
                            Fee Recipient{" "}
                            <span className={styles.blueText}>
                              {block.miner.slice(0, 6)}...
                              {block.miner.slice(36)}
                            </span>
                          </section>
                          <section>
                            <span className={styles.blueText}>
                              {block.totalTransactions} txns
                            </span>
                          </section>
                        </td>
                        <td className={styles.tdValue}>{block.gasUsed} Eth</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className="text-l text-white p-4 text-bold">
                <Link href="/blocks">View All</Link>
              </button>
            </section>
            <section className="flex-col bg-[#37203d] w-[49.5%] h-full rounded-[1rem] shadow-md shadow-[#666566]">
              <section className="flex justify-start items-center w-full h-[4rem] p-[1.2rem] text-white text-lg text-extrabold border-b border-gray-500 ">
                Latest Transactions
              </section>
              <table className={styles.latestResults_body_table}>
                <tbody>
                  {limitTransactions(transactionsResult).map((txn) => {
                    return (
                      <tr
                        className={`${styles.latestResults_body_tr} ${
                          transactionsResult.indexOf(txn) ==
                            transactionsResult.length - 1 && styles.lastTd
                        }`}
                        key={txn.transactionHash}
                      >
                        <td className={styles.tdContract}>
                          <FontAwesomeIcon
                            icon={faFileContract}
                            className={styles.tdContract}
                          />
                        </td>
                        <td className={styles.tdBlock}>
                          <section className={styles.blueText}>
                            {txn.transactionHash?.slice(0, 14)}...
                          </section>
                          <section>
                            {moment(txn.time, "YYYYMMDD").fromNow()}
                          </section>
                        </td>
                        <td className={styles.tdFromTo}>
                          <section>
                            From{" "}
                            <span className={styles.blueText}>
                              {txn.fromAddress?.slice(0, 6)}...
                              {txn.fromAddress?.slice(36)}
                            </span>
                          </section>
                          <section>
                            To{" "}
                            <span className={styles.blueText}>
                              {txn.toAddress?.slice(0, 6)}...
                              {txn.toAddress?.slice(36)}
                            </span>
                            <span className={styles.blueText}>
                              {txn.totalTransactions}
                            </span>
                          </section>
                        </td>
                        <td className={styles.tdValue}>
                          {(Number(txn.value) / 10 ** 18).toFixed(4)} Eth
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className="text-l text-white p-4 text-bold">
                <Link href="/transactions">View All</Link>
              </button>
            </section>
          </section>
        </section>
      )}
    </section>
  );
}
