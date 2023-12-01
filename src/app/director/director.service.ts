import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Director } from './director';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
    private apiUrl = environment.baseUrl + '/directors';

  constructor(private http: HttpClient) { }

  // Obtener todos los directores
  obtenerDirectores(): Observable<Director[]> {
    return this.http.get<Director[]>(this.apiUrl);
  }

  // Obtener un director por ID
  obtenerDirectorPorId(id: number): Observable<Director> {
    return this.http.get<Director>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo director
  crearDirector(director: any): Observable<any> {
    return this.http.post(this.apiUrl, director);
  }

  // Actualizar un director
  actualizarDirector(director: Director): Observable<Director> {
    return this.http.put<Director>(`${this.apiUrl}/${director.id}`, director);
  }

  // Eliminar un director
  eliminarDirector(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
