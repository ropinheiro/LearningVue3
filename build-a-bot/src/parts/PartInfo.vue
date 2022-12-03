<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<script>
import getPartsMixin from "./get-parts-mixin";
export default {
  name: "PartInfo",
  mixins: [getPartsMixin],
  props: {
    partType: { type: String },
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      // Note for beginners:
      // The "+" at the left of "id" converts the original string to an integer
      return this.parts[this.partType].find((part) => part.id === +this.id);
    },
  },
};
</script>
