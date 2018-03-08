import {Component} from '@angular/core';
import {Config, IonicPage} from 'ionic-angular';

@IonicPage({segment: 'platform'})
@Component({
   templateUrl: 'platform.page.html'
})
export class PlatformPage {

   public mode: string;

   constructor(config: Config) {
      this.mode = config.get('mode');
   }

}
