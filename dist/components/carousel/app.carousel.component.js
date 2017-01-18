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
var app_component_service_1 = require("../core/app.component.service");
var app_carousel_component_service_1 = require("./app.carousel.component.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var CarouselComponent = (function () {
    function CarouselComponent(appComponentService, config) {
        this.appComponentService = appComponentService;
        config.interval = 0;
        config.wrap = false;
        config.keyboard = false;
    }
    CarouselComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appComponentService.getUser()
            .subscribe(function (data) {
            _this.user = data.json();
        });
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    core_1.Component({
        selector: 'ng-carousel-config',
        templateUrl: 'app/components/carousel/app.carousel.component.html',
        styleUrls: ['app/components/carousel/app.carousel.component.css'],
        providers: [app_carousel_component_service_1.CarouselService, app_component_service_1.AppComponentService, ng_bootstrap_1.NgbCarouselConfig]
    }),
    __metadata("design:paramtypes", [app_component_service_1.AppComponentService, ng_bootstrap_1.NgbCarouselConfig])
], CarouselComponent);
exports.CarouselComponent = CarouselComponent;
//# sourceMappingURL=app.carousel.component.js.map