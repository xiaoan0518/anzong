<template>
  <div id="app">
    <div class="warp">
      <el-container>
        <el-header>Header</el-header>
        <el-container>
          <el-aside width="200px">
            <el-container style="height: 500px; border: 1px solid #eee">
              <el-aside width="200px">
                <el-menu class="el-menu-Css">
                  <el-submenu index="1">
                    <template slot="title">
                      <i class="el-icon-message"></i>导航一</template
                    >
                    <el-menu-item-group>
                      <el-menu-item index="1-1" @click="$router.push('/detailmonitoring')">选项1</el-menu-item>
                      <el-menu-item index="1-2">选项2</el-menu-item>
                      <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                      <template slot="title">
                        选项4
                      </template>
                      <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                  </el-submenu>
                </el-menu>
              </el-aside>
            </el-container>
          </el-aside>
          <el-main>
           
            <!-- 内容区 -->
            <router-view></router-view>
           <!-- <DETAILMONITORING   /> -->
           
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
// import DETAILMONITORING from './components/detailMonitoring'
export default {
  name: "App",
  data() {
  return {
    
  }
},
components:{
// DETAILMONITORING
}
};

</script>

<style lang="less">
.warp {
  min-width: 100%;
  background: #0e4a7c !important ;
  overflow: auto;
  .el-header {
    background: #0e4a7c !important;
    color: #ffffff;
  }
  .el-aside {
    background-color: #0e4a7c !important ;
    overflow: visible !important;
    // border: none;
    .el-container {
      border: none !important;
    }
    .el-menu-item-group__title {
      margin: 0;
      padding: 0;
    }
    .el-submenu__title {
      background-color: #0e4a7c !important;
      color: #ffffff;
    }
    .el-menu .el-menu--inline {
      background-color: #0e4a7c !important ;
      color: #ffffff;
      .el-menu-item {
        color: #ffffff;
        &:hover {
          background: #093359;
        }
      }
      .is-active {
        background: #093359;
      }
    }
  }
  
  .el-main {
    background: #ffffff;
    min-width: 100%;
   
    
  }
}
</style>
