import { NavType } from "@shared/ui/Nav/types/NavType";
import { NavItemType } from "@shared/ui/Nav/types/NavItemType";
import "@/shared/ui/Nav/assest/nav.css";

export class NavComponent implements NavType {  
    navItemType: NavItemType[]

    constructor (navItemType: NavItemType[]){
        this.navItemType = navItemType;
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