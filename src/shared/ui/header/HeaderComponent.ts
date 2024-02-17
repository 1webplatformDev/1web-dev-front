import { navComponent } from "@shared/ui/nav/NavComponent";
import "./HeaderComponent.css";

function HeaderComponent(){
    const init = () => {
        const header = document.createElement("header");
        header.classList.add("header");
        document.body.querySelector("#app").appendChild(header);
        header.appendChild(navComponent.init());
    }

    return {
        init
    }
}

export const headerComponent = HeaderComponent();