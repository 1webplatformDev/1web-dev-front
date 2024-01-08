import { PageType } from "@shared/types/index";

export class Page404 implements PageType {
    name: string;
    
    constructor() {
        this.name = "Page404";
    }
    
    render() {
        return `<div>Страница не найдена!</div>`;
    }
}