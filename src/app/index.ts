import { Router } from "@app/lib/router/Router";
import { Route } from "@app/lib/router/Route";
import { HomePage, SqlGeneratorPage } from "@page/index";

new Router(
    [
        new Route("/", HomePage()),
        new Route("/sql-generator", SqlGeneratorPage()),
    ]
)