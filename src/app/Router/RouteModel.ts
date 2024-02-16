import { error404Page } from "@/page/error404Page";

export class RouteModel {
    readonly name: string;
    readonly url: string;
    readonly callback: Function;
    
    constructor(name: string, url: string, callback: Function){
        this.name = name;
        this.url = url;
        this.callback = callback;
    }
}

export const Route = [
    new RouteModel(
        "Главная",
        "/",
        error404Page
    )
]