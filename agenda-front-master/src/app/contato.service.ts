import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContatoService {

  private readonly URL_BUSCA_TODOS = `http://localhost:8080/contatos-ws`;
  private readonly URL_SALVA_CONTATO = `http://localhost:8080/contatos-ws`;

  constructor(private http: HttpClient ) { }

  buscaTodos(): Promise<any> {
    return this.http.get(this.URL_BUSCA_TODOS).toPromise();
  }

salvaContato(contato: any): Promise<any> {
   return this.http.post(this.URL_SALVA_CONTATO, contato).toPromise();
}

}
