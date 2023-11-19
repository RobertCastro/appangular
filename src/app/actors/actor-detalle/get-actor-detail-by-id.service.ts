import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Actor } from '../actor';

@Injectable({
  providedIn: 'root'
})
export class GetOneActorByIdService {

  private apiUrl = environment.baseUrl + '/actors';
  
  constructor(private http: HttpClient) { }

  oneActorWithId(id: string): Observable<Actor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Actor>(url);
  }
}
