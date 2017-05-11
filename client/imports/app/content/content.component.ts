import { Component } from '@angular/core';
import { Router } from '@angular/router';

//noinspection TypeScriptCheckImport
import template from './content.component.html';

@Component({
    selector: 'content',
    template
})

export class ContentComponent{

    constructor(private router: Router){
        if (Meteor.userId() == undefined){
            this.router.navigate(['/login']);
        }
    }

}