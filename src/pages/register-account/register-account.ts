import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';


//Service
import { UserService } from '../../services/userService';
import { Service } from '../../services/service';

//Model
import { UserModel } from '../../models/UserModel';

//Page
import { HomePage } from '../home/home';

@Component({
  selector: 'page-register-account',
  templateUrl: 'register-account.html'
})
export class RegisterAccountPage {

  private user: UserModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService,
              private toastCtrl: ToastController) {
    this.user = new UserModel();
  }

  public getUser(): UserModel{
    return this.user;
  }

  saveForm(user: UserModel) {
    this.postForm(user);
  }

  private postForm(user: UserModel){
    this.userService.postUser(user)
      .subscribe(
        (user:UserModel) => {
          Service.setUser(user);
          this.navCtrl.setRoot(HomePage);
        },
        (error:Error) => {
          console.log(error.message);
          this.presentToast(error);
        }
      );
  }

  presentToast(error:Error) {
    let toast = this.toastCtrl.create({
      message: error.message,
      duration: 3000,
      position: 'bottom'
    });
  
    // toast.onDidDismiss(() => {
    //   console.log('Dismissed toast');
    // });
  
    toast.present();
  }

}
