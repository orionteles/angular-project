import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Usuario} from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios = [
    {id: 1, name: 'Foo', lastname: 'Bar'},
    {id: 2, name: 'Someone', lastname: 'Youknow'},
    {id: 3, name: 'Iamout', lastname: 'Ofinspiration'},
    {id: 4, name: 'Yoda', lastname: 'Skywalker'},
    {id: 5, name: 'Patrick', lastname: 'Dupont'},
    {id: 6, name: 'Barack', lastname: 'Obama'},
    {id: 7, name: 'François', lastname: 'Holland'},
    {id: 8, name: 'Michel', lastname: 'Popo'},
    {id: 9, name: 'Chuck', lastname: 'Norris'},
    {id: 10, name: 'Simon', lastname: 'Robin'},
    {id: 11, name: 'Louis', lastname: 'Lin'},
    {id: 12, name: 'Zelda', lastname: 'Link'},
  ]

  constructor(
    private http: HttpClient
  ) { }

  all(){
    return of(this.usuarios);
  }

}
