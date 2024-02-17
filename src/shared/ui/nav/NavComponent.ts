import { navLinkArray } from "@/shared/const/NavLink";
import { linkComponent } from "../link/LinkComponent";

import "./NavComponent.css";

function NavComponent() {
    const init = () => {
        const nav = document.createElement("nav");
        nav.classList.add("nav");
        
        for (const navLink of navLinkArray) {
            const link = linkComponent.createLink(navLink.href, navLink.text, navLink.className);
            nav.appendChild(link);
        }

        return nav;
    }

    return {
        init
    }
}

export const navComponent = NavComponent();