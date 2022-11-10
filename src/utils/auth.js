// 引入cookies包
import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

// 获取token的方法
export function getToken() {
  return Cookies.get(TokenKey)
}

// 获取token的方法
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
