import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';

import {PagesConfig} from './pages-config';
import {RootPage} from '../pages/root.page';

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;

   rootPage: any = RootPage;

   constructor(public platform: Platform, public pages:PagesConfig) {
      this.initializeApp();
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
