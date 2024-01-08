import { LayoutMainType } from "@/widgets/LayoutMain/index";
import { PageType } from "@shared/types/index";

export class Route {
    public readonly path: string;
    public readonly layoutComponent: LayoutMainType;
    public readonly page: PageType;
    
    constructor (
        path: string, 
        page: PageType, 
        layoutComponent: LayoutMainType
    ) {
        this.path = path;
        this.page = page;
        this.layoutComponent = layoutComponent;
    }
}