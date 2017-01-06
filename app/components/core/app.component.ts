import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';
@Component({
    selector: 'app-root',
    template: `
        <div class="col-sm-4">
            <h1>{{title}}</h1>
        </div>
    `,
    styles: [
        `
        .col-sm-4 {
            width: 20%;
            background-color: yellow;
            height: 100%;
        }
        `
    ],
    providers: [AppComponentService]
})

export class AppComponent implements OnInit {
    
    title = 'App started';
    user: any;

    constructor (private appComponentService: AppComponentService) {}

    ngOnInit() {
        this.appComponentService.getUser()
            .subscribe(data => {
                this.user = data.json();
                console.log(this.user);
            })
    }
}