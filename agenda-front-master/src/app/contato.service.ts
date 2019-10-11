import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class ContatoService {

  contatoUrl: string;

  private readonly URL_BUSCA_TODOS = `${environment.apiUrl}/contatos-ws`;
  private readonly URL_SALVA_CONTATO = `${environment.apiUrl}/contatos-ws`;

  constructor(private http: HttpClient ) {}

  buscaTodos(): Promise<any> {
    return this.http.get(this.URL_BUSCA_TODOS).toPromise();
  }

salvaContato(contato: any): Promise<any> {
   return this.http.post(this.URL_SALVA_CONTATO, contato).toPromise();
}

}
