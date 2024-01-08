import { Page404 } from "@page/404/index";
import { Route } from "@app/lib/router/Route";

export class Router {
    routes: Route[];
    activeLayoutComponent: string;
    activeElementLink: HTMLElement;

    constructor(routes: any[]) {
        this.routes = routes;
        this.init();
    }
    
    init() {
        window.addEventListener('click', (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            
            if(target.tagName != "A"){
                return;
            }

            console.log("click tagName == A");
            event.preventDefault();
            const href = target.getAttribute("href");
            if(!href) {
                return;
            }

            console.log("click tagName == A and href");
            history.pushState(null, null, href);
            this.loadRoute();
        });
        
        window.addEventListener('load', () => {
            console.log("window load");
            this.loadRoute();
        }, { once: true })

        window.addEventListener('popstate', () => {
            console.log("window popstate"); 
            this.loadRoute();
        });
    }

    async loadRoute() {
        const route = this.routes.find(r => r.path === location.pathname);
        if (!route) {
            // todo нет дефолтного LayoutComponent поэтому пока что в #app
            document.querySelector("#app").innerHTML = await new Page404().render();
            this.updateLinkActive();
            return;
        }
 
        
        if (this.activeLayoutComponent === route.layoutComponent.name) {
            document.querySelector("main").innerHTML = route.layoutComponent.renderSlot(route.page);
            this.updateLinkActive();
            return;
        }

        this.activeLayoutComponent = route.layoutComponent.name;
        document.querySelector('#app').innerHTML = route.layoutComponent.render(route.page);
        this.updateLinkActive();
    }

    updateLinkActive(){
        if(this.activeElementLink) {
            this.activeElementLink.classList.remove("active");
        }
        const activeLink = document.querySelector(`a[href='${location.pathname}']`) as HTMLElement;
        activeLink?.classList.add("active")
        this.activeElementLink = activeLink;
    }

}