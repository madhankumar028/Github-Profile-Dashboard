"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_language_component_service_1 = require("./app.language.component.service");
var LanguageComponent = (function () {
    function LanguageComponent(languageComponentService) {
        this.languageComponentService = languageComponentService;
        this.language = "Language Repo Area!";
        this.repo = [];
        this.commits = [];
    }
    LanguageComponent.prototype.ngOnInit = function () {
        this.getUserRepos();
    };
    LanguageComponent.prototype.getUserRepos = function () {
        var _this = this;
        this.languageComponentService.getUserRepos()
            .subscribe(function (data) {
            _this.repo = data.json();
            for (var i = 0; i < _this.repo.length; i++) {
                _this.getCommitsByRepo(_this.repo[i].name);
            }
            console.log(_this.commits);
            _this.constructCommitsBasedOnRepo(_this.commits);
        });
    };
    LanguageComponent.prototype.getCommitsByRepo = function (repoName) {
        var _this = this;
        this.languageComponentService.getCommitsByRepo(repoName)
            .subscribe(function (data) {
            Array.prototype.push.apply(_this.commits, data.json());
        });
    };
    LanguageComponent.prototype.constructCommitsBasedOnRepo = function (totalCommits) {
        totalCommits.map(function (commits) { return console.log(commits.length); });
    };
    return LanguageComponent;
}());
LanguageComponent = __decorate([
    core_1.Component({
        selector: 'lang-repo',
        templateUrl: 'app/components/language/app.language.component.html',
        styleUrls: ['app/components/language/app.language.component.css'],
        providers: [app_language_component_service_1.LanguageComponentService]
    }),
    __metadata("design:paramtypes", [app_language_component_service_1.LanguageComponentService])
], LanguageComponent);
exports.LanguageComponent = LanguageComponent;
//# sourceMappingURL=app.language.component.js.map