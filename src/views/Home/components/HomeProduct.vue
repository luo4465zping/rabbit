<template>
  <div class="home-product">
    <HomePanel :title="item.name" :sub-title="item.saleInfo" v-for="item in goodsList" :key="item.id">
      <template #right>
        <div class="tabs">
          <a 
            href="javascript:;" 
            :class="{ active: currentTab === item.id }"
            v-for="item in tabList" 
            :key="item.id"
            @click="currentTab = item.id"
          >
            {{ item.name }}
          </a>
        </div>
      </template>
      <div class="box">
        <RouterLink 
          to="/" 
          class="brand" 
          v-for="it in item.goods" 
          :key="it.id"
        >
          <img :src="it.picture" alt="">
          <p class="name">{{ it.name }}</p>
          <p class="desc">{{ it.desc }}</p>
          <p class="price">&yen;{{ it.price }}</p>
        </RouterLink>
      </div>
    </HomePanel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HomePanel from './HomePanel.vue'
import {findGoodsAPI} from "@/apis/layout"
const goodsList = ref([])
findGoodsAPI().then(res => {
  goodsList.value = res
  console.log(goodsList.value);
})
// 模拟选项卡数据
const tabList = [
  { id: 1, name: '精选' },
  { id: 2, name: '数码' },
  { id: 3, name: '服饰' },
  { id: 4, name: '家居' },
  { id: 5, name: '运动' }
]

// 当前选中的选项卡
const currentTab = ref(1)

// 模拟品牌数据
const brands = ref([])
</script>

<style scoped lang="scss">
.home-product {
  width: 1240px;
  margin: 30px auto;
  
  .tabs {
    display: flex;
    justify-content: center;
    
    a {
      margin: 0 10px;
      font-size: 16px;
      color: #999;
      
      &:hover {
        color: $xtxColor;
      }
      
      &.active {
        color: $xtxColor;
        border-bottom: 2px solid $xtxColor;
      }
    }
  }
  
  .box {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 20px;
    gap: 13px;
    
    .brand {
      width: 232px;
      height: auto;
      margin-bottom: 20px;
      border-radius: 5px;
      overflow: hidden;
      transition: all 0.5s;
      
      img {
        width: 100%;
        height: 240px;
        object-fit: cover;
      }
      
      .name {
        font-size: 16px;
        color: #333;
        padding: 10px 10px 0 10px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .desc {
        font-size: 14px;
        color: #999;
        padding: 5px 10px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      
      .price {
        font-size: 20px;
        color: $xtxColor;
        padding: 0 10px 10px 10px;
        text-align: center;
        margin-top: 5px;
      }
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      }
    }
  }
}
</style> 