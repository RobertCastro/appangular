import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Plataforma } from './plataforma';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlataformaService {
  private apiUrl = environment.baseUrl + '/platforms';
  constructor(private http:HttpClient) { }

  getPlatforms(): Observable<Plataforma[]> {
    return this.http.get<Plataforma[]>(this.apiUrl);
  }

  asociarPlataformaPelicula(idPelicula: number, idPlataforma: number): Observable<Plataforma> {
    return this.http.post<Plataforma>(this.apiUrl + '/' + idPlataforma + '/movies/' + idPelicula, null);
  }
}
