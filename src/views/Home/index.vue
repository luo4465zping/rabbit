<script setup>
// 首页逻辑
</script>

<template>
  <div class="home">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>总销售额</span>
            </div>
          </template>
          <div class="card-content">
            ¥ 126,560
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>访问量</span>
            </div>
          </template>
          <div class="card-content">
            88,792
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>订单量</span>
            </div>
          </template>
          <div class="card-content">
            2,461
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>用户数</span>
            </div>
          </template>
          <div class="card-content">
            1,208
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.home {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $font-size-medium;
  }

  .card-content {
    font-size: $font-size-extra-large;
    font-weight: bold;
    color: $primary-color;
    margin-top: $spacing-base;
  }
}
</style> 