import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: any;
  fans: any;
  trackList: any;
  albumList: any;
  artistName: any;
  artistPicture: any;
  trackDuration: any;
  showSpinner = false;


  constructor(private appService: AppService) { }

  ngOnInit() {
    this.showSpinner = true;
    this.artistPicture = this.appService.sourceImage;
    this.artistName = this.appService.artistName;
    this.fans =  this.appService.numberOfFans;
    this.trackList = this.appService.trackList;
    this.id = this.appService.artistId;

    this.appService.getSelectedArtist(this.appService.artistId).subscribe(
      (result: any) => {
        this.showSpinner = false;
        console.log('ArtistID', result)
      }
    )
    this.appService.getArtistTracks(this.appService.artistId).subscribe(
      (response: any) => {
      this.showSpinner = false;
        this.trackList = response.data;
        this.albumList = response.data;
      }
    )
  }

  convertTrackTime(num: any) {
    let hours = Math.floor(num / 60);
    let minutes = num % 60;
    return hours + ":" + minutes;

  }

}
