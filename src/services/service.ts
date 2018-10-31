import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel'

@Injectable()
export class Service {

    private static baseURL: String = '/v1';
    private static user: UserModel;

    constructor(public http: HttpClient) {}

    public static getBaseUrl():String{
        return this.baseURL;
    }

    public static getUser(){
        return this.user;
    }
    public static setUser(user: UserModel){
        this.user = user;
    }

}