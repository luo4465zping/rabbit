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
          v-for="item in brands" 
          :key="item.id"
        >
          <img :src="item.logo" alt="">
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
const brands = ref([
  { id: 1, logo: 'https://yanxuan-item.nosdn.127.net/f67506f7c4c913bc07a899cbc3d1e6a8.jpg' },
  { id: 2, logo: 'https://yanxuan-item.nosdn.127.net/062f9ec1a8979e0ee401bf8d2d642d04.jpg' },
  { id: 3, logo: 'https://yanxuan-item.nosdn.127.net/c39d54c06a71d4b5cd7604fe29c0307f.png' },
  { id: 4, logo: 'https://yanxuan-item.nosdn.127.net/f67506f7c4c913bc07a899cbc3d1e6a8.jpg' },
  { id: 5, logo: 'https://yanxuan-item.nosdn.127.net/062f9ec1a8979e0ee401bf8d2d642d04.jpg' },
  { id: 6, logo: 'https://yanxuan-item.nosdn.127.net/c39d54c06a71d4b5cd7604fe29c0307f.png' }
])
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
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 20px;
    
    .brand {
      width: 200px;
      height: 100px;
      border: 1px solid #e4e4e4;
      margin-bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      img {
        max-width: 80%;
        max-height: 80%;
      }
      
      &:hover {
        border-color: $xtxColor;
      }
    }
  }
}
</style> 