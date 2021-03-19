import { Component, OnInit } from '@angular/core';
import { SearchArtist } from 'src/app/interfaces/deezer.interfaces';
import { DeezerAPIService } from 'src/app/services/deezer-api/deezer-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchResults: SearchArtist[] = [];

  constructor(private deezerApi: DeezerAPIService) { }

  ngOnInit(): void {
    this.deezerApi.searchArtists()
      .subscribe(
        (searchResult) => this.searchResults = searchResult,
        (error) => console.error(error));
  }

  onSearchArtist() { }

}
