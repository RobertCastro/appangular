// director-detalle.service.ts
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Director } from '../director';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorDetalleService {

  private apiUrl = environment.baseUrl + '/directors';
  
  constructor(private http: HttpClient) { }

  getDirectorById(id: string): Observable<Director> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Director>(url);
  }
}
