import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

const featureRoutes: Array<Route> = [
  {
    path: "",
    loadChildren: () =>
      import("./../home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "",
    redirectTo: "",
    pathMatch: "full",
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(featureRoutes)],
  exports: [RouterModule],
})
export class RoutingModule {}
