<template>
  <div class="header-bar">
    <sider-trigger :collapsed="collapsed" icon="md-menu" @on-change="handleCollapsedChange"></sider-trigger>
    <custom-bread-crumb show-icon style="margin-left: 30px" :list="breadCrumbList"></custom-bread-crumb>
    <div class="custom-content-con">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import SiderTrigger from './sider-trigger'
import CustomBreadCrumb from './custom-bread-crumb'

export default {
  name: 'HeaderBar',
  data () {
    return {}
  },
  props: {
    collapsed: Boolean
  },
  components: {
    SiderTrigger,
    CustomBreadCrumb
  },
  computed: {
    breadCrumbList () {
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
    handleCollapsedChange (state) {
      this.$emit('on-coll-change', state)
    }
  }
}
</script>

<style lang="less" scoped>
.header-bar{
  width: 100%;
  height: 100%;
  position: relative;
  .custom-content-con{
    float: right;
    height: auto;
    padding-right: 20px;
    line-height: 64px;
    & > *{
      float: right;
    }
  }
}
</style>
