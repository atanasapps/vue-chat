<template>
  <div v-show="!isOnline" class="reconnect">
    <div class="content">
      <div class="message">{{ message }}</div>
      <div class="dots">
        <div class="dot1"></div>
        <div class="dot2"></div>
        <div class="dot3"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reconnect",
  props: {
    message: { type: String, default: "Reconnecting" },
  },
  computed: {
    isOnline() {
      return this.$store.state.user.isOnline;
    },
  },
};
</script>
<style scoped>
.reconnect {
  display: block;
  position: absolute;
  background: rgba(60, 60, 59, 0.411);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.content {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.message {
  font-size: 25px;
  font-weight: bolder;
  color: #d37e0fc2;
  animation-name: fade;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes fade {
  0% {
    color: #d37e0f8c;
  }

  25% {
    color: #d37e0fbe;
  }

  50% {
    color: #d37e0f;
  }

  75% {
    color: #d37e0fbe;
  }

  100% {
    color: #d37e0f8c;
  }
}

.dots {
  display: flex;
  flex-direction: row;
}
.dot1,
.dot2,
.dot3 {
  background: #fff;
  width: 5px;
  height: 5px;
  border: double;
  border-color: #d37e0f8c;
  border-radius: 50%;
  margin: 10px;
}

.dot1 {
  animation: jump 1.6s -0.32s linear infinite;
  background: #d37e0f8c;
}

.dot2 {
  animation: jump 1.6s -0.16s linear infinite;
  background: #d37e0fbe;
}

.dot3 {
  animation: jump 1.6s linear infinite;
  background: #d37e0f;
}

@keyframes jump {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(2);
    transform: scale(2);
  }
}
</style>