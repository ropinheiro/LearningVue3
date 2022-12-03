import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
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
