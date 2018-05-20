import * as React from 'react';
import { Incidental, Note, NoteValue } from './songs';

export interface NoteProps {
  note: Note;
}

type ColorMap = { readonly [K in NoteValue]: string };

const colorMap: ColorMap = {
  A: 'blue',
  B: 'purple',
  C: 'red',
  D: '#FFA500',
  E: 'yellow',
  F: 'green',
  G: '#00FFFF'
};

function Note({ note }: NoteProps) {
  let text = note.note;
  if (note.incidental) {
    text += note.incidental === Incidental.Flat ? '♭' : '♯';
  }
  return (
    <div className="note">
      <div className={'note-content note-' + note.note + ' note-octave-' + note.octave} style={{ backgroundColor: colorMap[note.note] }}>
        <span className="note-name">{text}</span>
        <span className="note-octave">{note.octave}</span>
      </div>
      <div className="note-lyric">{note.lyric}</div>
    </div>
  );
}

export default Note;
