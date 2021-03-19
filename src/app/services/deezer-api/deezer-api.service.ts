import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class DeezerAPIService {

  constructor(private api: ApiService) { }

  public searchArtists(name: string = 'eminem'): Observable<any> {
    return this.api.get(`/search?q=${name}`);
  }

  public getSelectedArtist(id: number) {
    return this.api.get(`/artist/${id}`);
  }
}
