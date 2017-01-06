import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './components/core/app.component';
import { HttpModule} from '@angular/http';

import { AppComponentService} from './components/core/app.component.service';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent],
    providers: [AppComponentService],
    bootstrap: [AppComponent]   
})

export class AppModule {}
