import { PageType } from "@shared/types/index";

export class HomePage implements PageType {
    name: string;

    constructor() {
        this.name = "HomePage";
    }

    render() {
        return `<div>Home Page</div>`; 
    }
}