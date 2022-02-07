import "../styles/globals.css";
import Head from "next/head";
import Layout from "@components/Layout";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Next.js Starter Tailwind</title>
        <meta
          name="Description"
          content="A Next.js starter styled using Tailwind CSS."
        />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
