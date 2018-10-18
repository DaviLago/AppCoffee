import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Teste Model Diary
//import { DiaryModel } from '../../models/DiaryModel'

import { HomeService } from '../../services/homeService'
import { AnnotationService } from '../../services/annotationService'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private homeService: HomeService, public annotationService:AnnotationService) {
      
  }

  public getBaseUrlTeste(event) {
    console.log(event);
    console.log("Url: " + this.homeService.getBaseUrl());
  }

  public getAllTeste(event){
    this.annotationService.getAllAnnoations()
    .subscribe(
          data => console.log(data),
          error => console.log(error)
        );
    /*
      this.homeService.getAll('09571450')
        .subscribe(
          data => console.log(data),
          error => console.log(error)
        );*/
  }

  


  //Teste com Model
  /*
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
*/
}
