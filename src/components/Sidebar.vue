<template>
  <div id="20" class="row">
    <div class="col-lg-12 col-md-12">
      <VHeader :level="3"> Notificatons </VHeader>
    </div>
    <div class="col-lg-12 col-md-12">
      <div class="message-container">
        <ul ref="list" class="list">
          <li v-for="(msg, i) in notifications" :key="i">
            {{ msg.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import VHeader from "./Shared/VHeader.vue";

export default {
  name: "Sidebar",
  components: {
    VHeader,
  },
  computed: {
    notifications() {
      return this.$store.state.notification.notifications;
    },
  },
  watch: {
    notifications: "scrollBottom",
  },
  methods: {
    scrollBottom() {
      this.$nextTick(() => {
        this.$refs.list.scrollTo(0, this.$refs.list.scrollHeight);
      });
    },
  },
};
</script>
<style scoped>
.list {
  font-size: 14px;
  font-style: italic;
  color: black;
  text-align: left;
  list-style-type: none;
  margin-left: -25px;
}
</style>