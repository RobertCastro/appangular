import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Director } from '../director';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DirectorListaService {

  private apiUrl = environment.baseUrl + '/directors';
  constructor(private http:HttpClient) { }

  getGeneros(): Observable<Director[]> {
    return this.http.get<Director[]>(this.apiUrl);
  }
}
