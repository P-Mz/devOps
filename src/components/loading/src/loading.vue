<template>
  <transition name="loading-fade">
    <div class="loading-mask" v-show="visible">loading</div>
  </transition>
</template>

<script>
export default {

  data() {
    return {
      visible: false
    }
  }

}
</script>

<style lang="scss" scoped>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
}
</style>