import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from 'ionic-angular';

@Injectable()
export class Service {

    private baseURL:String = '/v1';

    constructor(public http: HttpClient) {}

    public getBaseUrl():String{
        return this.baseURL;
    }

}