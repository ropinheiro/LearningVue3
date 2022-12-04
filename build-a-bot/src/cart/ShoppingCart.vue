<template>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cart" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ $filters.currency(robot.cost, "€") }}
          </td>
        </tr>
      </tbody>
    </table>
    <h2 class="saleItems">You saved money on these robots:</h2>
    <table>
      <thead>
        <tr>
          <th class="robot-title">Robot</th>
          <th class="cost">Cost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartSaleItems" :key="index">
          <td class="robot-title">
            {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ $filters.currency(robot.cost, "€") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// Beginner note: see the beginner note below about filters.
// import currencyFilter from "../shared/currency-filter";
export default {
  name: "Cart",
  // Beginner note: this is the Vue3 syntax that must be used
  // instead of the deprecated "filters:" in Vue2.
  // And... it is commented, because it started to be defined
  // here, and now it is defined globally (see main.js).
  /*
  methods: {
    currency: currencyFilter,
  },
  */
  computed: {
    cart() {
      return this.$store.state.robots.cart;
    },
    cartSaleItems() {
      return this.$store.getters["robots/cartSaleItems"];
    },
  },
};
</script>

<style scoped>
td,
th {
  padding: 5px;
}
.robot-title {
  text-align: left;
  padding-right: 200px;
}
.cost {
  text-align: right;
}
.saleItems {
  margin-top: 50px;
  font-size: 18px;
  color: red;
}
</style>
