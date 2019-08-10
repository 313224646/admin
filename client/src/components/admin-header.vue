<template>
  <div class="header">
    <div @click="$store.commit('asideCollapseToggle')" class="icon-wrap icon-wrap--normal cursor"><i :class="asideCollapse"></i></div>
    <el-breadcrumb class="el-breadcrumb">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="header-right">
      <el-input class="header-right-search" v-model="search" placeholder="搜索..."></el-input>
      <el-tooltip effect="dark" content="没有日志或异常" placement="bottom">
        <div class="icon-wrap icon-wrap--small cursor"><i class="el-icon-monitor cursor"></i></div>
      </el-tooltip>
      <div class="icon-wrap icon-wrap--small cursor"><i class="el-icon-full-screen cursor"></i></div>
      <div class="icon-wrap icon-wrap--small cursor"><i class="el-icon-bell cursor"></i></div>
      <div class="icon-wrap icon-wrap--small cursor"><i class="el-icon-more cursor"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'admin-header',
  components: {},
  data () {
    return {
      search: ''
    }
  },
  computed: {
    asideCollapse () {
      return this.$store.state.asideCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'
    }
  },
  methods: {},
  created () {},
  mounted () {},
  activated () {}
}
</script>

<style scoped lang="stylus">
.cursor
  cursor pointer
  transition background-color .3s ease
  &:hover
    background-color #f8f8f9
.icon-wrap
  text-align center
  font-size 20px
  color #6e7482
.icon-wrap--normal
  width 64px
.icon-wrap--small
  width 44px
.header
  display flex
  .el-breadcrumb
    line-height inherit
    margin-left 6px
    flex auto
  .header-right
    display flex
    align-items center
    .header-right-search
      width 200px
      font-size 14px
    .el-icon-more
      transform rotateZ(90deg)
</style>

<style lang="stylus">
.header
  .header-right
    .el-input__inner
      border 0
</style>
