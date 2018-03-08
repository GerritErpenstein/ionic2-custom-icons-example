import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {MyApp} from './app.component';
import {PagesConfig} from './pages-config';
import {PAGES} from './pages.constant';
import {RootPage} from '../pages/root.page';

@NgModule({
   declarations: [
      MyApp,
      RootPage
   ],
   imports: [
      BrowserModule,
      IonicModule.forRoot(MyApp)
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MyApp,
      RootPage
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
