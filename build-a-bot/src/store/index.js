import { createStore } from "vuex";
import robotsModule from "./modules/robots";

export default createStore({
  modules: {
    robots: robotsModule,
  },
});
