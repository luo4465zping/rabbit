<template>
  <div class="home-hot">
    <h3>{{ title }}</h3>
    <div class="hot-list">
      <div class="item" v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-lazy="item.picture" alt="">
          <p class="price">{{ item.title }}</p>
          <!-- <p class="desc">{{ item.desc }}</p> -->
          <p class="name">{{ item.alt }}</p>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref,onMounted } from 'vue' 
import {findHotAPI} from "@/apis/layout"
const hotList = ref([])
onMounted(async() => {
  const res = await findHotAPI()
  console.log(res);
  hotList.value = res
})

defineProps({
  title: {
    type: String,
    default: '人气推荐'
  }
})

// 模拟热门商品数据

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
    // align-items: center;
    .item {
      width: 300px;
      text-align: center;
      img {
        width: 100%;
        height: 300px;
        border-radius: 5px;
      }
      
      .name {
        font-size: 14px;
        color: #333;
        margin-top: 10px;
      }
      
      .desc {
        font-size: 14px;
        color: #999;
        margin-top: 5px;
      }
      
      .price {
        margin:auto;
      // justify-content: center;
        font-size: 20px;
        color: $xtxColor;
        margin-top: 10px;
      }
    }
  }
}
</style> 