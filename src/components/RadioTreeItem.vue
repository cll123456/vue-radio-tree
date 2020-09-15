<template>
  <div class="radio-tree-item_containers">
    <ul>
      <li v-for="(item,index) in data" :key="item[props.value]" class="tree-item_list">
        <div @click="nodeClick(index)">
          <i class="iconfont" :class="{
          'radio-tree-item-checked': showChildren[index],
          'radio-tree-item-unchecked': !showChildren[index]
        }"
             :data-value="item[props.value]"
          ></i>
          <span v-if="needShowKey">{{ item[props.value] + item[props.label] }}</span>
          <span v-else>{{ item[props.label] }}</span>
        </div>
        <keep-alive>
          <radio-tree-item v-if="showChildren[index] && item.children" :data="item.children"/>
        </keep-alive>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RadioTreeItem",
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
    chooseColor:{
      type: String,
      default: '#e7390e'
    }
  },
  data() {
    return {
      // 是否选中
      showChildren: [],
    }
  },
  methods: {
    nodeClick(index) {
      this.showChildren.forEach((p, i) => {
        this.$set(this.showChildren, i, false);
      });
      const flag = !this.showChildren[index];
      this.$set(this.showChildren, index, flag);
    }
  },
  mounted() {
    // 动态设置选中的颜色
    console.log()
    document.getElementsByClassName('radio-tree-item-checked::before').style && document.getElementsByClassName('radio-tree-item-checked::before').style.setProperty('--radio-tree-item-choose-color', this.chooseColor);
  }
}
</script>

<style lang="scss" scoped>
:root{
  --radio-tree-item-choose-color: #e7390e,
}
ul{
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: 'iconfont';  /* project id 2048644 */
  src: url('//at.alicdn.com/t/font_2048644_m4flpg7mgy.eot');
  src: url('//at.alicdn.com/t/font_2048644_m4flpg7mgy.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2048644_m4flpg7mgy.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2048644_m4flpg7mgy.woff') format('woff'),
  url('//at.alicdn.com/t/font_2048644_m4flpg7mgy.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2048644_m4flpg7mgy.svg#iconfont') format('svg');
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.tree-item_list {
  cursor: pointer;
  list-style: none;
  margin-left: 10px;
}

.radio-tree-item-checked::before {
  content: '\e674';
  color: var(--radio-tree-item-choose-color)
}

.radio-tree-item-unchecked::before {
  content: '\e630';
}
</style>
