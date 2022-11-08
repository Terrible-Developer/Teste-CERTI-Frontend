import { Component } from '@angular/core';
import PokemonService from './service/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Teste CERTI';
  //capturedPokemons = ['Pokemon 1', 'Pokemon 2', 'Pokemon 3'];
  capturedPokemons: any;

  constructor(private service: PokemonService) {};
  ngOnInit() {
	this.service.getCapturedPokemons()
	  	.subscribe(response => {
			this.capturedPokemons = response;
		});
  }

  clickRegister(pokemon: string) {
	  this.service.
  }

}
