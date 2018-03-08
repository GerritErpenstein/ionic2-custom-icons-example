import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {TabsPage} from './tabs.page';

@NgModule({
   declarations: [
      TabsPage
   ],
   imports: [
      IonicPageModule.forChild(TabsPage),
      CustomIconsModule
   ]
})
export class TabsPageModule {
}
