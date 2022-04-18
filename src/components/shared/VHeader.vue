
<script>
export default {
  name: "VHeader",
  props: {
    level: {
      type: Number,
      default: 1,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  render: function (createElement) {
    return createElement(
      `h${this.level}`, // tag name
      { class: "teal" },
      this.$slots.default // array of children
    );
  },
};
</script>
<style scoped>
.teal {
  color: #0e635c;
  font-weight: 900;
}
</style>