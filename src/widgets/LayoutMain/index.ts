import { NavComponent } from "@shared/ui/Nav/index"
import { ComponentType, PageType } from "@shared/types/index"
import { listItemNav } from "@widgets/LayoutMain/const/index";
import { ContainerComponent } from "@/shared/ui/Container/index";

export class LayoutMain implements ComponentType {
    page: PageType
    
    constructor(page: PageType){
        this.page = page;
    }

    render() {
        const header = document.createElement("header");
        header.classList.add("header");
        const nav = new NavComponent(listItemNav);
        const containerNav = new ContainerComponent(nav).render();
        header.innerHTML = containerNav;

        const main = document.createElement("main");
        main.innerHTML = new ContainerComponent(this.page).render();
        return `${header.outerHTML}${main.outerHTML}`;
    }
}