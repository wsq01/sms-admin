import axios from '@/libs/api.request'

// 登录
export const login = ({ username, password }) => {
  const data = {
    username,
    password
  }
  return axios.request({
    url: 'login',
    data,
    method: 'post'
  })
}
// 获取用户信息
export const getUserInfo = (token) => {
  return axios.request({
    url: 'get_info',
    params: {
      token
    },
    method: 'get'
  })
}
// 退出登录
export const logout = (token) => {
  return axios.request({
    url: 'logout',
    method: 'post'
  })
}
