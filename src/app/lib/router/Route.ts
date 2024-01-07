import { PageType } from "@shared/index";

export class Route {
    public readonly path: string;
    public readonly page: PageType;

    constructor(path: string, page: PageType) {
        this.path = path;
        this.page = page;
    }
}