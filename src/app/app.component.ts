import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
	    <h2>Mi heroe favorito es: {{myHero.name}}</h2>
	    <p>Heroes:</p>
	    <ul>
	      <li *ngFor="let hero of heroes">
	        {{ hero.name }}
	      </li>
	    </ul>
	    <p *ngIf="heroes.length > 3">¡Hay muchos héroes!</p>
		`
})

export class AppComponent{
	title = 'Tour de super heroes';
	heroes = [
		new Hero(1, 'Aguaman'), 
		new Hero(2, 'Super Loco'), 
		new Hero(3, 'Hombre linterna Verde'), 
		new Hero(4, 'Batman')
	];

	myHero = this.heroes[0];
}
// export class AppComponent  { name = 'Andres Minota'; }
