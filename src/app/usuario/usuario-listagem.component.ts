import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../services/usuario.service";
import {Usuario} from "../models/usuario";

@Component({
  selector: 'app-usuario-listagem',
  templateUrl: './usuario-listagem.component.html',
})
export class UsuarioListagemComponent implements OnInit {

  usuarios: Array<Usuario>

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.all().subscribe(usuarios=>{
      this.usuarios = usuarios
    })
  }

}
