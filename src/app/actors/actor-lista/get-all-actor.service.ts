import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actor } from '../actor';

@Injectable({
  providedIn: 'root'
})
export class GetAllActorsService {

  private apiUrl = environment.baseUrl + '/actors';
  constructor(private http:HttpClient) { }

  actors(): Observable<Actor[]> {
    return this.http.get<Actor[]>(this.apiUrl);
  }
}
