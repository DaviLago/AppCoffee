import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.user = new UserModel();
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
        (error:Error) => console.log(error.message)
      );
  }

}
