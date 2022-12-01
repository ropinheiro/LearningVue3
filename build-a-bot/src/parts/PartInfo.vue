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
  computed: {
    part() {
      const { partType, id } = this.$route.params;
      // Note for beginners:
      // The "+" at the left of "id" converts the original string to an integer
      return parts[partType].find((part) => part.id === +id);
    },
  },
};
</script>
