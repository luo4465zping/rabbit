<template>
  <div class="home-new">
    <div class="head">
      <h3>新鲜好物</h3>
      <RouterLink to="/">查看全部<i class="iconfont icon-arrow-right"></i></RouterLink>
    </div>
    <div class="body">
      <ul>
        <li v-for="item in newList" :key="item.id">
          <RouterLink :to="`/detail/${item.id}`">
            <img :src="item.picture" alt="">
            <p class="name">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref,onMounted } from 'vue'
import {findNewAPI} from "@/apis/layout"


// 模拟新鲜好物数据
var newList = ref([])

onMounted(async() => {
  const res = await findNewAPI()
  // console.log(res);
  
  newList.value = res
  // console.log(newList.value);
})
</script>

<style scoped lang="scss">
.home-new {
  width: 1240px;
  margin: 30px auto;
  
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    
    h3 {
      font-size: 28px;
      color: #333;
      font-weight: normal;
    }
    
    a {
      color: #999;
      
      i {
        font-size: 14px;
        margin-left: 5px;
      }
      
      &:hover {
        color: $xtxColor;
      }
    }
  }
  
  .body {
    ul {
      display: flex;
      justify-content: space-between;
      
      li {
        width: 300px;
        background: #f5f5f5;
        padding: 20px;
        transition: all .5s;
        
        &:hover {
          transform: translate3d(0, -3px, 0);
          box-shadow: 0 3px 8px rgba(0,0,0,0.2);
        }
        
        img {
          width: 100%;
          height: 260px;
        }
        
        .name {
          font-size: 16px;
          color: #333;
          margin-top: 10px;
        }
        
        .price {
          font-size: 20px;
          color: $xtxColor;
          margin-top: 10px;
        }
      }
    }
  }
}
</style> 