import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes'; 
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHero(id: number): Observable<Hero> {
    const hero = of(HEROES.find(hero => hero.id === id)!);
    this.messageService.add(`HeroService: fetched hero id=${id}!`);
    return hero;
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes!');
    return heroes;
  }

  constructor(private messageService: MessagesService) { }
}
