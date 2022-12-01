<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<script>
import parts from "../data/parts";
export default {
  name: "PartInfo",
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
      return parts[this.partType].find((part) => part.id === +this.id);
    },
  },
};
</script>
