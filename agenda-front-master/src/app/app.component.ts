import { ContatoService } from './contato.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Contato {
  id: number;
  nome: string;
  fone: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ultimoId = 3;
  contato = new Contato();

  contatos = [];

  ngOnInit(): void {
    this.buscaContatos();
  }
  buscaContatos(): any {
    this.service.buscaTodos().then(dados => {
      this.contatos = dados;
    });
  }



  constructor(private service: ContatoService) {}

  salvar(formContato: NgForm) {
    this.contato.id = ++this.ultimoId;
    this.contato.nome = formContato.value.nome;
    this.contato.fone = formContato.value.fone;

    this.service.salvaContato(this.contato).then(c => {
      alert(`Contato ${c.nome} salvo!`);
      this.buscaContatos();
    });

    this.contato = new Contato();
  }

  editar(id: number) {
    for (const c of this.contatos) {
      console.log(c);
    }
  }

}
