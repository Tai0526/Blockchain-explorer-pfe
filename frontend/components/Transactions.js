import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import { faFileContract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";

const Transactions = () => {
  const [blockResult, setBlockResult] = useState([]);
  const [transactionsResult, setTransactionsResult] = useState([]);

  const [totalTransactions, setTotalTransactions] = useState("");
  const [latestBlock, setLatestBlock] = useState("");

  useEffect(() => {
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

    getBlockInfo();
  }, []);

  return (
    <>
      <section className="w-screen">
        <section className="flex justify-center  h-[17rem] pt-[3rem] p-[0 11.5rem] custom-img">
          <div className=" flex items-center justify-center text-center text-white text-4xl font-semibold">
            <h2>Transactions</h2>
          </div>
        </section>
      </section>
      {/* <section className={styles.searchResults}>
        <section className=" flex items-center justify-center text-center text-white text-2xl font-semibold p-5">
          Latest Transactions
        </section>
        <table className={styles.txnSection}>
          <tbody>
            {transactionsResult.map((txn) => {
              return (
                <tr
                  className={`${styles.txnTitle} ${
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
                    <section>{moment(txn.time, "YYYYMMDD").fromNow()}</section>
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
      </section> */}
    </>
  );
};

export default Transactions;
