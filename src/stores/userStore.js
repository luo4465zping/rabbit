import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'  

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const token = ref(null)
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
        const res = await loginAPI({ account, password })
        userInfo.value = res
    }
      // 退出时清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {}
    // 执行清除购物车的action
    // cartStore.clearCart()
  }
    return {
        userInfo,
        token,
        getUserInfo,
        clearUserInfo
    }, {
        persist: true,
      }
  
})