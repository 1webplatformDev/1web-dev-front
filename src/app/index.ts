import { Router } from "@app/lib/router/Router";
import { Route } from "@app/lib/router/Route";
import { HomePage } from "@page/Home/index";
import { SqlGeneratorPage } from "@page/SqlGenerator/index";
import { LayoutMain } from "@/widgets/LayoutMain";

new Router(
    [
        new Route("/", new LayoutMain(HomePage())),
        new Route("/sql-generator", new LayoutMain(SqlGeneratorPage()) ),
    ]
)