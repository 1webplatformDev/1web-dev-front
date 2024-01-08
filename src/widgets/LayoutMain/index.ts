import { NavComponent } from "@shared/ui/Nav/index"
import { PageType } from "@shared/types/index"
import { listItemNav } from "@widgets/LayoutMain/const/index";
import { ContainerComponent } from "@/shared/ui/Container/index";
import { LayoutMainType } from "./types/LayoutMainType";

export class LayoutMainComponent implements LayoutMainType {
    name: string;
    
    constructor(){
        this.name = "LayoutMainComponent";
    }

    render(page: PageType) {
        const header = document.createElement("header");
        header.classList.add("header");
        const nav = new NavComponent(listItemNav);
        const containerNav = new ContainerComponent(nav).render();
        header.innerHTML = containerNav;

        const main = document.createElement("main");
        main.innerHTML = this.renderSlot(page);
        return `${header.outerHTML}${main.outerHTML}`;
    }

    public renderSlot(page: PageType){
        return new ContainerComponent(page).render();
    }
}
export type { LayoutMainType } from "@widgets/LayoutMain/types/LayoutMainType"