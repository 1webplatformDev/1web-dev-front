import { NavType } from "@shared/ui/Nav/types/NavType";
import { NavItemType } from "@shared/ui/Nav/types/NavItemType";
import "@/shared/ui/Nav/nav.css";

export class NavComponent implements NavType {  
    name: string;
    navItemType: NavItemType[]

    constructor (navItemType: NavItemType[]){
        this.navItemType = navItemType;
        this.name = "NavComponent";
    }

    render() {
        const nav = document.createElement("nav");
        nav.classList.add("nav");
        for (const navItemType of this.navItemType) {
            const a = document.createElement("a");
            a.setAttribute("href", navItemType.href);
            a.classList.add("nav-link");
            a.innerText = navItemType.text;
            nav.append(a);
        }
        return nav.outerHTML;
    }
}