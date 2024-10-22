import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscaVagasService {

  private apiUrl: string = 'https://backend-pi-node.onrender.com/vagas';

  constructor(private http: HttpClient) { }

  getVagas(tipo?: string): Observable<any[]> {
    const url = tipo ? `${this.apiUrl}/${tipo}` : this.apiUrl;
    console.log(`Fetching vagas from URL: ${url}`); // Log para depuração
    return this.http.get<any[]>(url).pipe(
      map((response: any) => {
        const { vagas } = response
        console.log("res ", vagas)
        return vagas;
      }),
      catchError(error => {
        console.error('Error fetching vagas:', error); // Log para depuração
        return of([]);
      })
    );
  }

  getVagaPorId(id: string): Observable<any> {
    const url = `${this.apiUrl}/detalhamento/${id}`;
    console.log(`Fetching vaga from URL: ${url}`); // Log para depuração
    return this.http.get<any>(url).pipe(
      map(response => {
        console.log("Response received for vaga by ID: ", response); // Log da resposta específica
        return response;
      }),
      catchError(error => {
        console.error('Error fetching vaga:', error); // Log para depuração
        return of(null);
      })
    );
  }

}
