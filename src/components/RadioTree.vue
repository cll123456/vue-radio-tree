<template>
  <div class="radio-tree_container">
    <template v-for="(item, index) in data">
      <div :gutter="20" class="title_container" :key="index + new Date().getTime()">
        <slot name="titlePrefix"></slot>
        <span class="main-title" v-if="needShowKey">{{ item[props.value] + item[props.label] }}</span>
        <span class="main-title" v-else>{{ item[props.label] }}</span>
        <radio-tree-item :data="item.children"
                         :props="props"
                         :choose-color="chooseColor"
                         :need-show-key="needShowKey"/>
      </div>
    </template>
  </div>
</template>

<script>
import RadioTreeItem from "./RadioTreeItem";

export default {
  name: "RadioTree",
  components: {RadioTreeItem},
  props: {
    /**
     * 传入的树形结构
     */
    data: {
      type: Array,
      default: () => [],
      required: true
    },
    /**
     * 树里面组件的属性对应值
     */
    props: {
      type: Object,
      default: () => ({
        value: 'id',
        label: 'name'
      })
    },
    /**
     * 树形里面是否需要显示key
     */
    needShowKey: {
      type: Boolean,
      default: false
    },
    /**
     * 选中的radio的颜色
     */
    chooseColor: {
      type: String,
      default: '#e7390e'
    }
  },
  methods:{
    /**
     * 获取选中的节点
     */
    getCheckedId(){
      let checkedList = document.getElementsByClassName(
        "radio-tree-item-checked"
        ),
        resArr = [];
      for (let i = 0, l = checkedList.length; i < l; i++) {
        resArr.push(checkedList[i].getAttribute("data-value"));
      }
     return resArr;
    }
  }
}
</script>

<style lang="scss" scoped>
.radio-tree_container{
  width: 100%;

  .title_container{
    margin-bottom: 10px;

    .main-title{
      font-weight: 800;
    }
  }
}
</style>
