import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';

//noinspection TypeScriptCheckImport
import template from './login.component.html';

@Component({
    selector: 'login',
    template
})

export class LoginComponent implements OnInit{

    loginForm: FormGroup;

    constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder){}

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login(){
        if (this.loginForm.valid)
        {
            Meteor.loginWithPassword(this.loginForm.value.username, this.loginForm.value.password, (err) => {
                this.zone.run(() => {
                    if (err) {
                        document.getElementById("error").innerHTML = err['reason'];
                    } else {
                        document.getElementById("error").innerHTML = "";
                        this.router.navigate(['/content/add']);
                    }
                });
            })
        }
    }
}