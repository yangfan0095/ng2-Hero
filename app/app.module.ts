// import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';
// import {RouterModule} from '@angular/router' ;

// import { AppComponent }  from './app.component';
// import { HeroDetailComponent } from './hero-detail.component';
// import {HeroesComponent} from './heroes.component';
// import { HeroService} from './hero.service';



// @NgModule({
//   //在我们让表单输入支持双向数据绑定之前，我们得先导入FormsModule模块。
//   // 只要把它添加到NgModule装饰器的imports数组中就可以了，
//   //该数组是应用中用到的外部模块列表。 这样我们就引入了表单包，其中包含了ngModel。
//   imports:  [
//      BrowserModule ,
//      FormsModule ,
//      RouterModule.forRoot({
//      path: 'heroes',
//      component:HeroesComponent
// })],
//   //这个数组包含了所有由我们创建的并属于应用模块的组件、管道和指令。
//   declarations: [ AppComponent,HeroDetailComponent,HeroesComponent],
//   providers:[HeroService],
//   bootstrap:    [ AppComponent ],


// })
// export class AppModule { }


import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }        from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import  {DashboardComponent} from './dashboard.component';

import { HeroService }         from './hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroses',
        component: HeroesComponent
      },
      {
        path:"dashboard",
        component:DashboardComponent
      },
      {
        path:"",
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

