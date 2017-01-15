import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {RootPage} from '../pages/root.page';
import {IconsPage} from '../pages/icons/icons.page';
import {TabsPage} from '../pages/tabs/tabs.page';
import {PlatformPage} from "../pages/platform/platform.page";


@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;

   rootPage: any = RootPage;

   pages: Array<{title: string, component: any}>;

   constructor(public platform: Platform) {
      this.initializeApp();

      this.pages = [
         {title: 'Custom icons example', component: IconsPage},
         {title: 'Tabs example', component: TabsPage},
         {title: 'Platform-specific icons example', component: PlatformPage}
      ];

   }

   initializeApp() {
      this.platform.ready().then(() => {
         // Okay, so the platform is ready and our plugins are available.
         // Here you can do any higher level native things you might need.
         StatusBar.styleDefault();
         Splashscreen.hide();
      });
   }

   openPage(page) {
      this.nav.setRoot(page.component);
   }
}
