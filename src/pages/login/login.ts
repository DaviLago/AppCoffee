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

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private user: UserModel;
  private loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, 
              private toastCtrl: ToastController, public loadingCtrl: LoadingController) {

    // UserService.getSession().get()
    //   .then(user => {
    //     if(user != null)
    //       this.navCtrl.setRoot(HomePage);
    //   });
    
    this.user = new UserModel();
    UserService.setUser(this.user);
    
  }

  public getUser(): UserModel{
    return this.user;
  }

  saveForm(user: UserModel) {
      this.openLoading();
      this.postForm(user);
  }

  private postForm(user: UserModel){
    this.userService.getTokenByEmailAndPassword(user)
      .subscribe(
        (user:UserModel) => {
          this.closeLoading();
          this.navCtrl.setRoot(HomePage, {
            user: user
          });
        },
        (error:any) => {
          console.log(error.message);
          console.log(error.status);
          if(error.status == 401)
            this.presentToast("Email ou senha incorretos");
          else
            this.presentToast("Erro ao tentar logar. Verifique sua conexão com a internet");
          this.closeLoading();
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
