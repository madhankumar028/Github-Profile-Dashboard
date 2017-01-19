import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './components/core/app.component';
import { HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponentService} from './components/core/app.component.service';
import { CarouselComponent } from './components/carousel/app.carousel.component';
import { CarouselDirective } from './components/carousel/app.carousel.directive';
import { LanguageComponent } from './components/language/app.language.component';

@NgModule({
    imports: [NgbModule.forRoot(), BrowserModule, FormsModule, HttpModule],
    declarations: [
        AppComponent,
        CarouselComponent,
        CarouselDirective,
        LanguageComponent
    ],
    providers: [AppComponentService],    
    bootstrap: [AppComponent]
})

export class AppModule {}
