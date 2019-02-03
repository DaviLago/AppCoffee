import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel'
import { Playload } from '../models/Playload';

@Injectable()
export class Service {

    private static user: UserModel;
    private static playload: Playload;

    constructor(public http: HttpClient) {}

    public static getUser(): UserModel{
        return this.user;
    }
    public static setUser(user: UserModel){
        this.user = user;
    }

    public static getPlayload(): Playload{
        return this.playload;
    }
    public static setPlayload(playload: Playload){
        this.playload = playload;
    }

}