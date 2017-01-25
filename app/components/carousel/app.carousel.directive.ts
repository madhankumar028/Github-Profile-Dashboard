import { Directive, Input, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[carouselStyle]'
})

export class CarouselDirective implements AfterViewChecked{
    
    @Input()
    carouselStyle: string;

    constructor(private element: ElementRef) {}

    ngAfterViewChecked() {
        this.applyCss(this.element.nativeElement, this.carouselStyle);
    }

    applyCss(parent: HTMLElement, carouselStyle: string) {

        if(!parent) return;

        const children = parent.getElementsByClassName(carouselStyle);

        if(!children) return;

        Array.from(children)
            .map(function (x: HTMLElement){
                if (x.className !== 'carousel-item active') {
                    (x.style.height='50px') && (x.style.display ='block');
                }
            });
    }
}