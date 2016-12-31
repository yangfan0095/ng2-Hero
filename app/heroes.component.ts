import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: [ 'heroes.component.css' ]
}) 
export class HeroesComponent implements OnInit { 
  title ="tour of heros";
    heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero:Hero):void {
    this.selectedHero  = hero ;
  }
  constructor(
    private router :Router,
    private heroService: HeroService
    ) {  }
    
   getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onselect(hero: Hero): void {
    this.selectedHero = hero ;
  }
  gotoDetail(): void {
  this.router.navigate(['/detail', this.selectedHero.id]);
  }
  delete(hero:Hero):void{
    this.heroService.delete(hero.id)
        .then(() =>{
          this.heroes = this.heroes.filter(h =>h!==hero);
          if(this.selectedHero == hero){
            this.selectedHero = null;  
          }
        })
  }
  add(name :string) :void{
    name = name.trim(); 
    if(!name){ 
      return 
    }
    this.heroService.create(name)
      .then(hero =>{
        this.selectedHero = null ;
      })
  }

 }

