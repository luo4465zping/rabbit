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


