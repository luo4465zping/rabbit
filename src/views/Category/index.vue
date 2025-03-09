<script setup>
// 分类管理逻辑
</script>

<template>
  <div class="category">
    <el-card class="category-card">
      <template #header>
        <div class="card-header">
          <span>分类列表</span>
          <el-button type="primary">添加分类</el-button>
        </div>
      </template>
      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="id" label="ID" width="180" />
        <el-table-column prop="name" label="分类名称" />
        <el-table-column prop="createTime" label="创建时间" />
        <el-table-column label="操作" width="180">
          <template #default>
            <el-button type="primary" link>编辑</el-button>
            <el-button type="danger" link>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.category {
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: $font-size-medium;
    color: $text-color-primary;
  }
  
  .category-card {
    border-radius: $border-radius-base;
    box-shadow: $box-shadow-light;
    transition: $transition-base;
    
    &:hover {
      box-shadow: $box-shadow-base;
    }
  }
}
</style> 