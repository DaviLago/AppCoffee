import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';


//Service
import { UserService } from '../../services/userService';
import { Service } from '../../services/service';

//Model
import { UserModel } from '../../models/UserModel';

//Page
import { HomePage } from '../home/home';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'page-register-account',
  templateUrl: 'register-account.html'
})
export class RegisterAccountPage {

  private user: UserModel;
  private loading: Loading;
  private validator: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService,
              private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.user = new UserModel();

    this.validator = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6)
      ]))
    });

  }

  public getUser(): UserModel{
    return this.user;
  }

  saveForm(user: UserModel) {
    if(this.validator.valid){
      this.openLoading();
      this.postForm(user);
      this.closeLoading();
    }
    else
      this.presentToast("Email ou Senha inválidos!");
  }

  private postForm(user: UserModel){
    this.userService.postUser(user)
      .subscribe(
        (user:UserModel) => {
          Service.setUser(user);
          this.navCtrl.setRoot(HomePage);
        },
        (error:HttpErrorResponse) => {
          console.log(error.message);
          console.log(error.status);
          if(error.status === 409)
            this.presentToast("Email já está cadastrado!");
          else
            this.presentToast(error.message);
        }
      );
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
      position: 'bottom'
    });
  
    // toast.onDidDismiss(() => {
    //   console.log('Dismissed toast');
    // });
  
    toast.present();
  }

  openLoading(){
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  closeLoading() {
    this.loading.dismiss();
  }


}
