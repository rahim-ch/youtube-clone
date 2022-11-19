import Head from "next/head";

import styles from "../styles/Home.module.css";
import MyHeader from "../components/myheader";
import Mymain from "../components/mymain";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>youtube clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MyHeader />
        <Mymain />
      </main>
    </div>
  );
}