import Transactions from "@/components/Transactions";
import React from "react";
import Head from "next/head";

export default function transactions() {
  return (
    <>
      <Head>
        <title>BlockchainX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <Transactions />
      </section>
    </>
  );
}
