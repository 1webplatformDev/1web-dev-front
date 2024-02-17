import { Route } from "@/shared/const/Route";
import { RouteModel } from "./RouteModel";
import { linkComponent } from "@/shared/ui/link/LinkComponent";

class RouterService {
    readonly routeModel: RouteModel[];
    constructor() {
        this.routeModel = Route;

        window.onload = () => {
            this.router();
            linkComponent.activeOnLink(window.location.pathname);
        };

        window.onpopstate = (e) => {
            // стрелки браузера вперед назад
            console.log(e);
            this.router();
        };
    }

    private router() {
        const routeModel = this.routeModel.find(
            (e: RouteModel) => e.url == window.location.pathname,
        );
        
        if(!routeModel){
            const routeModel = this.routeModel.find(
                (e: RouteModel) => e.url == "*",
            );
            routeModel.callback();
            return;
        }

        routeModel.callback();
    }
}

export const routerService = new RouterService();