import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo.vue";
import Search from "../search/Search.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/build",
      name: "Build",
      component: RobotBuilder,
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true,
    },
    {
      path: "/search",
      name: "Search",
      component: Search,
    },
  ],
});
