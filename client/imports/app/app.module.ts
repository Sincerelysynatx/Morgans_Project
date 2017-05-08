import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
//noinspection TypeScriptCheckImport
import { MasonryModule } from 'angular2-masonry';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { LOGIN_DECLARATIONS } from './login';
import { CONTENT_DECLARATIONS } from './content';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes),
        MasonryModule

    ],
    declarations: [
        AppComponent,
        ...LOGIN_DECLARATIONS,
        ...CONTENT_DECLARATIONS
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [{provide: APP_BASE_HREF, useValue: '/'}]
})
export class AppModule {}