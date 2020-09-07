<template>
  <div>
    <HEADER></HEADER>
    <div class="report-contnet">
      <div class="cotent-list">
        <ul class="ul-li">
          <li @click="$router.push('/tabledetail')">
            <div class="detail">
              <div class="detail-left">
                <i class="el-icon-remove-outline"></i>
              </div>
              <div class="detail-right">
                <div class="txt1">4小时的订单</div>
                <div class="txt2">1023</div>
              </div>
            </div>
          </li>
          <li @click="$router.push('/anan')">
            <div class="detail">
              <div class="detail-left">
                <i class="el-icon-remove-outline"></i>
              </div>
              <div class="detail-right">
                <div class="txt1">预警订单</div>
                <div class="txt2">1023</div>
                <div class="txt3">
                  <el-tooltip
                    class="item"
                    effect="dark"
                    content="提示文字"
                    placement="bottom"
                  >
                    <i class="el-icon-warning-outline item" ></i>
                  </el-tooltip>
                  
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail">
              <div class="detail-left">
                <i class="el-icon-remove-outline"></i>
              </div>
              <div class="detail-right">
                <div class="txt1">带捋约订单</div>
                <div class="txt2">1023</div>
                <div class="txt3">
                   <el-tooltip
                    class="item"
                    effect="dark"
                    content="提示文字"
                    placement="bottom"
                  >
                    <i class="el-icon-warning-outline item" ></i>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail">
              <div class="detail-left">
                <i class="el-icon-remove-outline"></i>
              </div>
              <div class="detail-right">
                <div class="txt1">为履约订单</div>
                <div class="txt2">1023</div>
                <div class="txt3">
                   <el-tooltip
                    class="item"
                    effect="dark"
                    content="提示文字"
                    placement="bottom"
                  >
                    <i class="el-icon-warning-outline item" ></i>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail">
              <div class="detail-left">
                <i class="el-icon-remove-outline"></i>
              </div>
              <div class="detail-right">
                <div class="txt1">以履约订单</div>
                <div class="txt2">1023</div>
                <div class="txt3">
                   <el-tooltip
                    class="item"
                    effect="dark"
                    content="提示文字"
                    placement="bottom"
                  >
                    <i class="el-icon-warning-outline item" ></i>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="detail">
              <div class="detail-left">
                <i class="el-icon-remove-outline"></i>
              </div>
              <div class="detail-right">
                <div class="txt1">履约率</div>
                <div class="txt2 txt4">1023%</div>
                <div class="txt3 ">
                   <el-tooltip
                    class="item"
                    effect="dark"
                    content="提示文字"
                    placement="bottom"
                  >
                    <i class="el-icon-warning-outline item" ></i>
                  </el-tooltip>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HEADER from "../components/header";
export default {
  props: {},
  data() {
    return {};
  },
  components: {
    HEADER,
  },
};
</script>

<style lang="less" scoped>
.report-contnet {
  width: 75%;
  height: 300px;

  margin: 0 20px 30px 0px;
  .cotent-list {
    .ul-li {
      width: 900px;
      height: 100%;
      li {
        float: left;
        width: 150px;
        height: 95px;
        margin-right: 75px;
        margin-bottom: 20px;
        &:nth-child(1) {
          margin-left: 10px;
        }
        &:nth-child(4) {
          margin-left: 10px;
        }
        .detail {
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          position: relative;
          .detail-left {
            width: 30px;
            height: 100%;
            margin: 20px 0 0 20px;
            font-size: 20px;
            color: #d6d6d6;
          }
          .detail-right {
            .txt1 {
              font-size: 14px;
              margin: 20px 0 20px 0;
            }
            .txt2 {
              font-size: 20px;
              color: green;
              font-weight: bold;
            }
            .txt3 {
              .el-icon-warning-outline {
                position: absolute;
                top: 5px;
                right: 10px;
                font-size: 15px;
                color: #d6d6d6;
                .box {
                  width: 400px;

                  .top {
                    text-align: center;
                  }

                  .left {
                    float: left;
                    width: 60px;
                  }

                  .right {
                    float: right;
                    width: 60px;
                  }

                  .bottom {
                    clear: both;
                    text-align: center;
                  }

                  .item {
                    margin: 4px;
                  }

                  .left .el-tooltip__popper,
                  .right .el-tooltip__popper {
                    padding: 8px 10px;
                  }
                }
              }
            }
            .txt4 {
              color: black;
            }
          }
        }
      }
    }
  }
}
</style>
