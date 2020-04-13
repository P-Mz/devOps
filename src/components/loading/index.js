import Vue from 'vue';
import Loading from './src/loading.vue';

const Mask = Vue.extend(Loading);

const loadingDirective = {};

loadingDirective.install = Vue => {

  // 插入Loadin
  const inserDom = (parent, el) => {
    parent.appendChild(el.mask);
    el.instance.visible = true;
  }

  // 切换组件状态
  const toggleLoading = (el, binding) => {
    if (binding.value) {
      Vue.nextTick(_ => {
        inserDom(el, el, binding)
      })
    } else {
      el.instance.visible = false;
    }
  }

  Vue.directive('loading', {
    bind(el, binding) {

      const mask = new Mask({
        el: document.createElement('div'),
        data: {}
      });

      console.log(el);

      el.instance = mask;
      el.mask = mask.$el;
      el.maskStyle = {};

      binding.value && toggleLoading(el, binding);
    },

    update(el, binding) {
      if (binding.oldValue !== binding.value) {
        toggleLoading(el, binding);
      }
    },
    
    unbind() {

    }
  });
}


export default loadingDirective;