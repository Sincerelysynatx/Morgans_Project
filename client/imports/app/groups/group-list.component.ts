import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Meteor } from 'meteor/meteor';
//noinspection TypeScriptCheckImport
import { MasonryOptions } from 'angular2-masonry';

import 'rxjs/add/operator/map';

import { Groups } from '../../../../both/collections/group.collection';
import { Group } from '../../../../both/models/group.model';
import { Link } from '../../../../both/models/link.model';

//noinspection TypeScriptCheckImport
import template from './group-list.component.html';

@Component({
    template
})

@InjectUser('user')
export class GroupComponent implements OnInit, OnDestroy{
    groups: Observable<Group[]>;
    addForm: FormGroup;
    groupId: string;
    paramsSub: Subscription;
    public myOptions: MasonryOptions = {
        transitionDuration: '0.0s'
    };

    constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) {
    }

    ngOnInit(){
        this.addForm = this.formBuilder.group({
            url: ['', Validators.required],
            title: ['', Validators.required],
            desc: ['', Validators.required]
        });

        this.paramsSub = this.route.params
            .map(params => params['groupName'])
            .subscribe(groupName => {
                this.groupId = groupName;
                this.groups = Groups.find(this.groupId).zone();
            });
    }

    ngOnDestroy(){
        this.paramsSub.unsubscribe();
    }

    addLink(): void {
        if (Meteor.user()['emails'][0]['address'] != "admin@admin.com")
        {
            alert("Please log in as admin to make changes");
            return;
        }

        if (this.addForm.valid) {
            //noinspection TypeScriptUnresolvedFunction
            Groups.update(this.groupId, {$push : {links : Object.assign({}, this.addForm.value, {_id : Random.id()})}});
            this.addForm.reset();
        }
    }

    removeLink(link: Link): void {
        if (Meteor.user()['emails'][0]['address'] != "admin@admin.com")
        {
            alert("Please log in as admin to make changes");
            return;
        }
        Groups.update(this.groupId, {
            $pull : {
                links : {
                    _id: link._id
                }
            }
        });
    }
}