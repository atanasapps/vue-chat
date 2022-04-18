<template>
  <textarea
    :value="value"
    type="text"
    placeholder="Write message"
    rows="2"
    maxlength="250"
    @input="$emit('input', $event.target.value)"
    v-on:keyup.enter="onEnter"
  />
</template>
<script>
export default {
  name: "VTextarea",
  props: { value: { type: String, default: "" } },
  methods: {
    onEnter(e) {
      if (e.target.value.trim() === "") return;
      if (e.keyCode == 13 && e.shiftKey) return;
      this.$emit("onEnter");
    },
  },
};
</script>
<style scoped>
textarea {
  width: 100%;
  padding: 12px 20px;
  overflow: auto;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  float: left;
}
textarea:focus {
  outline: none;
  background-color: #c7f0ec;
}
</style>