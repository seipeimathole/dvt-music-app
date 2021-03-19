import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService } from '../api/api.service';
import { DeezerApiResponse, SearchArtist } from 'src/app/interfaces/deezer.interfaces';

@Injectable({
  providedIn: 'root'
})
export class DeezerAPIService {

  constructor(private api: ApiService) { }

  public searchArtists(name: string = 'eminem'): Observable<SearchArtist[]> {
    return this.api.get<DeezerApiResponse<SearchArtist[]>>(`/search?q=${name}`).pipe(map((res) => res.data));
  }

  public getSelectedArtist(id: number) {
    return this.api.get(`/artist/${id}`);
  }
}
