import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {IconsPage} from './icons/icons.page';
import {TabsPage} from './tabs/tabs.page';

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
        <ion-content padding>
            <button ion-button block (click)="goIconsPage()">Custom icons example</button>
            <button ion-button block (click)="goTabsPage()">Custom icons tabs example</button>
        </ion-content>
    `
})
export class RootPage {

   constructor(private _navCtrl: NavController) {
   }

   public goIconsPage() {
      this._navCtrl.push(IconsPage);
   }

   public goTabsPage() {
      this._navCtrl.push(TabsPage);
   }

}
