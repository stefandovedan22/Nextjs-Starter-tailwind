interface RouteAttributesInterface {
  path: String;
  name: String;
}

export enum AppRoutes {
  home = "/",
  products = "/products",
}

const routes: RouteAttributesInterface[] = [
  {
    path: AppRoutes.home,
    name: "appRoutes.home",
  },
];

export default routes;
