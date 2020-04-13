<template>
  <div class="tabbar">
    <div class="tabbar-main">
      <router-link
        v-for="(item, index) in source"
        :key="index"
        :to="{ path: item.path }"
        class="tabbar-item"
      >
        <img class="icon" v-if="action === index" :src="item.actionIcon" />
        <img class="icon" v-else :src="item.icon" />
        <p>{{item.text}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    source: {
      type: Array,
      default: () => [],
      required: true,
      validator(val) {
        return val.every(item => {
          return (
            item.text != void 0 &&
            item.icon != void 0 &&
            item.actionIcon != void 0 &&
            item.path != void 0
          );
        });
      }
    }
  },
  data() {
    return {
      action: 0
    };
  }
};
</script>

<style lang="scss" scoped>
.tabbar {
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  border-top: 1px solid #eee;

  .tabbar-main {
    display: flex;

    .tabbar-item {
      flex-basis: 50%;
      color: #eee;
      text-decoration: none;

      &.router-link-active {
        color: #111;
      }

      .icon {
        width: 40px;
        height: 40px;
      }

      p {
        padding: 0;
        margin: 0;
      }
    }
  }
}
</style>
