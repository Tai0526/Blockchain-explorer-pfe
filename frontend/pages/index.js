import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import Header from "../components/Header.js";
import SearchComp from "../components/Search.js";
import Hero from "../components/Hero.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>BlockchainX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="bg-gray-900">
        <Header />
        <SearchComp />
        <Hero />
      </section>
    </>
  );
}
