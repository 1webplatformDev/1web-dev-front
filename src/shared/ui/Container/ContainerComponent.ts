import { ComponentType } from "@shared/types/index"
import "@shared/ui/Container/container.css"

export class ContainerComponent implements ComponentType {
    name: string;
    component: ComponentType;

    constructor(component: ComponentType){
        this.name = "ContainerComponent";
        this.component = component;
    }

    render() {
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = this.component.render();
        return container.outerHTML;
    }
}