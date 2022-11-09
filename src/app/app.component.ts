import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import PokemonService from './service/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Teste CERTI';
  capturedPokemons: any;

  constructor(private service: PokemonService) {}
  ngOnInit() {
	  this.updatePokemonList();
  }

  updatePokemonList() {
	this.service.getCapturedPokemons()
	  	.subscribe(response => {
			this.capturedPokemons = response;
		});
  }

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

}
