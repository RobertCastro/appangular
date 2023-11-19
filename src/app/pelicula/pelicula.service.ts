import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Movie } from './pelicula';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = environment.baseUrl + '/movies';
  constructor(private http:HttpClient) { }

  getPeliculas(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

}
