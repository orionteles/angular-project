import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from "./formulario/formulario.component";
import {UsuarioListagemComponent} from "./usuario/usuario-listagem.component";
import {UsuarioFormularioComponent} from "./usuario/usuario-formulario.component";


const routes: Routes = [
  { path: '', redirectTo: '/formulario', pathMatch: 'full' },
  { path: 'formulario', component: FormularioComponent },
  { path: 'usuario', component: UsuarioListagemComponent },
  { path: 'usuario/form', component: UsuarioFormularioComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
