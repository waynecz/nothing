<template>
  <div class="layout">
    <Menu mode="horizontal" @on-select="changePage" theme="dark" :active-name="currentPage" layout="row center-center">
      <div class="layout-logo"></div>
      <div class="layout-nav">

        <Menu-item name="statistic">
          <Icon type="ios-pie"></Icon>
          活动统计
        </Menu-item>

        <Menu-item name="userManage">
          <Icon type="person-stalker"></Icon>
          用户管理
        </Menu-item>
        <!--<Menu-item name="activityDetail">-->
          <!--<Icon type="grid"></Icon>-->
          <!--活动详情-->
        <!--</Menu-item>-->
      </div>
    </Menu>
    <Menu mode="horizontal" @on-select="changeFilter" :active-name="currentFilter" layout="row center-center">
      <div class="layout-assistant">
        <Menu-item v-for="filter in subMenu" :name="filter.value">{{filter.label}}</Menu-item>
      </div>
    </Menu>
    <h1 class="layout-title">{{pageName}}</h1>

    <router-view class="layout-content block block--card"></router-view>

    <div class="layout-copy">
      11
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  export default{
    data () {
      return {
        currentPage: 'statistic',
        currentFilter: '',
        subMenuMap: {
          statistic: [
            {
              label: '全部',
              value: 'all'
            },
            {
              label: '直播中',
              value: 'live'
            },
            {
              label: '未开始',
              value: 'notStart'
            },
            {
              label: '已结束',
              value: 'end'
            }
          ],
          userManage: [
            {
              label: '全部',
              value: 'all'
            },
            {
              label: '摄影师',
              value: 'photographer'
            },
            {
              label: '修图师',
              value: 'pser'
            },
            {
              label: '管理员',
              value: 'admin'
            },
          ],
          activityDetail: [
            {
              label: '缩略图',
              value: 'thumbnail'
            },
            {
              label: '原片',
              value: 'raw'
            },
            {
              label: '精修片',
              value: 'truing'
            },
            {
              label: '直播片',
              value: 'live'
            },
          ]
        },
        pageNameMap: {
          statistic: '活动统计',
          userManage: '用户管理',
          activityDetail: '活动详情'
        },
        pageToGoMap: {
          statistic: 'statistic/all',
          userManage: 'userManage/all',
          activityDetail: 'activityDetail/thumbnail'
        }
      }
    },
    computed: {
      subMenu () {
        return this.subMenuMap[this.currentPage]
      },
      pageName () {
        return this.pageNameMap[this.currentPage]
      }
    },
    mounted () {
      this.currentFilter = this.$route.params.filter
    },
    methods: {
      async sample () {

      },
      changePage (name) {
        this.currentPage = name
        let to = this.pageToGoMap[name]
        if (to !== this.$route.path) {
          this.$router.push({path: `/home/${to}`})
        }
      },
      changeFilter (filter) {
        this.currentFilter = filter
        this.$router.push({params: {filter}})
      }
    },
    watch: {
      $route () {
        this.$nextTick(() => {
          this.currentFilter = this.$route.params.filter
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../sass/index.scss";

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    height: 100vh;
  }

  .layout-logo {
    position: absolute;
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
  }

  .layout-assistant {
    height: inherit;
  }

  .layout-title {
    font-size: 14px;
    color: #666;
    font-weight: normal;
    margin: 0;
    padding: 10px 15px 0;
  }

  .layout-content {
    display: block;
    height: calc(100vh - 225px);
    margin: 15px;
    margin-top: 10px;
    overflow: auto;
    overflow-x: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-copy {
    text-align: center;
    padding: 5px 0 20px;
    color: #9ea7b4;
  }
</style>