import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
   template: `
      <ion-header>
         <ion-navbar>
            <button ion-button menuToggle>
               <ion-icon name="menu"></ion-icon>
            </button>
            <ion-title>Tabs</ion-title>
         </ion-navbar>
      </ion-header>
      <ion-content padding>
         My tab content
      </ion-content>
   `
})
export class ContentTabPage {
}
