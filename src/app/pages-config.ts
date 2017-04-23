export interface PageConfig {
    title: string;
    component: any;
}

export class PagesConfig extends Array<PageConfig> {
}