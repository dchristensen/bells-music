import { chunk } from 'lodash';
import * as React from 'react';
import { SongInfo } from './songs';
import Note from './Note';

export interface SongProps {
  song: SongInfo;
}

function Song({ song }: SongProps) {
  return (
    <div>
      <header>
        <h1>{song.title}</h1>
      </header>
      <div className="song-body">
        {chunk(song.notes, 8).map((c, ii) => (
          <div key={ii}>{c.map((n, i) => <Note key={song.title + i} note={n} />)}</div>
        ))}
      </div>
    </div>
  );
}

export default Song;
