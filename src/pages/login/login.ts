import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';

//Service
import { UserService } from '../../services/userService';

//Model
import { UserModel } from '../../models/UserModel';

//Page
import { HomePage } from '../home/home';
import { RegisterAccountPage } from '../register-account/register-account';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private user: UserModel;
  private validator: FormGroup;
  private loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, 
              private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.user = new UserModel();
    UserService.setUser(this.user);

    this.validator = new FormGroup({
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
    this.userService.getTokenByEmailAndPassword(user)
      .subscribe(
        (user:UserModel) => {
          this.navCtrl.setRoot(HomePage);
        },
        (error:Error) => {
          console.log(error.message);
          this.presentToast(error.message);
        }
      );
  }

  public createAccount(){
    this.navCtrl.push(RegisterAccountPage);
  }

  public forgotPassword(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 7000,
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
