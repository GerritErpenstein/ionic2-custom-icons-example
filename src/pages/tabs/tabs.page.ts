import {Component} from '@angular/core';

@Component({
   template: `
    <ion-header>
        <ion-navbar>
            <button ion-button menuToggle>
                <ion-icon name="menu"></ion-icon>
            </button>
            <ion-title>Tabs example</ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content padding>
        MyContent
    </ion-content>
`
})
export class TabIconTextPage {
}

@Component({
   templateUrl: 'tabs.page.html'
})
export class TabsPage {
   public tabOne = TabIconTextPage;
   public tabTwo = TabIconTextPage;
   public tabThree = TabIconTextPage;
   public tabFour = TabIconTextPage;
}
