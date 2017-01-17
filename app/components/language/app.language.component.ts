import { Component } from '@angular/core';
import { LanguageComponentService } from './app.language.component.service';

@Component({
    selector: 'lang-repo',
    templateUrl: 'app/components/language/app.language.component.html',
    styleUrls: ['app/components/language/app.language.component.css'],
    providers: [LanguageComponentService]
})

export class LanguageComponent {

    constructor(private languageComponentService: LanguageComponentService) {}
    
    language = "Language Repo Area!";

    getCommitsByRepo() {
        this.languageComponentService.getCommitsByRepo()
            .subscribe(data => {
                data.json();
            });
    }
}