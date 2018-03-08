import {Component} from '@angular/core';
import {IonicPage, Platform} from 'ionic-angular';
import {ActionSheetCustomIconController} from 'ionic2-custom-icons';

@IonicPage({segment: 'action-sheet'})
@Component({
   templateUrl: 'action-sheet.page.html'
})
export class ActionSheetPage {


   constructor(public platform: Platform, public actionsheetCtrl: ActionSheetCustomIconController) {
   }

   openActionSheet() {
      let actionSheet = this.actionsheetCtrl.create({
         title: 'Example buttons',
         cssClass: 'action-sheets-basic-page',
         buttons: [
            {
               text: 'Circle',
               customIcon: {
                  set: 'test',
                  name: 'circle',
               },

               handler: () => {
                  console.log('circle clicked');
               }
            },
            {
               text: 'Square',
               role: 'destructive',
               customIcon: {
                  set: 'test',
                  name: 'square',
               },

               handler: () => {
                  console.log('square clicked');
               }
            },
            {
               text: 'Triangle',
               customIcon: {
                  set: 'test',
                  name: 'triangle',
               },

               handler: () => {
                  console.log('triangle clicked');
               }
            },
            {
               text: 'Star',
               customIcon: {
                  set: 'test',
                  name: 'star',
               },

               handler: () => {
                  console.log('star clicked');
               }
            },
            {
               text: 'Ionic',
               icon: 'ionic',
               handler: () => {
                  console.log('ionic clicked');
               }
            }
         ]
      });

      actionSheet.present();
   }

}
