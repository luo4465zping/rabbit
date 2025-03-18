<script setup>
defineProps({
  goods: {
    tppe: Object,
    default: () => { }
  }
})
</script>


<template>
  <RouterLink to="/" class="goods-item">
    <img v-lazy="goods.picture" alt="" />
    <div class="text-box">
      <p class="name">{{ goods.name }}</p>
      <p class="desc">{{ goods.desc }}</p>
      <p class="price">&yen;{{ goods.price }}</p>
    </div>
  </RouterLink>
</template>

<style lang="scss" scoped>
.goods-item {
  display: block;
  width: 220px;
  padding: 20px 30px;
  text-align: center;
  transition: all .5s;

  &:hover {
    transform: translate3d(0, -3px, 0);
    box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
  }

  img {
    width: 160px;
    height: 160px;
  }

  .text-box {
    width: 100%;
    padding: 0;
  }

  p {
    padding-top: 10px;
    margin: 0;
  }

  .name {
    font-size: 16px;
    color: #333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    padding: 10px 0 5px;
  }

  .desc {
    color: #666;
    min-height: 40px;
    max-height: 40px;
    font-size: 14px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 5px 0;
    width: 100%;
    padding: 0;
  }

  .price {
    color: #e26237;
    font-size: 20px;
    font-weight: bold;
    padding-top: 5px;
  }
}
</style>