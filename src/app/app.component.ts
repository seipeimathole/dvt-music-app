import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'music-app';
  artistName: any;
  albumCover: any;
  numberOfFans: any;
  searchResults: any;


  constructor(private appService: AppService) {}

   ngOnInit() {

   }

   onSearchArtist() { // search for artist - test version on json mockup file
    this.appService.getArtists().subscribe(
      (response: any) =>  {
        console.log('results', response.data);
        this.searchResults = response.data;
      }
    )}
}
