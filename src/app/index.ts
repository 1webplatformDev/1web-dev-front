import { Router } from "@app/lib/router/Router";
import { Route } from "@app/lib/router/Route";
import { HomePage } from "@page/Home/index";
import { SqlGeneratorPage } from "@page/SqlGenerator/index";
import { LayoutMainComponent } from "@/widgets/LayoutMain";

const layoutMain = new LayoutMainComponent();
// todo LayoutMain каждый раз перерисосывается
new Router(
    [
        new Route("/", new HomePage(), layoutMain),
        new Route("/sql-generator", new SqlGeneratorPage(), layoutMain),
    ]
)