import { Route } from "@/shared/const/Route";
import { RouteModel } from "./RouteModel";

class RouterService {
    readonly routeModel: RouteModel[]
    constructor() {
        this.routeModel = Route;
        console.log(window);        
        window.onload = () => { 
            this.router();
        }

        window.addEventListener("popstate", (e) => {
            this.router();          
        });
    }

    private router(){
        const routeModel = this.routeModel.find((e:RouteModel)=> e.url == window.location.pathname)                    
            routeModel.callback();
    }
}

export const routerService = new RouterService();