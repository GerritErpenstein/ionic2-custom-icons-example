import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';

import {RootPage} from '../pages/root.page';
import {IconsPage} from '../pages/icons/icons.page';
import {TabsPage} from '../pages/tabs/tabs.page';


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
         {title: 'Tabs example', component: TabsPage}
      ];

   }

   initializeApp() {
      this.platform.ready().then(() => {
         StatusBar.styleDefault();
      });
   }

   openPage(page) {
      this.nav.setRoot(page.component);
   }
}
