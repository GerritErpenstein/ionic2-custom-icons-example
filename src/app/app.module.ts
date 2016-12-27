import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {MyApp} from './app.component';
import {RootPage} from '../pages/root.page';
import {IconsPage} from '../pages/icons/icons.page';
import {TabsPage, TabIconTextPage} from '../pages/tabs/tabs.page';

@NgModule({
   declarations: [
      MyApp,
      RootPage,
      IconsPage,
      TabsPage,
      TabIconTextPage
   ],
   imports: [
      IonicModule.forRoot(MyApp),
      CustomIconsModule
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      RootPage,
      IconsPage,
      TabsPage,
      TabIconTextPage
   ],
   providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
