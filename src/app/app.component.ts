import { Component } from '@angular/core';
import InputForm from './input-form/input-form.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Teste CERTI';
  capturedPokemons = ['Pokemon 1', 'Pokemon 2', 'Pokemon 3']
}
