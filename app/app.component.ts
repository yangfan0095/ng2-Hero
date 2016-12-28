import {Component} from '@angular/core';

@Component({
    selector : 'my-app',
    template:
    `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/heroses">Heroes</a>
        <a routerLink="/dashboard">Dashbard</a>
    </nav>
    <router-outlet> </router-outlet>
    `
    
})
export class AppComponent{
    title = "Tour of Heroses";
}