export default {
  props: {
    parentItem: { // 父级菜单对象
      type: Object,
      default: () => {}
    },
    theme: String,
    iconSize: Number
  },
  computed: {
    parentName () {
      return this.parentItem.name
    },
    children () {
      return this.parentItem.children
    },
    textColor () {
      return this.thieme === 'dark' ? '#fff' : '#495060'
    }
  }
}
