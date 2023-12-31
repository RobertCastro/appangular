/* este servicio sirve tanto para la fucionalidad de lsitar como la de detallar */

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Genero } from './genero';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneroService {

  private apiUrl = environment.baseUrl + '/genres';
  constructor(private http:HttpClient) { }

  getGeneros(): Observable<Genero[]> {
    return this.http.get<Genero[]>(this.apiUrl);
    //return this.http.get<Genero[]>(this.apiUrl).pipe(
    //  catchError(err => throwError(()=>new Error('Error en el servicio de listar generos')))
    //)
  }
  
  //create a variable containing a json in the form {type:"Prueba"}

  
  crearGenero(genero: Genero): Observable<Genero> {
    console.log(genero);
    return this.http.post<Genero>(this.apiUrl, genero);
  }

}
