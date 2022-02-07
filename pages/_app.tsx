import "../styles/globals.css";
import Layout from "@components/Layout";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        description="A Next.js starter styled using Tailwind CSS."
        titleTemplate="Next.js Starter Tailwind | %s"
      />

      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
