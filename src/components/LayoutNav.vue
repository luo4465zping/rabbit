<template>
    <!-- 页面头部 -->
    <div>
      <header class="app-header" :class="{ 'sticky': isSticky }">
        <!-- 容器 -->
        <div class="container">
          <!-- 网站 logo -->
          <h1 class="logo">
            <RouterLink to="/">小兔鲜</RouterLink>
          </h1>
          <!-- 导航菜单 -->
          <ul class="app-header-nav">
            <li class="home">
              <RouterLink to="/">首页</RouterLink>
            </li>
            <li v-for="item in category.categoryList" :key="item.id">
              <RouterLink :to="`/category/${item.id}`" active-class="active">{{ item.name }}</RouterLink>
            </li>
       
          </ul>
          <!-- 搜索框 -->
          <div class="search">
            <i class="iconfont icon-search"></i>
            <input type="text" placeholder="搜一搜">
          </div>
          <!-- 头部购物车，此处代码未完成 -->
        </div>
      </header>
      <!-- 占位元素，防止吸顶时内容跳动 -->
      <div class="header-placeholder" v-if="isSticky"></div>
    </div>
  </template>
  
  <script setup>
  import {categoryStore} from '@/stores/category'
  import { onMounted, onUnmounted, ref } from 'vue';
  
  const category = categoryStore()
  const isSticky = ref(false)
  
  // 监听页面滚动
  const handleScroll = () => {
    // 当页面滚动超过100px时，固定头部
    isSticky.value = window.pageYOffset > 100
  }
  
  onMounted(async() => {
    await category.getCategoryList()
    // 添加滚动事件监听
    window.addEventListener('scroll', handleScroll)
    // 初始化检查
    handleScroll()
  })
  
  onUnmounted(() => {
    // 组件卸载时移除事件监听
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped lang="scss">
  // 定义主题色变量
 
  // 头部占位元素样式
  .header-placeholder {
    height: 132px;
  }
  
  .app-header {
    background: #fff;
    width: 100%;
    
    // 吸顶样式
    &.sticky {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 9999;
      box-shadow: 0 5px 10px rgba(0,0,0,0.1);
      animation: slideDown 0.3s ease;
    }
    
    @keyframes slideDown {
      from {
        transform: translateY(-100%);
      }
      to {
        transform: translateY(0);
      }
    }
  
    .container {
      display: flex;
      align-items: center;
    }
  
    .logo {
      width: 200px;
  
      a {
        display: block;
        height: 132px;
        width: 100%;
        text-indent: -9999px;
        background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
      }
    }
  
    .app-header-nav {
      width: 820px;
      display: flex;
      padding-left: 40px;
      position: relative;
      z-index: 998;
  
      li {
        margin-right: 40px;
        width: 38px;
        text-align: center;
  
        a {
          font-size: 16px;
          line-height: 32px;
          height: 32px;
          display: inline-block;
  
          &:hover {
            color: $xtxColor;
            border-bottom: 1px solid $xtxColor;
          }
        }
  
        // 激活状态样式
        .active {
          color: $xtxColor;
          border-bottom: 1px solid $xtxColor;
        }
      }
    }
  
    .search {
      width: 170px;
      height: 32px;
      position: relative;
      border-bottom: 1px solid #e7e7e7;
      line-height: 32px;
      display: flex;  // 添加flex布局
      align-items: center;  // 垂直居中
  
      .icon-search {
        font-size: 18px;
        margin-left: 5px;
      }
  
      input {
        width: 140px;
        padding-left: 5px;
        color: #666;
        border: none;  // 去除输入框边框
        outline: none; // 去除输入框点击时的轮廓
      }
    }
  
    .cart {
      width: 50px;
  
      .curr {
        height: 32px;
        line-height: 32px;
        text-align: center;
        position: relative;
        display: block;
  
        .icon-cart {
          font-size: 22px;
        }
  
        em {
          font-style: normal;
          position: absolute;
          right: 0;
          top: 0;
          padding: 1px 6px;
          line-height: 1;
          background: $helpColor;
          color: #fff;
          font-size: 12px;
          border-radius: 10px;
          font-family: Arial;
        }
      }
    }
  }
  </style>