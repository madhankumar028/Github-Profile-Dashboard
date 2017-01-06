import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AppComponentService {

    constructor(private http: Http) {}

    baseUrl = '//api.github.com/users/madhankumar028';

    getUser() {
        return this.http.get(this.baseUrl);
    }
}
