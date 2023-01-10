import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import React, { useState } from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const createBuildMutation = trpc.builds.createBuild.useMutation();
  const [matchUp, setMatchUp] = useState("ZvT");
  const [buildOrder, setBuildOrder] = useState("");

  const router = useRouter();

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build: buildOrder,
    });
    router.push("/builds");
  }

  return (
    <>
      <Head>
        <title>Submit a Build</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Submit a build Order</h1>
        <form onSubmit={handleSubmitBuildOrder} className="flex flex-col gap-4">
          <label htmlFor="match-up-select">Match Up</label>
          <select
            value={matchUp}
            onChange={(e) => setMatchUp(e.target.value)}
            required
            id="match-up-select"
            className="bg-black"
          >
            <option value="zvt">ZvT</option>
            <option value="zvp">ZvP</option>
            <option value="zvz">ZvZ</option>

            <option value="pvt">PvT</option>
            <option value="pvp">PvP</option>
            <option value="pvz">PvZ</option>

            <option value="tvt">TvT</option>
            <option value="tvp">TvP</option>
            <option value="tvz">TvZ</option>
          </select>

          <textarea
            required
            className="p-2 text-black"
            value={buildOrder}
            onChange={(e) => setBuildOrder(e.target.value)}
          />
          <button className="bg-white p-2 text-black">Submit</button>
        </form>
      </main>
    </>
  );
};

export default Home;
