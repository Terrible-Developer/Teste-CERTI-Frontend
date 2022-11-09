import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import PokemonService from './service/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Teste CERTI';
  capturedPokemons: any = [];

  constructor(private service: PokemonService) {}
  //Atualiza a lista ao iniciar a página
  ngOnInit() {
	  this.updatePokemonList();
  }

  //Faz a chamada pra retornar a lista do back-end
  updatePokemonList() {
	this.service.getCapturedPokemons()
	  	.subscribe(response => {
			this.capturedPokemons = response;
		});
  }

  //Ao clicar, faz a chamada pra registrar o novo pokemon, e retorna o novo objeto do banco
  //para atualização instantânea da lista
  clickRegister(f: NgForm) {
	  this.service.addPokemon(f.value.pokemonName).subscribe(
		  (pokemon: any) => {
			  console.log('Sucesso: ', pokemon);
			  const data: any = pokemon.data;
			  this.capturedPokemons.push(data);
		  },
		  error => console.log('Erro: ', error)
	  );
	  f.reset();
  }

  clickDelete(index: number, id: string) {
	const result = this.service.deletePokemon(id).subscribe(
		(response => {
			console.log(response);
		})
	);
	console.log(result);
	console.log('Removing pokemon ' + this.capturedPokemons.splice(index, 1));
  }

}
