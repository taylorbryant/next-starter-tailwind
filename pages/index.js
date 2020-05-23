import React from "react";

import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <img
          alt="Four one-eyed aliens playing"
          className="w-full max-w-xl"
          src="team-of-critters.svg"
        />

        <h2 className="p-3 my-8 text-lg font-bold bg-yellow-400 md:text-2xl">
          Hi! Welcome to your first Next.js site.
        </h2>
      </div>
    </Layout>
  );
}

export default IndexPage;
