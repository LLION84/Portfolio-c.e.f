import NotFound from "./component/NotFound.vue";
import Home from "./component/Home.vue";

export const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/not-found", component: NotFound, name: "NotFound" },
  { path: "/:pathMatch(.*)*", redirect: "/not-found" }, // route 404 catch-all
];
