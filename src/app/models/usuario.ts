import {Endereco} from "./endereco";

export class Usuario{
  id: number
  nome: string
  telefone?: string
  data_nascimento?: string
  email?: string
  senha?: string
  endereco: Endereco
}
