<script setup>
  import { getTopCategoryAPI,getBannerAPI } from '@/apis/category'
  import { useRoute } from 'vue-router'
  import { ref, watch, onMounted } from 'vue'
  import GoodsItem from '@/views/Home/components/GoodsItem.vue'
  const categoryData = ref({})
  const route = useRoute()
 // 获取banner
const bannerList = ref([])
  const getCategoryData = async () => {
    const res = await getTopCategoryAPI(route.params.id)
      const res2 = await getBannerAPI({
    distributionSite: '2'
    })
    // console.log(res);
    categoryData.value = res
    console.log(categoryData.value);
    
    bannerList.value = res2
  }
  
  // 初始化时获取数据
  onMounted(() => {
    getCategoryData();
   
  })
  
  // 监听路由参数的变化，当 ID 变化时重新获取数据
  watch(() => route.params.id, (newId) => {
    if (newId) {
      getCategoryData()
    }
  })
</script>

<template>
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>{{ categoryData.name}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 轮播图 -->
             <!-- 轮播图 -->
      <div class="home-banner">
        <el-carousel height="500px">
          <el-carousel-item v-for="item in bannerList" :key="item.id">
            <img :src="item.imgUrl" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="sub-list">
        <h3>全部分类</h3>
        <ul>
          <li v-for="i in categoryData.children" :key="i.id">
            <RouterLink :to="`/category/sub/${i.id}`">
              <img :src="i.picture" />
              <p>{{ i.name }}</p>
            </RouterLink>
          </li>
        </ul>
      </div>
      <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
        <div class="head">
          <h3>- {{ item.name }}-</h3>
        </div>
        <div class="body">
          <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    padding: 0 0 20px 0;

    ul {
      display: flex;
      padding: 0;
      margin: 0;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;

      li {
        width: 16.666%;
        height: 160px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;

        a {
          text-align: center;
          display: block;
          font-size: 16px;
          width: 100%;

          img {
            width: 100px;
            height: 100px;
            margin: 0 auto;
          }

          p {
            line-height: 40px;
            margin: 0;
          }

          &:hover {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
</style>