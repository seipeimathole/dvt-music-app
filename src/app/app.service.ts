import { Component , Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeezerInterface } from './interfaces/deezer-interface';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public numberOfFans: any;
  public searchValue: any;
  public sourceImage: any;
  public artistName: any;
  public trackList: any;
  public artistId: any

  constructor(private http: HttpClient) { }

  public getArtists(searchString: string) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q='+ searchString)
  }

  public getArtistTracks(artistId: any) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+ artistId +'/top?limit=5')
  }

  public getSelectedArtist(id: any) {
    return this.http.get('https://cors-anywhere.herokuapp.com/https:/api.deezer.com/artist/'+ id);
  }

  // public getArtisAlbum(searchString: any) {
  //   return this.http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/album?q='+ searchString);

  // }
}
