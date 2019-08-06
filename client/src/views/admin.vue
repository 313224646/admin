<template>
  <div class="admin">
    <admin-menu class="aside" />
    <div class="main">
      <admin-header />
      <router-view/>
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
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style scoped lang="stylus">
.admin
  display flex
  .aside
    position fixed
    top 0
    left 0
    width 256px
    height 100vh
    box-shadow 2px 0 6px rgba(0,21,41,.35)
  .main
    margin-left 256px
</style>
