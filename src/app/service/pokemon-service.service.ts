import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export default class PokemonServiceService {
  apiUrl: string = 'http://localhost:3000/pokemons';

  constructor(private httpClient: HttpClient) { }

   getCapturedPokemons() {
	   return this.httpClient.get(this.apiUrl);
  }

  addPokemon(pokemon: string) {
	  this.httpClient.post(this.apiUrl, {
		  "pokemon": pokemon,
		  "Content-Type": "application/json"
	  });
  }

}