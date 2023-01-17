import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import React, { useState } from "react";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-600 text-white ">
        <h1>Welcome To StarCraft Build Order Manager</h1>
        <Link href="/submit-build">Submit Build</Link>
        <Link href="/races">Builds</Link>
      </main>
    </>
  );
};

export default HomePage;
