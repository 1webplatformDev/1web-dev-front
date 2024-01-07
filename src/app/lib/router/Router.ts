import { page404Page } from "@page/404/index";
import { Route } from "@app/lib/router/Route";

export class Router {
    routes: Route[];

    constructor(routes: any[]) {
        this.routes = routes;
        this.init();
    }
    
    init(){
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
        if (route) {
            document.querySelector('#app').innerHTML = await route.page.render();
        } else { // страница не найдено поэтому 404
            document.querySelector("#app").innerHTML =  await page404Page().render();
        }
    }
}