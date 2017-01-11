import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LanguageComponentService {

    constructor(private http: Http) {}

    getCommitsByRepo() {
        return this.http.get('');
    }
}