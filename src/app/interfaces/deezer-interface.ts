export interface DeezerInterface {

}

export interface SearchArtist {
  id: number
  duration: number;
  link: string;
  md5_image: string;
  preview: string;
  rank: number;
  readable: boolean
  title: string;
  title_short: string;
  title_version: string;
  type: string;
  album: Album;
  artist: Artist;
}

export interface Album {
  cover: string;
  cover_big: string;
  cover_medium: string;
  cover_small: string;
  cover_xl: string;
  id: number;
  md5_image: string;
  title: string;
  tracklist: string;
  type: string;
}

export interface Artist {
  id: number;
  link: string;
  name: string;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  tracklist: string;
  type: string;
}
