import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
    this.user = new UserModel();
    UserService.setUser(new UserModel());
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
        (error:Error) => console.log(error.message)
      );
  }

  public createAccount(event){
    this.navCtrl.push(RegisterAccountPage);
  }

  public forgotPassword(event){
    this.navCtrl.push(ForgotPasswordPage);
  }

}
