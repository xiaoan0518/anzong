<template>
  <div class="deit">
    <div class="crumbs">
      <div class="cantainer">
        <el-table
          style="width: 100%;"
          border
          :data="tableData.slice((currentPage - 1) * pagesize,currentPage * pagesize)" 
          :header-cell-style="{ border: 'none',background:'#F5F5F5'}"
        >
          <!-- :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)动态显示跳转到第几页 -->
          <!-- 动态获取数据 -->
          <!-- <el-table-column
            fixed
            v-for="(item) in tableTop"
            :key="item.prop"
            :prop="item.prop"
            :label="item.propName "
            :render-header="renderHander"
            width="150"
            
          >
          </el-table-column> -->
         <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址">
      </el-table-column> 
      
      <el-table-column
        prop="age"
        label="保质期"
        :render-header="renderHander">
        
      </el-table-column> 

      <el-table-column
        prop="remark"
        label="特点"
        :render-header="renderHander">
        
      </el-table-column> 

        </el-table>

        <!-- 分页器 -->
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="prev, pager, next, jumper"
          :total="tableData.length"
        >
          <!-- current-change   点击事件 -->
          <!-- current-page 显示当前第几页 -->

          <!-- :page-sizes="[1, 5, 10]"  -->
          <!-- page-size	每页显示条目个数，支持 .sync 修饰符	number	—	10 -->

          <!-- layout  布局 -->
          <!-- total总条目数 -->
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // tableTop: [
      //   { prop: "id", propName: "编号" },
      //   { prop: "name", propName: "名字"},
      //   { prop: "age", propName: "保质期"},
      //   { prop: "remark", propName: "特点"},
      // ],
      person: [
        {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
         {
          id: "2016-05-03",
          name: "王一虎",
          age: "河北省",
          remark: "定州市",
          country: "037000",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        
      
        
      ],
      currentPage: 1, //初始页
      pagesize: 20, //    每页的数据
      tableData: [],
      
    };
  },
  mounted() {
     this.tableData = this.person
     this.$nextTick(()=>{
       this.$Bus.$emit('tables',this.person)
     })
    //  this.$Bus.$emit('tables',"123")
  },
  methods: {
    
   
    // 点击第几页跳转到第几页
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      //console.log(this.currentPage)  //点击第几页
    },
    renderHander(h,{column},){
        const inReview = '我是现实的第一条信息”'
        const ToinReview = '第二条信息”'
     if (column.property=='age') {
          return h(
          'div', [
                  h('span', column.label),
                  // column可以拿到里边的具体信息
                  // placement设置划过显示的位置
                  h('el-tooltip', {
                      props: {
                          placement: 'bottom'
                      }
                  }, [
                      h('div', {
                        // 显示的内容区的大小
                          slot: 'content',
                          style: {
                              'width':'250px',
                              whiteSpace: 'normal',
                              'margin-bottom': '10px'
                          }
                      }, inReview),
                      // 显示的icon图标和样式
                      h('i', {
                          class: 'el-icon-warning-outline',
                          style: '#CDCDCD:blue;margin-left:15px;'
                      })
                  ],)
              ]
       
      )
    }else if (column.property=='remark') {
         return h(
        'div', [
                h('span', column.label),
                // column可以拿到里边的具体信息
                // placement设置划过显示的位置
                h('el-tooltip', {
                    props: {
                        placement: 'bottom'
                    }
                }, [
                    h('div', {
                      // 显示的内容区的大小
                        slot: 'content',
                        style: {
                            'width':'250px',
                            whiteSpace: 'normal',
                            'margin-bottom': '10px'
                        }
                    }, ToinReview),
                    // 显示的icon图标和样式
                    h('i', {
                        class: 'el-icon-warning-outline',
                        style: '#CDCDCD:blue;margin-left:15px;'
                    })
                ],)
            ]
       
      )
     }
     }
      
       
   

   

    
  },
};
</script>

<style lang="less" scoped>

  </style>
