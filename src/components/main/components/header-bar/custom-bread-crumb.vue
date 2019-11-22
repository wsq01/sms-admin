<template>
  <div class="custom-bread-crumb">
    <Breadcrumb :style="{fontSize: `{$fontSize}px`}">
      <BreadcrumbItem v-for="item in list" :to="item.to" :key="`bread-crumb-${item.name}`">
        <common-icon :type="item.icon || ''" style="margin-right: 4px"></common-icon>
        {{ showTitle(item) }}
      </BreadcrumbItem>
    </Breadcrumb>
  </div>
</template>

<script>
import { showTitle } from '@/libs/util'
import CommonIcon from '@/components/common-icon/common-icon'

export default {
  name: 'customBreadCrumb',
  props: {
    list: {
      type: Array,
      default: () => []
    },
    fontSize: {
      type: Number,
      default: 14
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  components: {
    CommonIcon
  },
  methods: {
    showTitle (item) {
      return showTitle(item, this)
    },
    isCustomIcon (iconName) {
      return iconName.indexOf('_') === 0
    },
    getCustomIconName (iconName) {
      return iconName.slice(1)
    }
  }
}
</script>

<style lang="less" scoped>
.custom-bread-crumb{
  display: inline-block;
  vertical-align: top;
}

</style>
