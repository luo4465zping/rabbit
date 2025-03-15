//  定义懒加载插件
export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('lazy', {
      // 在绑定元素的父组件挂载时调用
      mounted(el, binding) {
        // 创建一个观察者
        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
          // 如果进入了视口
          if (isIntersecting) {
            // 停止观察
            observer.unobserve(el)
            // 加载图片
            el.src = binding.value
            // 处理图片加载失败情况
            el.onerror = () => {
              // 可以设置一个默认图片
              el.src = '默认图片路径'
            }
          }
        })
        // 开始观察元素
        observer.observe(el)
      }
    })
  }
}

// 你可以添加更多自定义指令
export const directivePlugin = {
  install(app) {
    // 注册自定义指令，例如：
    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    })
    
    // 可以添加更多指令...
  }
}