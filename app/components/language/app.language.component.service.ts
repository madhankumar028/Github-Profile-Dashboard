import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LanguageComponentService {

    constructor(private http: Http) {}

    baseUrl = 'https://api.github.com/repos/madhankumar028/';
    repoUrl = 'https://api.github.com/users/madhankumar028/repos';

    getUserRepos() {
        return this.http.get(this.repoUrl);    
    }

    getCommitsByRepo(repoName: string) {
        var url = this.baseUrl + repoName + '/commits';
        return this.http.get(url);
    }
}