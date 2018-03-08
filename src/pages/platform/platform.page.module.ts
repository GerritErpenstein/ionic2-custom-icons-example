import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PlatformPage} from './platform.page';
import {CustomIconsModule} from 'ionic2-custom-icons';

@NgModule({
   declarations: [
      PlatformPage
   ],
   imports: [
      IonicPageModule.forChild(PlatformPage),
      CustomIconsModule
   ],
   entryComponents: [
      PlatformPage
   ]
})
export class PlatformPageModule {
}
