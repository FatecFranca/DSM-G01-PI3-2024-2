import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroVagaService {

  private apiUrl = 'https://backend-pi-node.onrender.com/vagas/inserir';

  constructor(private http: HttpClient) { }

  cadastrarVaga(vaga: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, vaga);
  }
}
