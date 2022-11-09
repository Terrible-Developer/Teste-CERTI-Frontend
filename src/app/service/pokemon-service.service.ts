import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class PokemonServiceService {
  apiUrl: string = 'http://localhost:3000/api/pokemons';

  constructor(private httpClient: HttpClient) { }

   //Faz a chamada para retornar todos os pokemons
   getCapturedPokemons() {
	   return this.httpClient.get(this.apiUrl);
  }

  //Faz a chamada para inserir um novo pokemon e retorna os dados
  addPokemon(pokemon: string) {
	  const body = { "pokemon": pokemon };
	  return this.httpClient.post(this.apiUrl, body);
  }

  deletePokemon(id: string) {
	  return this.httpClient.delete(this.apiUrl + '/' + id);
  }

}
