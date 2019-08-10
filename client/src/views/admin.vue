<template>
  <div class="admin">
    <admin-menu class="admin-aside" />
    <div class="admin-main" :class="{'admin-main--active': asideCollapse}">
      <admin-header class="admin-main-header"/>
      <router-view class="admin-main-body"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin',
  components: {
    'admin-menu': () => import('@/components/admin-menu'),
    'admin-header': () => import('@/components/admin-header')
  },
  data () {
    return {
    }
  },
  computed: {
    asideCollapse () {
      return this.$store.state.asideCollapse
    }
  },
  methods: {},
  beforeCreate () {}
}
</script>

<style scoped lang="stylus">
.admin
  display flex
  .admin-aside
    position fixed
    top 0
    left 0
    height 100vh
    box-shadow 2px 0 6px rgba(0,21,41,.35)
    z-index 13
    &:not(.el-menu--collapse)
      width 256px
  .admin-main
    position relative
    flex auto
    margin-left 256px
    transition margin-left .3s ease
    .admin-main-header
      position fixed
      top 0
      right 0
      left 256px
      height 64px
      line-height 64px
      box-shadow 0 1px 4px rgba(0,21,41,.08)
      transition left .3s ease
    .admin-main-body
      height 2000px
  .admin-main--active
    margin-left 64px
    .admin-main-header
      left 64px
</style>
