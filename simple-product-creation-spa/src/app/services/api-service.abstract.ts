import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpHandler } from '@angular/common/http';
import { BaseResponse } from '../models/base-response.class';
import { environment } from 'src/environments/environment';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};


export abstract class ApiService{

    protected apiUrl = environment.apiURL;

    constructor(protected http: HttpClient) {
    }
    get<T>(path: string, options?: any): Promise<BaseResponse<T>> {
        const httpParams = { httpOptions, params: options };
        // console.log( this.apiUrl);
        return this.http.get<BaseResponse<T>>(this.apiUrl + path, httpParams).toPromise();
    }
    post<T>(path: string, request: any): Promise<BaseResponse<T>> {
        if (!environment.production) {
            console.log(request);
        }
        return this.http.post<BaseResponse<T>>(this.apiUrl + path, request, httpOptions).toPromise();
    }
}
 