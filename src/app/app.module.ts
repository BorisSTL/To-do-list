import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputAreaComponent } from './input-area/input-area.component';
import { ListComponent } from './list/list.component';

import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        InputAreaComponent,
        ListComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
