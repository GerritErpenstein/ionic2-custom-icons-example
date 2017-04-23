import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {PagesConfig} from './pages-config';
import {RootPage} from '../pages/root.page';

@Component({
   templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;

   rootPage: any = RootPage;

   constructor(public platform: Platform, public pages:PagesConfig, public statusBar: StatusBar, public splashScreen: SplashScreen) {
      this.platform.ready().then(() => {
         // Okay, so the platform is ready and our plugins are available.
         // Here you can do any higher level native things you might need.
         statusBar.styleDefault();
         splashScreen.hide();
      });
   }

   openPage(page) {
      this.nav.setRoot(page.component);
   }
}
