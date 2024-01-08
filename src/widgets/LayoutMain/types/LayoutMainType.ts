import { ComponentType, PageType } from "@/shared/types";

export interface LayoutMainType extends ComponentType {
    render: (page?: PageType) => string;
    renderSlot: (page?: PageType) => string;
}