import type { PageType } from "@shared/types/index";  

export class SqlGeneratorPage implements PageType {
    name: string;
    
    constructor() {
        this.name = "SqlGeneratorPage";
    }

    render() {
        return `<div>Sql Page</div>`;
    }
}