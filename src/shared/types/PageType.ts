import { ComponentType } from "@shared/types/index";

export interface PageType extends ComponentType {
    name: string;
    render: () => string;
}