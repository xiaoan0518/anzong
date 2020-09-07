<template>
  <div class="table-warp">
    <div class="table-warp2">
      <div class="headerNav">
        <div class="contract-left">
          <span>4小时达监控报表</span>
          <span>待履约订单详情</span>
        </div>
        <div class="contract-right">
          <el-button round @click="exportExcel">导出数据</el-button>
        </div>
      </div>
      <div class="table-Detail">
        <Table></Table>
      </div>
    </div>
  </div>
</template>

<script>
import Table from '../components/Table'

export default {
    props: {

    },
    data() {
        return {
             sourceOriginAmount:[]
        }
    },
    mounted() {
        this.$Bus.$on('tables', (addtable)=> this.sourceOriginAmount =addtable )
    },
    methods: {
       exportExcel() {
            //this.loading = true; // 设置一个loading，生成Excel需要时间
            import('@/vendor/Export2Excel.js').then(excel => { // 导入js模块
                const tHeader = ['姓名', '地址','保质期', '特点']; // 导出excel 的标题
                const filterVal = [ 'name','address','age','remark']; // 每个标题对应的字段

                const list = (this.sourceOriginAmount || []).map((item) => { // 通过 map 方法遍历，组装数据成上面的格式
                    return {
                        name: item.name,
                        address:item.address,
                        age:item.age,
                        remark:item.remark
                    };
                });

                if (list) {
                    const data = this.formatJson(filterVal, list); // 生成json数据
                    excel.export_json_to_excel({ // 调用excel方法生成表格
                        header: tHeader,
                        data,
                        filename: this.goodsName
                    });
                } else {
                    alert('暂无无数据');
                }
                this.loading = false;
            })
        },
        formatJson (filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]));
        },

      
      
    },
    
    components:{
        Table
    }
};
</script>

<style lang="less" scoped>
.table-warp {
  width: 100%;
  height: 100%;
  .table-warp2 {
    width: 80%;
    height: 100%;
    .headerNav {
      display: flex;
      height: 60px;
      line-height: 60px;
      .contract-left {
        width: 80%;
        span:nth-child(1) {
          color: #e7e7e7;
          margin: 0 10px;
        }
        span:nth-child(2) {
          color: #898989;
        }
      }
    }
  }
}
</style>
