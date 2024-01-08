import { NavType } from "@/shared/ui/Nav/NavType";
import { LinkType } from "@/shared/ui/Link/LinkType";
import "@/shared/ui/Nav/nav.css";
import { LinkComponent } from "../Link/LinkComponent";

export class NavComponent implements NavType {  
    name: string;
    linkType: LinkType[]

    constructor (linkType: LinkType[]){
        this.linkType = linkType;
        this.name = "NavComponent";
    }

    render() {
        const nav = document.createElement("nav");
        nav.classList.add("nav");
        for (const linkType of this.linkType) {
            nav.innerHTML += new LinkComponent(linkType).render();
        }
        return nav.outerHTML;
    }
}