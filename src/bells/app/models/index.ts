export type NoteValue = "A" | "B" | "C" | "D" | "E" | "F" | "G";

export enum Incidental {
  None,
  Sharp,
  Flat,
}

export interface Note {
  note: NoteValue;
  octave: number;
  incidental?: Incidental;
  lyric?: string | null;
}

export interface SongInfo {
  title: string;
  url: string;
  notes: Note[];
}

export interface Library {
  songs: SongInfo[];
}
