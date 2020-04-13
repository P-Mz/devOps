<template>
  <div class="card-list">
    <div class="card-item" v-for="(item, index) in source" :key="index">
      <router-link v-if="item.path">
        <img :src="item.imgUrl" />
      </router-link>
      <img v-else :src="item.imgUrl" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    source: {
      type: Array,
      default: () => ([])
    }
  }
};
</script>

<style lang="scss" scoped>
.card-list {
  height: 100%;
  padding: 24px;

  .card-item {
    width: 100%;
    height: 300px;
  }
}
</style>