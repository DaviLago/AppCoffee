import { Injectable } from '@angular/core';

@Injectable()
export class urlProvider {
    private static baseURL = 'localhost:8080/';

    public static getUrl(){
        return this.baseURL;
    }
}