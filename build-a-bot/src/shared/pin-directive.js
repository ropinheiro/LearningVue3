export default function (element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = "absolute";
}

// Beginner note: doing the directive the way shown above instead
// of the way shown below (done previously) allows the directive
// to react to both "beforeMount" and "updated" in a less cerimony

/*
export default {
  beforeMount(element) {
    element.style.position = "absolute";
    element.style.bottom = "5px";
    element.style.right = "5px";
  },
  updated(element) {
    element.style.position = "absolute";
    element.style.bottom = "5px";
    element.style.right = "5px";
  },
};
*/
