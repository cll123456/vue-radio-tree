<template>
  <div id="app">
   <RadioTree :need-show-key="true" :data="treeData" :choose-color="`#2d62a5`"></RadioTree>
  </div>
</template>

<script>
import RadioTree from "./components/RadioTree";
export default {
  name: 'app',
  components:{
    RadioTree
  },
  data () {
    return {
      treeData:[{"children":[{"children":[{"children":[{"id":"1.1.1.1","name":"已办理","parentId":"1.1.1"},{"children":[{"children":[{"id":"1.1.1.2.3.1","name":"是","parentId":"1.1.1.2.3"},{"id":"1.1.1.2.3.2","name":"否","parentId":"1.1.1.2.3"}],"id":"1.1.1.2.3","name":"是否为租赁房屋？","parentId":"1.1.1.2"},{"children":[{"id":"1.1.1.2.4.1","name":"是","parentId":"1.1.1.2.4"},{"id":"1.1.1.2.4.2","name":"否","parentId":"1.1.1.2.4"}],"id":"1.1.1.2.4","name":"是否为应招标项目？","parentId":"1.1.1.2"},{"children":[{"id":"1.1.1.2.5.1","name":"是","parentId":"1.1.1.2.5"},{"id":"1.1.1.2.5.2","name":"否","parentId":"1.1.1.2.5"}],"id":"1.1.1.2.5","name":"是否为现状改建项目及其他应办理规划手续的工程？","parentId":"1.1.1.2"}],"id":"1.1.1.2","name":"未办理","parentId":"1.1.1"}],"id":"1.1.1","name":"是否已办理《装饰装修施工许可证》？","parentId":"1.1"},{"children":[{"id":"1.1.2.1","name":"不属于（需要办理《建设工程竣工验收消防备案》）","parentId":"1.1.2"},{"id":"1.1.2.2","name":"属于（需要办理《建设工程消防验收》）","parentId":"1.1.2"}],"id":"1.1.2","name":"是否属于《建设工程消防监督管理规定》（公安部119号令）十三、十四条规定内的建设工程","parentId":"1.1"},{"children":[{"id":"1.1.3.1","name":"已取得","parentId":"1.1.3"},{"children":[{"children":[{"id":"1.1.3.2.9.1","name":"是","parentId":"1.1.3.2.9"},{"id":"1.1.3.2.9.2","name":"否","parentId":"1.1.3.2.9"}],"id":"1.1.3.2.9","name":"是否为住宅工程？","parentId":"1.1.3.2"}],"id":"1.1.3.2","name":"未取得","parentId":"1.1.3"}],"id":"1.1.3","name":"是否已取得北京市房屋建筑和市政基础设施工程竣工验收备案表？","parentId":"1.1"}],"id":"1.1","name":"是","parentId":"1"},{"id":"1.2","name":"否","parentId":"1"}],"id":"1","name":"经营面积是否为300㎡以上（含300㎡）同时合同款在30万以上？","parentId":"-1"},{"children":[{"id":"2.1","name":"已办理","parentId":"2"},{"children":[{"children":[{"id":"2.2.6.1","name":"需要进行竣工验收消防备案的公众聚集场所申请消防安全检查的","parentId":"2.2.6"},{"id":"2.2.6.2","name":"不需要进行竣工验收消防备案的公众聚集场所申请消防安全检查的","parentId":"2.2.6"}],"id":"2.2.6","name":"是否需要进行竣工验收消防备案的公众聚集场所申请消防安全检查的？","parentId":"2.2"}],"id":"2.2","name":"未办理","parentId":"2"}],"id":"2","name":"是否已办理《公众聚集场所投入使用、营业前消防安全检查合格证》?","parentId":"-1"},{"children":[{"children":[{"children":[{"id":"3.1.1.1","name":"已办理","parentId":"3.1.1"},{"id":"3.1.1.2","name":"未办理","parentId":"3.1.1"}],"id":"3.1.1","name":"是否已办理《食品经营许可证》？","parentId":"3.1"}],"id":"3.1","name":"是","parentId":"3"},{"id":"3.2","name":"否（无法满足此条件，不予办理此主题）","parentId":"3"}],"id":"3","name":"厨房和餐厅总面积是否在500㎡以上？","parentId":"-1"},{"children":[{"id":"4.1","name":"已取得","parentId":"4"},{"id":"4.2","name":"未取得","parentId":"4"}],"id":"4","name":"是否已取得建设项目环境影响登记表备案回执？","parentId":"-1"}]
    }
  }
}
</script>

<style lang="scss">

</style>
