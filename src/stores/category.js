import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'
export const categoryStore = defineStore('category', () => {
  const categoryList = ref([])
  
  const getCategoryList = async () => {
    // 检查数据是否已存在，如果已有数据则不重复请求
    if (categoryList.value.length > 0) return
    
    const res = await getCategoryAPI()
    console.log(res);
    categoryList.value = res
  }

  return { categoryList, getCategoryList }

})
