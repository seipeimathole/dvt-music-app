import { Router} from '@angular/router';
import { AppService } from '../app.service';
import { Component, OnInit } from '@angular/core';
import { DeezerInterface } from '../interfaces/deezer-interface';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'music-app';

  searchValue ='';
  isError = false;
  errorMessage = '';
  searchResults: any;
  showResults = false;
  showSpinner = false;

  constructor(private appService: AppService,
              private route: Router) {}

   ngOnInit() {
    this.showSpinner = true;
    this.appService.getArtists(this.appService.searchValue).subscribe(
      (response: any) =>  {
        this.showSpinner = false;
        console.log('results', response.data);
        this.searchResults = response.data;
      }
    )
   }
   onSetArtistData(result: any) {
      console.log('results', result)
      this.appService.artistId = result.id
      this.appService.numberOfFans = result.nb_fan;
      this.appService.artistName = result.name;
      this.appService.sourceImage = result.picture;
    }

    handleResponse(response: any) {
      if (response.error.code = 500) {
        this.errorMessage = response.error.message;
        this.isError = true;
      }

      if(response instanceof Error) {  // system error
        this.errorMessage = response.message;
        // this.isError = true;
      }
    }
}
