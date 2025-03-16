import http from '@/utils/http'

export const getCategoryAPI = () => {   
    return http({
        url: '/home/category/head',
        method: 'get'
    })
}
export const getBannerAPI = () => {   
    return http({
        url: '/home/banner',
        method: 'get'
    })
}
export const findNewAPI = () => {
    return http({
      url:'/home/new'
    })
  }
export const findHotAPI = () => {
    return http({
      url:'/home/hot'
    })
  }
  export const findGoodsAPI = () => {
    return http({
      url:'/home/goods'
    })
  }


