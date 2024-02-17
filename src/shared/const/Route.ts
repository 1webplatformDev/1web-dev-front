import { RouteModel } from "@/app/Router/RouteModel";
import { error404Page } from "@/page/error404Page";
import { indexSqlPage } from "@/page/indexSqlPage";

export const Route = [
    new RouteModel(
        "Главная",
        "/",
        error404Page
    ),
    new RouteModel(
        "Главная SQL",
        "/sql",
        indexSqlPage
    ),
    new RouteModel(
        "404",
        "*",
        error404Page
    ),
]