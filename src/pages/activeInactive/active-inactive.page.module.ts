import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {ActiveInactivePage} from './active-inactive.page';

@NgModule({
   declarations: [
      ActiveInactivePage
   ],
   imports: [
      IonicPageModule.forChild(ActiveInactivePage),
      CustomIconsModule
   ]
})
export class ActiveInactivePageModule {
}
