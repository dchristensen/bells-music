import Angels from './songs/angels_we_have_heard_on_high';
import Away from './songs/away_in_a_manager';
import ChristmasBells from './songs/christmas_bells';
import Deck from './songs/deck_the_halls';
import Jolly from './songs/jolly_old_saint_nicholas';
import Drummer from './songs/little_drummer_boy';
import OverRiver from './songs/over_the_river_and_through_the_woods';
import Rudolph from './songs/rudolph_the_red_nosed_reindeer';
import HouseTop from './songs/up_on_the_house_top';
import WishYou from './songs/we_wish_you_a_merry_christmas';

export type NoteValue = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export enum Incidental {
  None,
  Sharp,
  Flat
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

const library: Library = {
  songs: [
    Angels as SongInfo,
    Away as SongInfo,
    ChristmasBells as SongInfo,
    Deck as SongInfo,
    Jolly as SongInfo,
    Drummer as SongInfo,
    OverRiver as SongInfo,
    Rudolph as SongInfo,
    HouseTop as SongInfo,
    WishYou as SongInfo
  ]
};

export default library;
