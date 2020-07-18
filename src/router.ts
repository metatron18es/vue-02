import Router, { RouteConfig } from "vue-router";
import { LoginPageContainer } from "./pages/login";
import { RecipeListPage } from "./pages/recipe/list";

export const baseRoutes = {
  root: "/",
  login: "/login",
  recipe: "/recipe",
}

export type BaseRoutes = typeof baseRoutes;

const routes: RouteConfig[] = [
  {path: baseRoutes.root, redirect: baseRoutes.login},
  {path: baseRoutes.login, component: LoginPageContainer},
  {path: baseRoutes.recipe, component: RecipeListPage}
];

export const router = new Router({
  routes,
});