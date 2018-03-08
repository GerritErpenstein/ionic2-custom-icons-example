import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ContentTabPage} from './content-tab.page';

@NgModule({
   declarations: [
      ContentTabPage
   ],
   imports: [
      IonicPageModule.forChild(ContentTabPage)
   ]
})
export class TabsPageModule {
}
