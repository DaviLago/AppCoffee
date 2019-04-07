import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Page
import { LoginPage } from '../login/login';
import { Service } from '../../services/service';

@Component({
  templateUrl: 'logout.html'
})
export class LogoutPage {

  constructor(public navCtrl: NavController) {
    Service.getSession().remove();
    this.navCtrl.setRoot(LoginPage);
  }

}
