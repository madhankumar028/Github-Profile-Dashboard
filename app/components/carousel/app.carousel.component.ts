import { Component, OnInit } from '@angular/core';

import { AppComponentService } from '../core/app.component.service';
import { CarouselService } from './app.carousel.component.service';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'ng-carousel-config',
    templateUrl: 'app/components/carousel/app.carousel.component.html',
    styleUrls: ['app/components/carousel/app.carousel.component.css'],
    providers: [CarouselService, AppComponentService, NgbCarouselConfig]
})

export class CarouselComponent implements OnInit {

    constructor(private appComponentService: AppComponentService, config: NgbCarouselConfig) {
        
        config.interval = 0;
        config.wrap = false;
        config.keyboard = false;
    }
    
    user: any;

    ngOnInit() {
        this.appComponentService.getUser()
            .subscribe(data => {
                this.user = data.json();
            })
    }
}