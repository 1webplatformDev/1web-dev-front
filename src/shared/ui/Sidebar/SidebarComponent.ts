import { ComponentType } from "@/shared/types";

export class SidebarComponent implements ComponentType {
    name: string;
    
    constructor() {
        this.name = "SidebarComponent";
    }

    render() {
        return "<div>SidebarComponent</div>";
    }
}