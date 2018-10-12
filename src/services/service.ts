import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Service {

    private baseURL:String = 'http://viacep.com.br/ws';
    
    constructor(public http: HttpClient){}

    public getBaseUrl(){
        return this.baseURL;
    }
}