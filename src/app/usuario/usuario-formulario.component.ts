import { Component, OnInit } from '@angular/core';
import {Usuario} from "../models/usuario";
import {Endereco} from "../models/endereco";
import {UsuarioService} from "../services/usuario.service";
import {EnderecoService} from "../services/endereco.service";

@Component({
  selector: 'app-usuario-formulario',
  templateUrl: './usuario-formulario.component.html',
})
export class UsuarioFormularioComponent implements OnInit {

  min: Date;
  max: Date;

  usuario: Usuario = new Usuario()

  constructor(
    private usuarioService: UsuarioService,
    private enderecoService: EnderecoService,
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
