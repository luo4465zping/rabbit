import http from '@/utils/http'
export const getTopCategoryAPI = (id) => {
    return http({
      url:'/category',
      params:{
        id
      }
    })
  }
  export function getBannerAPI (params = {}) {
    // 默认为1 商品为2
    const { distributionSite = '1' } = params
    return http({
      url: '/home/banner',
      params: {
        distributionSite
      }
    })
  }