import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  name = 'Angular 6';

  model = {
    nome: '',
    telefone: '',
    endereco: '',
  };

  items = [true, 'Two', 3];

  constructor() { }

  ngOnInit() {
  }

}
