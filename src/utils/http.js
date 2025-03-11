import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

// 创建axios实例
const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: import.meta.env.VITE_API_TIMEOUT
})

// 调试信息


// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    // 例如：添加token
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么

    return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // console.log('%c 收到响应 ', 'background: #222; color: #bada55', response);
    // 对响应数据做点什么
    const { code, msg, result } = response.data
    // 根据自己的业务需求修改
    if (code == 1) {
      console.log('处理后的结果:', result); 
      return result
    }
    // 处理其他状态码
    // console.log('API错误:', msg);
    ElMessage.error(msg || '服务器错误')
    return Promise.reject(new Error(msg))
  },
  (error) => {
    // 对响应错误做点什么
    // console.log('响应错误:', error);
    if (error.response && error.response.status) {
      const status = error.response.status
      let message = ''
      switch (status) {
        case 401:
          message = '未授权，请重新登录'
          // 可以在这里执行退出登录操作
          break
        case 403:
          message = '拒绝访问'
          break
        case 404:
          message = '请求错误，未找到该资源'
          break
        case 500:
          message = '服务器错误'
          break
        default:
          message = error.response.data.message || '网络错误'
      }
      console.log(`HTTP错误 ${status}:`, message);
      ElMessage.error(message)
    } else {
      console.log('网络错误:', error.message || '未知错误');
      ElMessage.error('网络错误，请稍后重试')
    }
    return Promise.reject(error)
  }
)

export default http 