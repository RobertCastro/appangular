import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrearActorService {

  private apiUrl = environment.baseUrl + '/actors';

  constructor(private http: HttpClient) {}

  guardarActor(actorData: any): Observable<any> {
        // Configuración de encabezados
        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
        });
    
        // Realizar la solicitud POST
        return this.http.post(this.apiUrl, actorData, { headers });
  }

}
