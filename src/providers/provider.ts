import { Injectable } from '@angular/core';

@Injectable()
export class Provider {
    private static baseURL = 'localhost:8080/';
    public baseURL = 'localhost:8080/';
    constructor(){}

    public static getUrl(){
        return this.baseURL;
    }

    public getUrl(){
        return "ok";
    }
}