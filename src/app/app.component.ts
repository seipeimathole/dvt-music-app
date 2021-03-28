import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'music-app';

  searchValue ='';
  isError = false;
  errorMessage = '';
  searchResults: any;
  showResults = false;
  showSpinner = false;

  constructor(private appService: AppService,
              private route: Router,
              private router: ActivatedRoute,) {}

  ngOnInit() {
   }

  searchText(event: any) {
    this.appService.searchValue = event.target.value;
  }


  onSearchArtist() {
    this.route.navigateByUrl('/search');
  }
}

