import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = 'Tour of Heroes';
  heroes: string[] = ["Sanic Fax", "Leffen", "Go1", "Kazunoko"];
  myHero = this.heroes[1];
  constructor(public navCtrl: NavController) {

  }
  cambiarHeroe(a: number){
    this.myHero = this.heroes[a];
  }
}
