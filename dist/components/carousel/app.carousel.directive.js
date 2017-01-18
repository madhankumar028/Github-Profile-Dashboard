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
var CarouselDirective = (function () {
    function CarouselDirective(element) {
        this.element = element;
    }
    CarouselDirective.prototype.ngAfterViewChecked = function () {
        this.applyHeight(this.element.nativeElement, this.carouselStyle);
    };
    CarouselDirective.prototype.applyHeight = function (parent, carouselStyle) {
        if (!parent)
            return;
        var children = parent.getElementsByClassName(carouselStyle);
        if (!children)
            return;
        Array.from(children)
            .map(function (x) { return (x.style.height = '75px') && (x.style.display = 'block'); });
    };
    return CarouselDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CarouselDirective.prototype, "carouselStyle", void 0);
CarouselDirective = __decorate([
    core_1.Directive({
        selector: '[carouselStyle]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], CarouselDirective);
exports.CarouselDirective = CarouselDirective;
//# sourceMappingURL=app.carousel.directive.js.map