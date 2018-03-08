import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';

@IonicPage({segment: 'tabs'})
@Component({
   templateUrl: 'tabs.page.html'
})
export class TabsPage {
   public tabOne = 'ContentTabPage';
   public tabTwo = 'ContentTabPage';
   public tabThree = 'ContentTabPage';
   public tabFour = 'ContentTabPage';
}
