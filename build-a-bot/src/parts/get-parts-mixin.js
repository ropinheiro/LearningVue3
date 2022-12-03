// TODO: stop using mixins, go for the Composition API
export default {
  created() {
    // Beginner note: this will get the parts asynchronously.
    // The action will fill a "parts" property in the store's state.
    // We should be aware that the "parts" property can be accessed
    // before it is filled, therefore the Beginner note below.
    this.$store.dispatch("getParts");
  },
  computed: {
    parts() {
      return (
        this.$store.state.robots.parts || {
          // Beginner note: return an empty (but valid) object
          // while the store is not filled with the parts.
          heads: [],
          arms: [],
          torsos: [],
          bases: [],
        }
      );
    },
  },
};
