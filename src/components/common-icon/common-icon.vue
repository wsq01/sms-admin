<template>
  <component :is="iconType" :type="iconName" :color="iconColor" :size="iconSize"></component>
</template>

<script>
import Icons from '@/components/icons/icons'

export default {
  name: 'CommonIcon',
  props: {
    type: {
      type: String,
      required: true
    },
    color: String,
    size: Number
  },
  components: {
    Icons
  },
  methods: {
    getCustomIconName (iconName) {
      return iconName.slice(1)
    }
  },
  computed: {
    iconType () {
      return this.type.indexOf('_') === 0 ? 'Icons' : 'Icon'
    },
    iconName () {
      return this.iconType === 'Icons'
        ? this.getCustomIconName(this.type)
        : this.type
    },
    iconColor () {
      return this.color || ''
    },
    iconSize () {
      return this.size || (this.iconType === 'Icons' ? 12 : undefined)
    }
  }
}
</script>

<style lang="less" scoped>
</style>
