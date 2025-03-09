<template>
    <!-- 顶部导航栏 -->
    <nav class="app-topnav">
      <!-- 容器 -->
      <div class="container">
        <ul>
          <!-- 根据条件显示不同的导航项 -->
          <template v-if="true">
            <!-- 用户信息 -->
            <li>
              <a href="javascript:;">
                <i class="iconfont icon-user"></i>
                周杰伦
              </a>
            </li>
            <!-- 退出登录确认框 -->
            <li>
              <el-popconfirm
                title="确认退出吗?"
                confirm-button-text="确认"
                cancel-button-text="取消"
              >
                <!-- 触发确认框的链接 -->
                <template #reference>
                  <a href="javascript:;">退出登录</a>
                </template>
              </el-popconfirm>
            </li>
            <!-- 我的订单 -->
            <li>
              <a href="javascript:;">我的订单</a>
            </li>
            <!-- 会员中心 -->
            <li>
              <a href="javascript:;">会员中心</a>
            </li>
          </template>
          <!-- 未登录时显示的导航项 -->
          <template v-else>
            <!-- 请先登录 -->
            <li>
              <a href="javascript:;">请先登录</a>
            </li>
            <!-- 帮助中心 -->
            <li>
              <a href="javascript:;">帮助中心</a>
            </li>
            <!-- 关于我们 -->
            <li>
              <a href="javascript:;">关于我们</a>
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup>
  // 这里目前没有逻辑代码，如果后续有可以添加进来
  </script>
  
  <style scoped lang="scss">
  // 定义变量，这里假设 $xtxColor 是一个主题色，可根据实际情况修改
  $xtxColor: #ff6600;
  
  .app-topnav {
    background: #f5f5f5;
  
    ul {
      display: flex;
      height: 53px;
      justify-content: flex-end;
      align-items: center;
  
      li {
        a {
          padding: 0 15px;
          color: #666;
          line-height: 1;
          display: inline-block;
  
          i {
            font-size: 14px;
            margin-right: 2px;
          }
  
          // 鼠标悬停效果
          &:hover {
            color: $xtxColor;
          }
        }
  
        // 兄弟元素的样式
        ~li {
          a {
            border-left: 2px solid #e2e2e2;
          }
        }
      }
    }
  }
  </style>