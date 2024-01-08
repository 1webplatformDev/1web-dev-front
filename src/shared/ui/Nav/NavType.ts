import { ComponentType } from "@shared/types/ComponentType"
import { LinkType } from "@/shared/ui/Link/LinkType"

export interface NavType extends ComponentType { 
    linkType: LinkType[]
}