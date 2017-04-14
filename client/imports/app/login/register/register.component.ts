import { Component, OnInit, OnChanges, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Accounts } from 'meteor/accounts-base';

import { Users } from '../../../../../both/collections/user.collection';

//noinspection TypeScriptCheckImport
import template from './register.component.html';

@Component({
    selector: 'register',
    template
})

export class RegisterComponent implements OnInit, OnChanges{

    signUpForm: FormGroup;
    error: string;

    constructor(private router: Router, private zone: NgZone, private formBuilder: FormBuilder){}

    ngOnInit() {
        this.signUpForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    ngOnChanges() {
        console.log("Change");
    }

    signup(){
        if (this.signUpForm.valid)
        {
            Accounts.createUser({
                username: this.signUpForm.value.username,
                email: this.signUpForm.value.email,
                password: this.signUpForm.value.password
            }, (err) => {
                if (err) {
                    console.log(err);
                    document.getElementById('error_message').innerHTML = err['reason'];
                    this.zone.run(() => {
                        this.error = err;
                    });
                } else {
                    console.log("Adding user");
                    Users.insert({_id: this.signUpForm.value.username, username: this.signUpForm.value.username});
                    document.getElementById('error_message').innerHTML = '';
                    //this.router.navigate(['/content']);
                }
            });
        }
        else
        {
            console.log("Problem signing up");
        }
    }

}