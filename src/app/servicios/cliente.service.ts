import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cliente } from '../Cliente';

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:5000/clientes';

  constructor(
    private http: HttpClient
  ) { }
  
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  getClienteByDni(dni: string): Observable<Cliente>{
    const url = this.apiUrl+ "/?dni=" + dni;
    return this.http.get<Cliente>(url, httpOptions);
  }

}
