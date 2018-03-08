import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {OverviewPage} from './overview.page';

@NgModule({
   declarations: [
      OverviewPage
   ],
   imports: [
      IonicPageModule.forChild(OverviewPage),
      CustomIconsModule
   ]
})
export class OverviewPageModule {
}
