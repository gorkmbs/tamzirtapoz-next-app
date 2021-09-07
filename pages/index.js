import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tamzirtapoz Next App</title>
        <meta name="description" content="First App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="text-center text-red-600">
        <h1 className="text-xl">Hello World from tamzirtapoz next app</h1>
      </div>
    </div>
  );
}
