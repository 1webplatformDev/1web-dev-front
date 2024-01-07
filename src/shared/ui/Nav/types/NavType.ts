import { ComponentType } from "@shared/types/ComponentType"
import { NavItemType } from "@/shared/ui/Nav/types/NavItemType"

export interface NavType extends ComponentType { 
    navItemType: NavItemType[]
}