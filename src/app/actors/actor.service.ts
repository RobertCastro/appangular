import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from './actor';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActorService {
    private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  // Obtener todos los Actores
  getActores(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl+'/actors');
  }

  // Obtener un Actor por ID
  obtenerActorPorId(id: number): Observable<Actor> {
    return this.http.get<Actor>(`${this.apiUrl}/${id}`);
  }

  // Crear un nuevo Actor
  crearActor(actor: any): Observable<any> {
    return this.http.post(this.apiUrl, actor);
  }

  // Actualizar un Actor
  actualizarActor(actor: Actor): Observable<Actor> {
    return this.http.put<Actor>(`${this.apiUrl}/${actor.id}`, actor);
  }

  // Eliminar un Actor
  eliminarActor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  asociarActorPelicula(movieId: string, actorId: string): Observable<any> {
    const url = `${this.apiUrl}/movies/${movieId}/actors/${actorId}`;
    return this.http.post(url, {});
  }

}
