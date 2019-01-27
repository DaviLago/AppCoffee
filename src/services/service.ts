import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel'

@Injectable()
export class Service {

    private static user: UserModel;

    constructor(public http: HttpClient) {}

    public static getUser(): UserModel{
        return this.user;
    }
    public static setUser(user: UserModel){
        this.user = user;
    }

}