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
  export const getSubCategoryAPI = (id) => {
    return http({
      url: '/category/sub/filter',
      params: {
        id
      }
    })
  }
  export const getSubTemporaryAPI = (data) => {
    return http({
      url:'/category/goods/temporary',
      method:'POST',
      data
    })
  }
  export const getDetail = (id) => {
    return http({
      url: '/goods',
      params: {
        id
      }
    })
  }