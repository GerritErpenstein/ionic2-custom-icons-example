import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {CustomIconsModule} from 'ionic2-custom-icons';
import {MyApp} from './app.component';
import {PagesConfig} from './pages-config';
import {PAGES} from './pages.constant';
import {RootPage} from '../pages/root.page';
import {OverviewPage} from '../pages/overview/overview.page';
import {TabsPage, TabIconTextPage} from '../pages/tabs/tabs.page';
import {PlatformPage} from "../pages/platform/platform.page";
import {ActiveInactivePage} from "../pages/activeInactive/activeInactive.page";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
   declarations: [
      MyApp,
      RootPage,
      OverviewPage,
      TabsPage,
      TabIconTextPage,
      PlatformPage,
      ActiveInactivePage
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp),
      CustomIconsModule
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      RootPage,
      OverviewPage,
      TabsPage,
      TabIconTextPage,
      PlatformPage,
      ActiveInactivePage
   ],
   providers: [
      StatusBar,
      SplashScreen,
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      {provide: PagesConfig, useValue: PAGES}
   ]
})
export class AppModule {
}
