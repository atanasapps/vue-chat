<template>
  <button type="button" :disabled="disable" @click="onClick">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "VButton",
  props: {
    disable: { type: Boolean, default: false },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
<style scoped lang="scss">
button {
  padding: 20px 16px;
  background: #1d8c80;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 4px;
  border-left: none;
  cursor: pointer;

  &:hover {
    background: #2b6d66;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}
</style>