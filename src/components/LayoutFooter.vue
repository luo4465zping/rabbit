<template>
    <!-- 页脚部分 -->
    <footer class="app_footer">
      <!-- 联系我们板块 -->
      <div class="contact">
        <div class="container">
          <!-- 客户服务 -->
          <dl>
            <dt>客户服务</dt>
            <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
            <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
          </dl>
          <!-- 关注我们 -->
          <dl>
            <dt>关注我们</dt>
            <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
            <dd><i class="iconfont icon-weibo"></i> 微博</dd>
          </dl>
          <!-- 下载APP -->
          <dl>
            <dt>下载APP</dt>
            <dd class="qrcode">
              <img src="@/assets/images/qrcode.jpg" />
            </dd>
            <dd class="download">
              <span>扫描二维码</span>
              <span>立马下载APP</span>
              <a href="javascript:;">下载页面</a>
            </dd>
          </dl>
          <!-- 服务热线 -->
          <dl>
            <dt>服务热线</dt>
            <dd class="hotline">
              400 - 0000 - 000 <small>周一至周日 8:00 - 18:00</small>
            </dd>
          </dl>
        </div>
      </div>
      <!-- 其它信息板块 -->
      <div class="extra">
        <div class="container">
          <!-- 口号标语 -->
          <div class="slogan">
            <a href="javascript:;">
              <i class="iconfont icon-footer01"></i>
              <span>价格亲民</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer02"></i>
              <span>物流快捷</span>
            </a>
            <a href="javascript:;">
              <i class="iconfont icon-footer03"></i>
              <span>品质新鲜</span>
            </a>
          </div>
          <!-- 版权信息 -->
          <div class="copyright">
            <p>
              <a href="javascript:;">关于我们</a>
              <a href="javascript:;">帮助中心</a>
              <a href="javascript:;">售后服务</a>
              <a href="javascript:;">配送与验收</a>
              <a href="javascript:;">商务合作</a>
              <a href="javascript:;">搜索推荐</a>
              <a href="javascript:;">友情链接</a>
            </p>
            <p>CopyRight © 小兔鲜儿</p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <style scoped lang="scss">
  // 定义主题色变量
  $xtxColor: #ff6600;
  
  .app_footer {
    overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 20px;
  
    // 联系我们部分样式
    .contact {
      background: #fff;
  
      .container {
        padding: 60px 0 40px 25px;
        display: flex;
      }
  
      dl {
        height: 190px;
        text-align: center;
        padding: 0 72px;
        border-right: 1px solid #f2f2f2;
        color: #999;
  
        // 第一个 dl 元素样式
        &:first-child {
          padding-left: 0;
        }
  
        // 最后一个 dl 元素样式
        &:last-child {
          border-right: none;
          padding-right: 0;
        }
      }
  
      dt {
        line-height: 1;
        font-size: 18px;
      }
  
      dd {
        margin: 36px 12px 0 0;
        float: left;
        width: 92px;
        height: 92px;
        padding-top: 10px;
        border: 1px solid #ededed;
  
        .iconfont {
          font-size: 36px;
          display: block;
          color: #666;
        }
  
        // 鼠标悬停样式
        &:hover {
          .iconfont {
            color: $xtxColor;
          }
        }
  
        // 最后一个 dd 元素样式
        &:last-child {
          margin-right: 0;
        }
      }
  
      .qrcode {
        width: 92px;
        height: 92px;
        padding: 7px;
        border: 1px solid #ededed;
      }
  
      .download {
        padding-top: 5px;
        font-size: 14px;
        width: auto;
        height: auto;
        border: none;
  
        span {
          display: block;
        }
  
        a {
          display: block;
          line-height: 1;
          padding: 10px 25px;
          margin-top: 5px;
          color: #fff;
          border-radius: 2px;
          background-color: $xtxColor;
        }
      }
  
      .hotline {
        padding-top: 20px;
        font-size: 22px;
        color: #666;
        width: auto;
        height: auto;
        border: none;
  
        small {
          display: block;
          font-size: 15px;
          color: #999;
        }
      }
    }
  
    // 其它信息部分样式
    .extra {
      background-color: #f5f5f5;
    }
  
    .slogan {
      height: 178px;
      line-height: 58px;
      padding: 60px 100px;
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      justify-content: space-between;
  
      a {
        height: 58px;
        line-height: 58px;
        color: #666;
        font-size: 28px;
  
        i {
          font-size: 50px;
          vertical-align: middle;
          margin-right: 10px;
          font-weight: 100;
        }
  
        span {
          vertical-align: middle;
          text-shadow: none;
        }
      }
    }
  
    .copyright {
      height: 170px;
      padding-top: 40px;
      text-align: center;
      color: #666;
      font-size: 15px;
  
      p {
        line-height: 1;
        margin-bottom: 20px;
      }
  
      a {
        color: #666;
        line-height: 1;
        padding: 0 10px;
        border-right: 1px solid #e2e2e2;
  
        // 最后一个 a 元素样式
        &:last-child {
          border-right: none;
        }
      }
    }
  }
  </style>