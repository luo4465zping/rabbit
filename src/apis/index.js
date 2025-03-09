import http from '@/utils/http'

// 示例接口
export const loginAPI = (data) => {
  return http({
    url: '/login',
    method: 'post',
    data
  })
}

export const getUserInfoAPI = () => {
  return http({
    url: '/user/info',
    method: 'get'
  })
}

// 可以继续添加更多API... 