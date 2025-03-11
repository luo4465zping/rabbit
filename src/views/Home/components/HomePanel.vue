<template>
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <h3>{{ title }}<small>{{ subTitle }}</small></h3>
        <slot name="right" />
      </div>
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subTitle: {
    type: String,
    default: ''
  }
})
</script>

<style scoped lang="scss">
.home-panel {
  background-color: #fff;
  margin-top: 20px;
  
  .container {
    width: 1240px;
    margin: 0 auto;
  }
  
  .head {
    padding: 40px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    h3 {
      font-size: 28px;
      font-weight: normal;
      color: #333;
      
      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style> 