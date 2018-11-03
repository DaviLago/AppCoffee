import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

//Service
import { UserService } from '../../services/userService';

//Model
import { UserModel } from '../../models/UserModel';

//Page
import { HomePage } from '../home/home';
import { RegisterAccountPage } from '../register-account/register-account';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private user: UserModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, 
              private toastCtrl: ToastController) {
    this.user = new UserModel();
    UserService.setUser(new UserModel());
  }

  public getUser(): UserModel{
    return this.user;
  }

  saveForm(user: UserModel) {
      this.postForm(user);
  }

  private postForm(user: UserModel){
    this.userService.getUserByEmailAndPassword(user)
      .subscribe(
        (user:UserModel) => {
          UserService.setUser(user);
          this.navCtrl.setRoot(HomePage);
        },
        (error:Error) => {
          console.log(error.message);
          this.presentToast(error);
        }
      );
  }

  public createAccount(){
    this.navCtrl.push(RegisterAccountPage);
  }

  public forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
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
