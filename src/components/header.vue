<template>
    <div>
     <!-- 头部 -->
            <div class="monitoring-Date">
              <div>你说4小时就是4小时吗</div>
              <div class="monitoring-Explain">4小时达监控报表</div>
              <div class="time-Date">
                <div class="block">
                  <span class="demonstration">起止时间</span>
                  <el-date-picker
                    v-model="value"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                   <span class="centre-span">至</span>
                   <el-date-picker
                    v-model="value"
                    type="date"
                    placeholder="选择日期"
                  >
                  </el-date-picker>
                </div>
              </div>
            </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
          value:''
        };
    },
};
</script>

<style lang="less"  scoped>
 // 头部内容
    .monitoring-Date {
      display: flex;
      width: 100%;
      height: 80px;
      line-height: 80px;
      // background: greenyellow;
      .monitoring-Explain {
        width: 40%;
        margin-left: 10px;
        font-size: 20px;
      }
      .time-Date{
        .demonstration{
          font-size: 20px;
          font-weight: bold;
          margin-right: 10px;
        }
         .centre-span{
            margin: 0 10px;
          }
      }
    }
</style>
