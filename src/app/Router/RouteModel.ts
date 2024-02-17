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