<template>
  <div>
    <Notification />
    <Reconnecting />
    <div class="row">
      <div class="col">
        <VHeader :level="4"> Live Chat </VHeader>
      </div>
      <div class="col">
        <ChatContainer />
      </div>
    </div>
  </div>
</template>
<script>
import Notification from "../components/Notification.vue";
import Reconnecting from "../components/Reconnecting.vue";
import VHeader from "../components/shared/VHeader.vue";
import ChatContainer from "../components/chat/ChatContainer.vue";

export default {
  name: "Layout",
  components: { Notification, Reconnecting, VHeader, ChatContainer },
  created() {
    const name = `User: ${Math.floor(Math.random() * 100 + 1)}`;
    this.$store.dispatch("user/setUser", name);
  },
};
</script>