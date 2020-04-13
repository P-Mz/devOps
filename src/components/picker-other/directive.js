import Vue from 'vue';
import PickerOther from './src/picker-other.vue';

const Picker = Vue.extend(PickerOther);

// el：指令绑定的元素，可以用来直接操作DOM（除了el之外，其它参数都应该是只读的，如果需要钩子函数数据共享-dataset）
// binding：指令的详细信息，它是一个对象
//  name : 指令名，不包括v-前缀
//  value：指令的绑定值（是算式会计算结果）
//  oldValue：指令绑定的前一个值（update和componentUpdated钩子中可用）
//  expression：字符串形式的指令表达式（不会计算结果）
//  arg：传给指令的参数
//  modifiers：一个包含修饰符的对象
// vnode：Vue编译生成的虚拟节点
// oldVnode：上一个虚拟节点（update和componentUpdated钩子中可用）


const pickerDirective = {};
pickerDirective.install = Vue => {

  const clickHandler = el => {
    console.log(e);
  }


  Vue.directive('picker-other', {

    bind(el, binding, vnode) {
      console.log(el, binding, vnode);

      el.addEventListener('click', clickHandler);
      
      const mask = new Picker({
        el: document.createElement('div'),
        data: {}
      });

      // el.instance = picker;
      // el.picker = picker.$el;
      // el.pickerStyle = {};

      // document.body.appendChild(el.picker);
    },

    unbind(el, binding) {
      
      // 取消事件监听
      el.removeEventListener('click', clickHandler);
    }
  });
}

export default pickerDirective;