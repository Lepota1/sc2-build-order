import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { RaceCard } from "../components/RaceCard";

const Races: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center gap-8 bg-gray-600 text-white ">
        <h1>Select your Race</h1>

        <ul className=" grid grid-cols-3 gap-8">
          <li>
            <RaceCard
              raceImageSrc={"/zerg.jpg"}
              raceName="Zerg"
              href={`/races/zerg/match-up`}
            />
          </li>
          <li>
            <RaceCard
              raceImageSrc={"/protoss.jpg"}
              raceName="Protoss"
              href={`/races/protoss/match-up`}
            />
          </li>
          <li>
            <RaceCard
              raceImageSrc={"/terran.jpg"}
              raceName="Terran"
              href={`/races/terran/match-up`}
            />
          </li>
        </ul>
      </main>
    </>
  );
};

export default Races;
