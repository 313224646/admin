<template>
  <el-menu
    :collapse="asideCollapse"
    :unique-opened="true"
    background-color="#3e3f4a"
    text-color="#d0d0d0"
    active-text-color="#409EFF">
    <el-submenu v-for="item in menu" :key="item.id" :index="item.id">
      <template slot="title">
        <i class="el-icon-eleme"></i>
        <span>{{item.title}}</span>
      </template>
      <template v-for="child in item.children">
        <!-- 子菜单 -->
        <el-menu-item
          v-if="!child.children" 
          :key="child.id" 
          :index="item.id + '-' + child.id">
          {{child.label}}
        </el-menu-item>
        <!-- 二级菜单存在子菜单 -->
        <el-submenu 
          v-else
          :key="child.id" 
          :index="item.id + '-' + child.id">
          <template slot="title">{{child.label}}</template>
          <!-- 最多支持三级菜单 -->
          <el-menu-item 
            v-for="lastChild in child.children"
            :key="lastChild.id" 
            :index="item.id + '-' + child.id + '-' + lastChild.id">
            {{child.label}}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: 'admin-menu',
  components: {},
  data () {
    return {
      menu: [{
        title: 'Dashboard',
        id: 'a',
        children: [{
          label: '主控台',
          id: '1'
        }, {
          label: '监控页',
          id: '2'
        }, {
          label: '工作台',
          id: '3'
        }]
      }, {
        title: '表单页面',
        id: 'b',
        children: [{
          label: '基础表单',
          id: '4'
        }, {
          label: '高级表单',
          id: '5'
        }, {
          label: '分布表单',
          id: '6'
        }, {
          label: '表单详情',
          id: '7'
        }]
      }, {
        title: '列表页面',
        id: 'c',
        children: [{
          label: '基础列表',
          id: '8'
        }, {
          label: '卡片列表',
          id: '9'
        }, {
          label: '用户列表',
          id: '10'
        }, {
          label: '商品列表',
          id: '11'
        }, {
          label: '查询列表',
          id: '12'
        }]
      }]
    }
  },
  computed: {
    asideCollapse () {
      return this.$store.state.asideCollapse
    }
  },
  methods: {
    openMenu (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped lang="stylus">
.el-menu
  border 0
</style>
