<template>
  <div>
    <MessagesContainer />
    <br />
    <VTextarea v-model="message" :value="message" @onEnter="onEnter" />
  </div>
</template>
<script>
import MessagesContainer from "./MessagesContainer.vue";
import VTextarea from "../shared/VTextarea.vue";
import Model from "../../models/Message.js";

export default {
  name: "ChatContainer",
  components: { MessagesContainer, VTextarea },
  data() {
    return {
      message: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user.name;
    },
  },
  methods: {
    onEnter() {
      this.$ws.sendMessage(new Model(this.user, this.message));
      this.message = "";
    },
  },
};
</script> 