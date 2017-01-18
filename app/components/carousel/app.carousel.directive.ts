import { Directive, Input, ElementRef, AfterViewChecked } from '@angular/core';

@Directive({
    selector: '[carouselStyle]'
})

export class CarouselDirective implements AfterViewChecked{
    
    @Input()
    carouselStyle: string;

    constructor(private element: ElementRef) {}

    ngAfterViewChecked() {
        this.applyHeight(this.element.nativeElement, this.carouselStyle);
    }

    applyHeight(parent: HTMLElement, carouselStyle: string) {

        if(!parent) return;

        const children = parent.getElementsByClassName(carouselStyle);

        if(!children) return;

        Array.from(children)
            .map( (x: HTMLElement) => (x.style.height='75px') && (x.style.display ='block'));
    }
}