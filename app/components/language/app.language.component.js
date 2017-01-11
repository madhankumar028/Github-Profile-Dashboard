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
        this.language = "Langugae Repo Count Area!";
        this.tableData = [
            { "name": "Bell", "id": "K0H 2V5" },
            { "name": "Octavius", "id": "X1E 6J0" },
            { "name": "Alexis", "id": "N6E 1L6" },
            { "name": "Colton", "id": "U4O 1H4" },
            { "name": "Abdul", "id": "O9Z 2Q8" },
            { "name": "Ian", "id": "Q7W 8M4" },
            { "name": "Eden", "id": "H8X 5E0" },
            { "name": "Britanney", "id": "I1Q 1O1" },
            { "name": "Ulric", "id": "K5J 1T0" },
            { "name": "Geraldine", "id": "O9K 2M3" },
            { "name": "Hamilton", "id": "S1D 3O0" },
            { "name": "Melissa", "id": "H9L 1B7" },
            { "name": "Remedios", "id": "Z3C 8P4" },
            { "name": "Ignacia", "id": "K3B 1Q4" },
            { "name": "Jaime", "id": "V6O 7C9" },
            { "name": "Savannah", "id": "L8B 8T1" },
            { "name": "Declan", "id": "D5Q 3I9" },
            { "name": "Skyler", "id": "I0O 4O8" },
            { "name": "Lawrence", "id": "V4K 0L2" },
            { "name": "Yael", "id": "R5E 9D9" },
            { "name": "Herrod", "id": "V5W 6L3" },
            { "name": "Lydia", "id": "G0E 2K3" },
            { "name": "Tobias", "id": "N9P 2V5" },
            { "name": "Wing", "id": "T5M 0E2" },
            { "name": "Callum", "id": "L9P 3W5" },
            { "name": "Tiger", "id": "R9A 4E4" },
            { "name": "Summer", "id": "R4B 4Q4" },
            { "name": "Beverly", "id": "M5E 4V4" },
            { "name": "Xena", "id": "I8G 6O1" },
            { "name": "Yael", "id": "L1K 5C3" },
            { "name": "Stacey", "id": "A4G 1S4" },
            { "name": "Marsden", "id": "T1J 5J3" },
            { "name": "Uriah", "id": "S9S 8I7" }
        ];
        this.page = 4;
    }
    LanguageComponent.prototype.getCommitsByRepo = function () {
        this.languageComponentService.getCommitsByRepo()
            .subscribe(function (data) {
            data.json();
        });
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