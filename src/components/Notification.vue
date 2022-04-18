<template>
  <div class="notification">
    <div ref="item" v-for="(message, i) in notifications" :key="i" class="item">
      {{ message.text }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Notification",
  props: {
    timeout: { type: Number, default: 6000 },
  },
  data() {
    return {
      timer: null,
    };
  },
  computed: {
    notifications() {
      return this.$store.state.notification.notifications;
    },
  },
  watch: {
    notifications: "start",
  },
  methods: {
    start() {
      window.clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.$store.dispatch("notification/setNotifications", []);
      }, this.timeout);
    },
  },
};
</script>
<style scoped>
.notification {
  position: absolute;
  top: 10px;
  right: 10px;
}

.notification .item {
  word-wrap: break-word;
  max-width: 300px;
  padding: 15px;
  margin: 5px 0;
  border-radius: 10px;
  word-wrap: break-word;
  background: linear-gradient(
    132deg,
    rgb(227, 244, 253) 0%,
    rgb(170, 209, 226) 100%
  );
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  animation-name: fadeDown;
  animation-duration: 1s;
  animation-timing-function: ease;
}

@keyframes fadeDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>