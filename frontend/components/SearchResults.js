import moment from "moment";
import styles from "@/styles/Home.module.css";

export default function SearchResults(props) {
  return (
    <section className={styles.searchResults}>
      <p className="flex items-left justify-left text-left text-white text-xl font-semibold p-1">
        Latest 25 from a total of &nbsp;{"  "}
        <span className={styles.blueText}>{props.result.result.length}</span>
        -transactions
      </p>
      <table className={styles.txnSection}>
        <thead>
          <tr className={styles.txnTitle}>
            <th>Transaction Hash</th>
            <th>Method</th>
            <th>Block</th>
            <th className={styles.blueText}>Age</th>
            <th>From</th>
            <th></th>
            <th>To</th>
            <th>Value</th>
            <th className={styles.blueText}>Txn Fee</th>
          </tr>
        </thead>
        {props.result.result.map((txn) => {
          return (
            <tr className={styles.txn}>
              <td className={styles.blueText}>{txn.hash.slice(0, 10)}...</td>
              <td>
                <span className={styles.transfer}>
                  {txn.decoded_call ? txn.decoded_call.label : "Unknown"}
                </span>
              </td>
              <td className={styles.blueText}>{txn.block_number}</td>
              <td className="text-white">
                {moment(txn.block_timestamp, "YYYYMMDD").fromNow()}
              </td>
              <td className="text-white">
                {txn.from_address.slice(0, 8)}...{txn.from_address.slice(34)}
              </td>
              <td>
                <span
                  className={`${
                    txn.from_address.toLowerCase() !==
                    props.result.searchInput.toLowerCase()
                      ? styles.inTxn
                      : styles.outTxn
                  }`}
                >
                  {txn.from_address.toLowerCase() !==
                  props.result.searchInput.toLowerCase()
                    ? "IN"
                    : "OUT"}
                </span>
              </td>
              <td className={styles.blueText}>
                {txn.to_address.slice(0, 8)}...{txn.to_address.slice(34)}
              </td>
              <td className="text-white">
                {(txn.value / 10 ** 18).toFixed(5)} ETH
              </td>
              <td className="text-gray-700">
                {(txn.gas_price / 10 ** 18).toFixed(12)}
              </td>
            </tr>
          );
        })}
      </table>
    </section>
  );
}
