import { Component, OnInit } from '@angular/core';
import { DeezerAPIService } from 'src/app/services/deezer-api/deezer-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchResults: any = [];

  constructor(private deezerApi: DeezerAPIService) { }

  ngOnInit(): void {
    this.deezerApi.searchArtists()
      .subscribe((r) => console.log(r), (error) => console.error(error));
  }

  onSearchArtist() { }

}
