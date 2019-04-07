import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../models/UserModel'
import { Playload } from '../models/Playload';

//Session
import { Session } from '../session/session';

@Injectable()
export class Service {

    private static user: UserModel;
    private static playload: Playload;
    private static userSession: Session;

    constructor(public http: HttpClient, public session: Session) {
        Service.userSession = session;
    }

    public static getSession(){
        return this.userSession;
    }

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