<template>
  <div ref="container" class="message-container">
    <div v-for="(message, i) in messages" :key="i">
      <MessageItem :message="message" />
    </div>
  </div>
</template>
<script>
import MessageItem from "./MessageItem.vue";

export default {
  name: "MessagesContainer",
  components: { MessageItem },
  watch: {
    messages() {
      this.$nextTick(() => {
        this.$refs.container.scrollTo(0, this.$refs.container.scrollHeight);
      });
    },
  },
  computed: {
    messages() {
      return this.$store.state.message.messages;
    },
  },
};
</script>
<style scoped>
.message-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 70vh;
  background-color: white;
  border: inherit;
  border-radius: 4px;
  padding: 10px;
  overflow-y: scroll;
  overflow: auto;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}

@media screen and (max-width: 900px) and (min-width: 600px) {
  .message-container {
    height: 55vh;
  }
}
</style>