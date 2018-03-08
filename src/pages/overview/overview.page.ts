import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage({segment: 'overview'})
@Component({
   templateUrl: 'overview.page.html'
})
export class OverviewPage {
   public mySet: string = 'evil';
   public myIconName: string = 'gear';
   public myIonicIconName: string = 'cog';
}
