import { Component, OnInit } from '@angular/core';
import { LanguageComponentService } from './app.language.component.service';

@Component({
    selector: 'lang-repo',
    templateUrl: 'app/components/language/app.language.component.html',
    styleUrls: ['app/components/language/app.language.component.css'],
    providers: [LanguageComponentService]
})

export class LanguageComponent implements OnInit {

    constructor(private languageComponentService: LanguageComponentService) {}
    
    language = "Language Repo Area!";
    repo = [];
    commits = [];

    ngOnInit() {
        this.getUserRepos();
    }

    getUserRepos() {
        this.languageComponentService.getUserRepos()
            .subscribe(data => {
                this.repo = data.json();
                for (var i = 0; i < this.repo.length; i++) {
                    this.getCommitsByRepo(this.repo[i].name);
                }
                console.log(this.commits);
            });
    }

    getCommitsByRepo(repoName: string) {
        this.languageComponentService.getCommitsByRepo(repoName)
            .subscribe(data => {
                this.commits.push(data.json());
            });
    }
}