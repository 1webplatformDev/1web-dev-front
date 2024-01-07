import { Router } from "./lib/router/Router";
import { Route } from "./lib/router/Route";

import { HomePage, SqlGenerator } from "../page/index";

const links = document.querySelectorAll("a");
for (const link of links) {
    link.click = () => {
        
    }
}

new Router(
    [
        new Route("/", HomePage()),
        new Route("/sql-generator", SqlGenerator()),
    ]
)