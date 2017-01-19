import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app/components/core/app.component.html',
    styleUrls: ['app/components/core/app.component.css'],
    providers: [AppComponentService]
})

export class AppComponent implements OnInit {
    
    user: Array<Object>;
    
    tableData = [];
    
    constructor (private appComponentService: AppComponentService) {}

    ngOnInit() {
        this.appComponentService.getUser()
            .subscribe(data => {
                this.user = data.json();
                this.tableData.push(this.user);
                console.log(this.user);
            });
    }
}