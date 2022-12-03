import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      // Beginners note: this /api/... goes to http://localhost:8080,
      // but then gets redirected to 8081 where the build-a-bot-server is
      // expected to be. That redirect/proxy is defined in vue.config.js.
      // By going to the same port than the web app, we avoid CORS errors.
      axios
        .get("/api/parts")
        .then((result) => commit("updateParts", result.data))
        .catch(console.error);
    },
  },
  getters: {
    cartSaleItems(state) {
      // Beginners note: this is not logically "correct".
      // This should return all cart items with at least
      // a part that is on sale. Currently, it is only
      // returning the cart items with ONLY the head part
      // on sale. This was just to simplify the exercise.
      return state.cart.filter((item) => item.head.onSale);
    },
  },
});
