import { Router } from "./lib/router/Router";
import { Route } from "./lib/router/Route";
import { HomePage, SqlGenerator } from "../page/index";

new Router(
    [
        new Route("/", HomePage()),
        new Route("/sql-generator", SqlGenerator()),
    ]
)