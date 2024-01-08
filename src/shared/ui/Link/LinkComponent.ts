import { ComponentType } from "@/shared/types";
import { LinkType } from "@/shared/ui/Link/LinkType";

export class LinkComponent implements ComponentType {
    name: string;
    linkType: LinkType;

    constructor(linkType: LinkType) {
        this.name = "LinkComponent";
        this.linkType = linkType;
    }

    render () {
        const a = document.createElement("a");
        a.setAttribute("href", this.linkType.href);
        a.classList.add("nav-link");
        a.innerText = this.linkType.text; 
        return a.outerHTML;
    };
}