<template>
  <div class="home">
    <router-view />
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <div class="container">
      <button v-picker-other>picker-other</button>
    </div>

    <swiper class="swiper" :options="swiperOption">
      <swiper-slide class="s1">Slide 1</swiper-slide>
      <swiper-slide class="s2">Slide 2</swiper-slide>
      <swiper-slide class="s3">Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <van-button @click="showPicker = true">123123</van-button>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="showPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
    <!-- <mz-tabbar :source="tabbarSource" /> -->
    <van-tabbar v-model="active">
      <van-tabbar-item 
        :icon="active === index ? item.icon : item.actionIcon"
        v-for="(item, index) in tabbarSource"
        :key="index"
      >
        {{item.text}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  data() {
    return {
      active: 0,
      columns: [
        { text: "杭州", label: 1 },
        { text: "宁波", label: 2 },
        { text: "温州", label: 3 },
        { text: "嘉兴", label: 4 },
        { text: "湖州", label: 5 }
      ],
      showPicker: false,
      swiperOption: {
        loop: true,
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      tabbarSource: [
        {
          text: "index",
          icon: require("../assets/logo.png"),
          actionIcon: "../assets/logo.png",
          path: "/index"
        },
        {
          text: "self",
          icon: require("../assets/logo.png"),
          actionIcon: require("../assets/logo.png"),
          path: "/self"
        }
      ]
    };
  },

  methods: {
    onConfirm(value, index) {
      // this.$toast(`当前值：${value}, 当前索引：${index}`);
      console.log(value, index);
      this.showPicker = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;
  height: 300px;
}
.swiper-slide {
  width: 70%;
  background-color: #aaa;
}
.swiper-slide.s1 {
  background-color: red;
}
.swiper-slide.s2 {
  background-color: blue;
}
.swiper-slide.s3 {
  background-color: green;
}
</style>