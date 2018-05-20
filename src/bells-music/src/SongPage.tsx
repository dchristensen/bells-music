import { head } from 'lodash';
import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import songs from './songs';
import Song from './Song';

interface SongRouteProps {
  name: string;
}

class SongPage extends React.Component<RouteComponentProps<SongRouteProps>> {
  render() {
    const song = head(songs.songs.filter(s => s.url === this.props.match.params.name));
    if (!song) {
      return null;
    }

    return <Song song={song} />
  }
}

export default SongPage;