import { Component , Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getArtists() {

    // Test using this line 16 (I get issues regarding cors headers. I need assistant on that. for now i just used mockup json file on line 18 to test the response )

   // return this.http.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem')

      return this.http.get('assets/response.json')

  }

}
