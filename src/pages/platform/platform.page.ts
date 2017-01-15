import {Component} from '@angular/core';
import {Config} from 'ionic-angular';

@Component({
   templateUrl: 'platform.page.html'
})
export class PlatformPage {

   public mode:string;

   constructor(config: Config) {
      this.mode = config.get('mode');
   }

}
