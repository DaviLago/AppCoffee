import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, LoadingController, Loading } from 'ionic-angular';

//Service
import { UserService } from '../../services/userService';

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
    }
    else if(!this.validator.get('name').valid)
      this.presentToast("O campo nome é obrigatório");
    else if(!this.validator.get('email').valid)
      this.presentToast("O e-mail digitado é inválido");
    else if(!this.validator.get('password').valid)
      this.presentToast("Senha com pelo menos 6 caracteres");
  }

  private postForm(user: UserModel){
    this.userService.postUser(user)
      .then(
        (user:UserModel) => {
          this.closeLoading();
          this.navCtrl.setRoot(HomePage, {
              user: user
          });
        },
        (error:HttpErrorResponse) => {
          console.log(error.message);
          console.log(error.status);
          if(error.status === 400 || error.status === 409)
            this.presentToast("Esse email já está cadastrado");
          else
            this.presentToast(error.message);
          this.closeLoading();
        }
      );
  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 5000,
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
