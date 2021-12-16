import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Rosi' },
      { id: 2, name: 'Pavkata' },
      { id: 3, name: 'Viki' },
      { id: 4, name: 'Emre' },
      { id: 5, name: 'Plamen' },
      { id: 6, name: 'Mitowski' },
      { id: 7, name: 'Valentin' },
      { id: 8, name: 'Diqna' },
      { id: 9, name: 'Viktoriq' },
      { id: 10, name: 'Free Guy' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (1).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
