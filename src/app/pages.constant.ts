import {PagesConfig} from './pages-config';

import {OverviewPage} from '../pages/overview/overview.page';
import {TabsPage} from '../pages/tabs/tabs.page';
import {PlatformPage} from '../pages/platform/platform.page';
import {ActiveInactivePage} from '../pages/activeInactive/activeInactive.page';

export const PAGES:PagesConfig = [
         {title: 'Overview', component: OverviewPage},
         {title: 'Tabs', component: TabsPage},
         {title: 'Platform-specific icons', component: PlatformPage},
         {title: 'Active/inactive icons', component: ActiveInactivePage}
];