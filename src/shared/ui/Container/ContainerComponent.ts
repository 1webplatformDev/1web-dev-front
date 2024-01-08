import { ComponentType } from "@shared/types/index"
import "@shared/ui/Container/container.css"

export class ContainerComponent implements ComponentType {
    name: string;
    component: ComponentType;
    classList: string;

    constructor(component: ComponentType, classList?: string){
        this.name = "ContainerComponent";
        this.component = component;
        this.classList = classList;
    }

    render(innerHTML?: string) {
        const container = document.createElement("div");
        container.classList.add("container");
        if (this.classList) {
            container.classList.add(this.classList);
        }
        if(innerHTML){
            container.innerHTML = innerHTML;
        }
        container.innerHTML += this.component.render();
        return container.outerHTML;
    }
}