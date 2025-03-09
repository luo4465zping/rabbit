<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}

// 随机生成404页面的背景图案
const generateRandomDots = () => {
  const dots = []
  for (let i = 0; i < 40; i++) {
    dots.push({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 20 + 5}px`,
      animationDelay: `${Math.random() * 5}s`
    })
  }
  return dots
}

const randomDots = generateRandomDots()
</script>

<template>
  <div class="not-found">
    <!-- 随机背景圆点 -->
    <div class="background">
      <div 
        v-for="(dot, index) in randomDots" 
        :key="index" 
        class="dot"
        :style="{
          left: dot.left,
          top: dot.top,
          width: dot.size,
          height: dot.size,
          animationDelay: dot.animationDelay
        }"
      ></div>
    </div>
    
    <div class="content">
      <div class="error-code">404</div>
      <div class="error-message">哎呀！页面走丢了</div>
      <div class="error-description">
        您访问的页面可能已被删除、更名或暂时不可用
      </div>
      <div class="actions">
        <el-button type="primary" @click="goHome">返回首页</el-button>
        <el-button @click="() => window.history.back()">返回上一页</el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: $bg-color-page;
  
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    
    .dot {
      position: absolute;
      border-radius: $border-radius-circle;
      background-color: rgba($primary-color, 0.2);
      animation: pulse 3s infinite alternate;
    }
  }
  
  .content {
    text-align: center;
    z-index: 2;
    padding: $spacing-extra-large;
    background-color: rgba($bg-color, 0.8);
    border-radius: $border-radius-large;
    box-shadow: $box-shadow-light;
    backdrop-filter: blur(5px);
    max-width: 500px;
    
    .error-code {
      font-size: 120px;
      font-weight: bold;
      color: $primary-color;
      line-height: 1;
      margin-bottom: $spacing-medium;
      text-shadow: 4px 4px 0 rgba($primary-color, 0.2);
      animation: shake 5s infinite;
    }
    
    .error-message {
      font-size: $font-size-extra-large;
      color: $text-color-primary;
      margin-bottom: $spacing-medium;
    }
    
    .error-description {
      color: $text-color-secondary;
      margin-bottom: $spacing-large;
    }
    
    .actions {
      display: flex;
      justify-content: center;
      gap: $spacing-medium;
    }
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }
  100% {
    transform: scale(1.5);
    opacity: 0.7;
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  2%, 6%, 10% {
    transform: translateX(-5px);
  }
  4%, 8%, 12% {
    transform: translateX(5px);
  }
  14%, 100% {
    transform: translateX(0);
  }
}
</style> 