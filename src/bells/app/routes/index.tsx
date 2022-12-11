import { MusicalNoteIcon } from "@heroicons/react/24/outline";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Link } from "react-router-dom";
import songs from "~/data/songs";
import type { Library, SongInfo } from "~/models";
import Handbell from "../components/Handbell";

export let meta: MetaFunction = () => {
  return {
    title: "Christmas Bells Songs",
    description: "Music to play Christmas songs on bells.",
  };
};

export let loader: LoaderFunction = async () => {
  return songs;
};

export default function Index() {
  return (
    <>
      <Header />
      <CardGrid />
    </>
  );
}

function Header() {
  return (
    <div className="bg-white sm:rounded-b-md">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-red-100 sm:mx-0 sm:h-20 sm:w-20">
            <Handbell className="h-20 w-20 text-red-600" aria-hidden="true" />
          </div>
          <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Christmas Bell Songs
            </h2>
            <div className="mt-2">
              <p className="mt-5 text-xl text-gray-500">Enjoy a nice song.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardGrid() {
  let data = useLoaderData<Library>();

  return (
    <div className="py-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {data.songs.map((s) => (
        <SongCard key={s.url} {...s} />
      ))}
    </div>
  );
}

type SongCardProps = SongInfo;
function SongCard({ title, url }: SongCardProps) {
  return (
    <div
      key={url}
      className="relative mx-2 sm:mx-0 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
    >
      <div className="flex-shrink-0">
        <MusicalNoteIcon className="h-10 w-10 rounded-full" />
      </div>
      <div className="flex-1 min-w-0">
        <Link to={"/song/" + url} className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500 truncate"></p>
        </Link>
      </div>
    </div>
  );
}
