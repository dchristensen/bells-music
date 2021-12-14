import React from "react";
import { json, Link, LoaderFunction, MetaFunction, useLoaderData } from "remix";
import Layout from "~/components/Layout";
import Note from "~/components/Note";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import songs, { SongInfo } from "~/data/songs";

export let meta: MetaFunction = ({ data }) => {
  return {
    title: "Christmas Bells Songs - " + data.title,
    description: "Music to play Christmas songs on bells.",
  };
};

export let loader: LoaderFunction = async ({ params }) => {
  const info = songs.songs.find((s) => s.url === params.song);
  if (info === undefined) {
    throw json("Not Found", { status: 404, statusText: "Not Found" });
  }

  return info;
};

export default function Song() {
  const data = useLoaderData<SongInfo>();

  return (
    <div className="w-full bg-white min-h-screen">
      <div className="relative py-5 border-b border-gray-200">
        <Link
          to="../"
          className="absolute inline-block w-8 inset-x-5 print:hidden"
        >
          <ArrowLeftIcon className="w-5 h-5 md:w-7 md:h-7" />
        </Link>
        <h1 className="text-lg leading-4 sm:text-xl md:text-3xl text-center md:leading-7 font-medium text-gray-900">
          {data.title}
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:gap-6 lg:grid-cols-6 print:grid-cols-6 md:text-xl">
        {data.notes.map((n, i) => (
          <Note key={i} {...n} className="col-span-1" />
        ))}
      </div>
    </div>
  );
}
