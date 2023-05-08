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
      <section className="bg-gray-900">
        <Transactions />
      </section>
    </>
  );
}
