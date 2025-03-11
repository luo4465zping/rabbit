<template>
  <div class="goods-item">
    <RouterLink :to="`/product/${goods.id}`" class="image">
      <img :src="goods.picture" alt="">
    </RouterLink>
    <p class="name ellipsis">{{ goods.name }}</p>
    <p class="desc ellipsis">{{ goods.desc }}</p>
    <p class="price">&yen;{{ goods.price }}</p>
    <div class="extra">
      <RouterLink to="/">
        <span>找相似</span>
        <span>发现更多宝贝 &gt;</span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  goods: {
    type: Object,
    default: () => ({})
  }
})
</script>

<style scoped lang="scss">
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;
  
  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  }
  
  .image {
    width: 160px;
    height: 160px;
    display: block;
    margin: 0 auto;
    
    img {
      width: 100%;
      height: 100%;
    }
  }
  
  .name {
    font-size: 16px;
    color: #666;
    height: 40px;
    line-height: 40px;
  }
  
  .desc {
    color: #999;
    height: 22px;
    line-height: 22px;
  }
  
  .price {
    color: $xtxColor;
    font-size: 20px;
    height: 30px;
    line-height: 30px;
    margin-top: 10px;
  }
  
  .extra {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    
    a {
      margin: 0 10px;
      color: #999;
      
      &:hover {
        color: $xtxColor;
      }
      
      span {
        margin-left: 5px;
        
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}

// 文本省略
.ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style> 