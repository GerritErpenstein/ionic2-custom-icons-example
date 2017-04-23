import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {PagesConfig} from './../app/pages-config';

@Component({
   template: `
        <ion-header>
            <ion-navbar>
                <button ion-button menuToggle>
                    <ion-icon name="menu"></ion-icon>
                </button>
                <ion-title>Custom icons</ion-title>
            </ion-navbar>
        </ion-header>
        <ion-content>
            <ion-list>
                <ion-list-header>
                    Examples
                </ion-list-header>
                <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
                    {{p.title}}
                </button>
            </ion-list>
        </ion-content>
    `
})
export class RootPage {

   constructor(public pages:PagesConfig, private _navCtrl: NavController) {
   }

   openPage(page) {
      this._navCtrl.setRoot(page.component);
   }

}
