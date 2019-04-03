import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import {NgxMaskModule} from 'ngx-mask'

import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbDatepickerModule,
  NbSidebarService,
  NbInputModule,
  NbCardModule
} from '@nebular/theme';
import {DataTablesModule} from "angular-datatables";
import {CardComponent} from "./componentes/card/card.component";
import {InputComponent} from "./componentes/forms/input/input.component";
import { UsuarioListagemComponent } from './usuario/usuario-listagem.component';
import { UsuarioFormularioComponent } from './usuario/usuario-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    InputComponent,
    CardComponent,
    UsuarioListagemComponent,
    UsuarioFormularioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    AppRoutingModule,
    NbInputModule,
    DataTablesModule,
    HttpClientModule,
    NbCardModule,
    NbDatepickerModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NgxMaskModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule
  ],
  providers: [NbSidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
