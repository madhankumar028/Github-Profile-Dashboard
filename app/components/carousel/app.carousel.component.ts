import { Component, OnInit } from '@angular/core';

// TODO parent comp
// import { AppComponent } from '../core/app.component';

import { AppComponentService } from '../core/app.component.service';
import { CarouselService } from './app.carousel.component.service';

@Component({
    selector: 'ng-carousel',
    templateUrl: 'app/components/carousel/app.carousel.component.html',
    styleUrls: ['app/components/carousel/app.carousel.component.css'],
    providers: [CarouselService, AppComponentService]
})

export class CarouselComponent implements OnInit {

    constructor(private appComponentService: AppComponentService) {}
    
    user: any;

    ngOnInit() {
        this.appComponentService.getUser()
            .subscribe(data => {
                this.user = data.json();
            })
    }
}