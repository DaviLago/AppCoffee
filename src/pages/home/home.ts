import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  greeting: string;

  constructor(public navCtrl: NavController) {
    console.log("Teste ...............")
  }

  greet() {
    console.log("Funcionou")
    return "Hello, " + this.greeting;
  }

}
