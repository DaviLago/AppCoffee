import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Provider } from '../../providers/provider';

//Teste Model Diary
import { DiaryModel } from '../../models/DiaryModel'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private baseUrl: Provider) {
      
  }
  
  //Acessar um objecto injetado
  a(){
    this.baseUrl.getUrl;
  }

  //Teste com Model
  public diary: DiaryModel;
  b(e:Event){

    this.diary = new DiaryModel;

    let a = {
      id: "My id",
      name: "My name"
    }

    Object.assign(this.diary, a);
    console.log(this.diary);
    
    let b = {
      id: "My id",
      name: "My name",
      description: "My description"
    }
  
    this.diary = b;
    console.log(this.diary);
  }

}
