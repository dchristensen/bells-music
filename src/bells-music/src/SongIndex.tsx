import * as React from 'react';
import { Link } from 'react-router-dom';
import songs from './songs';
import HandbellImage from './handbell.svg';

class SongIndex extends React.Component {
  render() {
    return <div>
      <img src={HandbellImage} className="header-image" alt="Handbell Logo" />
      <h1>Christmas Songs</h1>
      <div className="index-list">
        <ul>
          {songs.songs.map((s) => <li key={s.url}>
            <Link to={'/song/' + s.url}>{s.title}</Link>
          </li>)}
        </ul>
      </div>
    </div>
  }
}

export default SongIndex;