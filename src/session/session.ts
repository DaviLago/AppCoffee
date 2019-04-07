import { Storage } from "@ionic/storage";

//pacote para transformar nossa classe em injetável
import { Injectable } from '@angular/core';

//import do nosso model usuario.ts
import { UserModel } from '../models/UserModel';

@Injectable()
export class Session {

    constructor(public storage: Storage){

    }
    // setando uma seção e passando o tipo de usuário
    create(user: UserModel) {
        this.storage.set('user', user);
    }

    get(): Promise<UserModel> {
        return this.storage.get('user');
    }

    getUser(): UserModel {
        let userModel: UserModel;
        this.get().then(user => {
            userModel = user;
        })
        return userModel;
    }

    // Quando deslogar deve remova do storage
    remove() {
        this.storage.remove('user');
    }

    exist() {
        this.get().then(res => {
            console.log('resultado >>> ', res);
            if(res) {
                console.log('resultado IF');
                return true;
            } else {
                console.log('resultado else');
                return false;
            }
        });
    }
}