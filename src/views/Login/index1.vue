<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()

// 表单数据
const formData = reactive({
  username: '',
  password: ''
})

// 表单验证规则
const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
  ]
}

const formRef = ref(null)
const loading = ref(false)

// 登录方法
const handleLogin = async () => {
  if (!formRef.value) return
  
  try {
    await formRef.value.validate()
    loading.value = true
    
    // 模拟登录请求
    setTimeout(() => {
      // 存储token
      localStorage.setItem('token', 'mock-token-123456')
      ElMessage.success('登录成功')
      router.push('/')
      loading.value = false
    }, 1000)
  } catch (error) {
    console.error('表单验证失败', error)
  }
}
</script>

<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-title">后台管理系统</div>
      <el-card class="login-card">
        <h2>登录</h2>
        <el-form 
          ref="formRef"
          :model="formData" 
          :rules="rules"
          label-position="top"
        >
          <el-form-item prop="username" label="用户名">
            <el-input 
              v-model="formData.username" 
              placeholder="请输入用户名" 
              prefix-icon="User"
            />
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input 
              v-model="formData.password" 
              type="password" 
              placeholder="请输入密码" 
              prefix-icon="Lock"
              show-password
              @keyup.enter="handleLogin"
            />
          </el-form-item>
          <el-form-item>
            <el-button 
              type="primary" 
              class="login-btn" 
              :loading="loading"
              @click="handleLogin"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-color-page;
  background-image: linear-gradient(135deg, rgba($primary-color, 0.1) 0%, rgba($primary-color, 0.05) 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    top: -50%;
    left: -50%;
    background: radial-gradient(circle, rgba($primary-color, 0.1) 0%, transparent 80%);
    animation: rotate 30s linear infinite;
  }
  
  .login-box {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 450px;
    padding: $spacing-medium;
  }
  
  .login-title {
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    color: $primary-color;
    margin-bottom: $spacing-large;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .login-card {
    width: 100%;
    border-radius: $border-radius-large;
    box-shadow: $box-shadow-base;
    backdrop-filter: blur(5px);
    background-color: rgba($bg-color, 0.9);
    
    h2 {
      text-align: center;
      margin-bottom: $spacing-large;
      color: $text-color-primary;
      font-weight: 500;
    }

    .login-btn {
      width: 100%;
      height: 40px;
      font-size: $font-size-medium;
      border-radius: $border-radius-base;
      margin-top: $spacing-medium;
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style> 