import { Incidental, Note, NoteValue } from "~/models";

const NoteColorMap: Record<NoteValue, string> = {
  A: "bg-blue-700 border-blue-900 ",
  B: "bg-purple-700 border-purple-900 ",
  C: "bg-red-600 border-red-800 ",
  D: "bg-orange-500 border-orange-700 ",
  E: "bg-yellow-300 border-yellow-500 ",
  F: "bg-green-700 border-green-900 ",
  G: "bg-sky-500 border-sky-700 ",
};
const SharpColorMap: Record<NoteValue, string> = {
  A: "bg-blue-500 border-blue-700 ",
  B: "",
  C: "bg-red-400 border-red-600 ",
  D: "bg-orange-300 border-orange-500 ",
  E: "",
  F: "bg-green-500 border-green-700 ",
  G: "bg-sky-300 border-sky-500 ",
};

export type NoteProps = Note & {
  className?: string;
};

export default function NoteCard({ note, octave, incidental, lyric, className }: NoteProps) {
  const colorClass = incidental === Incidental.Sharp ? SharpColorMap[note] : NoteColorMap[note];
  let label = note;
  if (incidental === Incidental.Sharp) {
    label += "#";
  } else if (incidental === Incidental.Flat) {
    label += "b";
  }
  return (
    <div className={"p-2 md:p-5 flex flex-col " + className}>
      <div
        className={
          "flex items-center justify-center w-14 h-14 md:w-20 md:h-20 border-2 flex-shrink-0 mx-auto rounded-full text-center text-4xl " +
          colorClass
        }
      >
        <div>{label}</div>
      </div>
      <div className="text-center">{lyric}</div>
    </div>
  );
}
