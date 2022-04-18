<template>
  <div :class="['message', isSender(message.sender)]">
    <div class="user">{{ message.sender }}</div>
    <hr />
    <div class="text">{{ message.text }}</div>
    <span class="date">{{ message.date | formatDate }}</span>
  </div>
</template>
<script>
import DateHelper from "../../utils/date";

export default {
  name: "Message",
  props: { message: { type: Object, required: true } },
  filters: {
    formatDate: DateHelper.formatDate,
  },
  computed: {
    user() {
      return this.$store.state.user.name;
    },
  },
  methods: {
    isSender(sender) {
      return sender === this.user ? "sender" : "receiver";
    },
  },
};
</script>
<style scoped>
.message {
  padding: 15px;
  border-radius: 8px;
  display: table;
}

.receiver {
  background-color: #1fc0c629;
  text-align: left;
  float: left;
}
.sender {
  background-color: #1f9dcd26;
  text-align: right;
  float: right;
}
.date {
  color: rgba(10, 10, 10, 0.627);
  font-size: 10px;
}
.sender.date {
  float: left;
}
.receiver.date {
  float: right;
}
.text {
  white-space: break-spaces;
}
.user {
  font-size: 12px;
  font-weight: 700;
  color: #066c97;
}
hr {
  margin: unset;
  border-color: #1f9dcd;
}
</style>