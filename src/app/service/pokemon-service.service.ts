import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export default class PokemonServiceService {
  apiUrl: string = 'http://localhost:3000/api/pokemons';

  constructor(private httpClient: HttpClient) { }

   getCapturedPokemons() {
	   return this.httpClient.get(this.apiUrl);
  }

  addPokemon(pokemon: string) {
	  const body = { "pokemon": pokemon };
	  return this.httpClient.post(this.apiUrl, body);
	  /*.subscribe(
		  data => { console.log('Sucesso: ', data) },
		  error => console.log('Erro: ', error)
	  );*/
  }

}
