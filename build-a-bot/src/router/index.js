import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../home/HomePage.vue";
import RobotBuilder from "../build/RobotBuilder.vue";
import PartInfo from "../parts/PartInfo.vue";
import Search from "../search/Search.vue";
import BrowseParts from "../parts/BrowseParts.vue";
import RobotHeads from "../parts/RobotHeads.vue";
import RobotArms from "../parts/RobotArms.vue";
import RobotTorsos from "../parts/RobotTorsos.vue";
import RobotBases from "../parts/RobotBases.vue";
import SidebarStandard from "../sidebars/SidebarStandard.vue";
import SidebarBuild from "../sidebars/SidebarBuild.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      components: {
        default: HomePage,
        sidebar: SidebarStandard,
      },
    },
    {
      path: "/build",
      name: "Build",
      components: {
        default: RobotBuilder,
        sidebar: SidebarBuild,
      },
    },
    {
      // Beginner note: this must go before the /parts/:partType/:id
      //                route, otherwise /parts/browse will match it.
      //                (:partType = "browse" and :id = empty)
      //                Order in routing is important: if a URL matches
      //                multiple route patterns, the topmost one will
      //                be the one followed.
      path: "/parts/browse",
      name: "BrowseParts",
      component: BrowseParts,
      children: [
        { name: "BrowseHeads", path: "heads", component: RobotHeads },
        { name: "BrowseArms", path: "arms", component: RobotArms },
        { name: "BrowseTorsos", path: "torsos", component: RobotTorsos },
        { name: "BrowseBases", path: "bases", component: RobotBases },
      ],
    },
    {
      path: "/parts/:partType/:id",
      name: "Parts",
      component: PartInfo,
      props: true,
      beforeEnter(to, _from, next) {
        const isValidId = Number.isInteger(Number(to.params.id));
        next(isValidId);
      },
    },
    {
      path: "/search",
      name: "Search",
      components: {
        default: Search,
        sidebar: SidebarStandard,
      },
    },
  ],
});
