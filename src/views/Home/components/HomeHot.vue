<template>
  <div class="home-hot">
    <h3>{{ title }}</h3>
    <div class="hot-list">
      <div class="item" v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="">
          <p class="name">{{ item.name }}</p>
          <p class="desc">{{ item.desc }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    default: '人气推荐'
  }
})

// 模拟热门商品数据
const hotList = ref([
  {
    id: '1',
    name: '智能触控手表',
    desc: '高清触控屏幕，时尚外观',
    price: '199.00',
    picture: 'https://yanxuan-item.nosdn.127.net/12e2f1deed9a7591c1162cb5b6e43ef7.jpg'
  },
  {
    id: '2',
    name: '真无线蓝牙耳机',
    desc: '高清音质，长久续航',
    price: '299.00',
    picture: 'https://yanxuan-item.nosdn.127.net/a9c9c5f945b6a3c9b8d2f7d3a4f58a0e.png'
  },
  {
    id: '3',
    name: '时尚运动鞋',
    desc: '轻盈舒适，弹力十足',
    price: '399.00',
    picture: 'https://yanxuan-item.nosdn.127.net/c49d0dc2a0f8f964947cd4dc3aecc989.png'
  },
  {
    id: '4',
    name: '简约双肩包',
    desc: '大容量设计，多功能分区',
    price: '129.00',
    picture: 'https://yanxuan-item.nosdn.127.net/e5474a8f4fd5748079e2ba2ead806b51.png'
  }
])
</script>

<style scoped lang="scss">
.home-hot {
  width: 1240px;
  margin: 30px auto;
  
  h3 {
    font-size: 28px;
    color: #666;
    margin-bottom: 20px;
    font-weight: normal;
  }
  
  .hot-list {
    display: flex;
    justify-content: space-between;
    
    .item {
      width: 300px;
      
      img {
        width: 100%;
        height: 300px;
        border-radius: 5px;
      }
      
      .name {
        font-size: 18px;
        color: #333;
        margin-top: 10px;
      }
      
      .desc {
        font-size: 14px;
        color: #999;
        margin-top: 5px;
      }
      
      .price {
        font-size: 20px;
        color: $xtxColor;
        margin-top: 10px;
      }
    }
  }
}
</style> 