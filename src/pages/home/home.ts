import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

//Service
import { UserService } from '../../services/userService';

//Model
import { UserModel } from '../../models/UserModel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl: ToastController) {
    this.presentToast("User token: " + UserService.getUser().token);
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 7000,
      position: 'bottom'
    });  
    toast.present();
  }

}
