import React from "react";
import type { Note, NoteValue } from "~/data/songs";

const NoteColorMap: Record<NoteValue, string> = {
  A: "bg-blue-700 border-blue-900 ",
  B: "bg-purple-700 border-purple-900 ",
  C: "bg-red-600 border-red-800 ",
  D: "bg-orange-500 border-orange-700 ",
  E: "bg-yellow-300 border-yellow-500 ",
  F: "bg-green-700 border-green-900 ",
  G: "bg-sky-500 border-sky-700 ",
};

export type NoteProps = Note & {
  className?: string;
};

export default function Note({
  note,
  octave,
  incidental,
  lyric,
  className,
}: NoteProps) {
  const colorClass = NoteColorMap[note];
  return (
    <div className={"p-2 md:p-5 flex flex-col " + className}>
      <div
        className={
          "w-14 h-14 md:w-20 md:h-20 border-2 flex-shrink-0 mx-auto rounded-full " +
          colorClass
        }
      />
      <div className="text-center">{lyric}</div>
    </div>
  );
}
