import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {ActionSheetPage} from './action-sheet.page';

@NgModule({
   declarations: [
      ActionSheetPage
   ],
   imports: [
      IonicPageModule.forChild(ActionSheetPage),
      CustomIconsModule
   ]
})
export class ActionSheetPageModule {
}
