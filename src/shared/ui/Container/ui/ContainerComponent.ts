import { ComponentType } from "@shared/types/index"
import "@shared/ui/Container/assest/container.css"

export class ContainerComponent implements ComponentType {
    component: ComponentType;

    constructor(component: ComponentType){
        this.component = component;
    }

    render() {
        const container = document.createElement("div");
        container.classList.add("container");
        container.innerHTML = this.component.render();
        return container.outerHTML;
    }
}