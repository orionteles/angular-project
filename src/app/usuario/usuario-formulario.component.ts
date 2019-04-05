import { Component, OnInit } from '@angular/core';
import {Usuario} from "../models/usuario";
import {Endereco} from "../models/endereco";
import {UsuarioService} from "../services/usuario.service";
import {EnderecoService} from "../services/endereco.service";
import { NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
})
export class UsuarioFormularioComponent implements OnInit {

  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private enderecoService: EnderecoService,
    protected dateService: NbDateService<Date>
  ) {
    this.usuario.endereco = new Endereco()
  }

  ngOnInit() {
  }

  buscarCep(){
    this.enderecoService.buscarCep(this.usuario.endereco.cep).subscribe((data: Endereco)=>{
      this.usuario.endereco = data;
    })
  }

}
