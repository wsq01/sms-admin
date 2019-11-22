import {
  login,
  getUserInfo
} from '@/api/user'
import { setToken, getToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    userId: '',
    avatarImgPath: '',
    token: getToken(),
    access: ['admin'], // 可访问页面的权限数组
    hasGetInfo: false // 是否获取了用户数据
  },
  mutations: {
    setAvatar (state, avatarPath) { // 设置头像
      state.avatarImgPath = avatarPath
    },
    setUserId (state, id) { // 设置ID
      state.userId = id
    },
    setUserName (state, name) { // 设置用户名
      state.userName = name
    },
    setAccess (state, access) { // 设置权限
      state.access = access
    },
    setToken (state, token) { // 设置token
      state.token = token
      setToken(token)
    },
    setHasGetInfo (state, status) { // 设置是否获取了用户信息
      state.hasGetInfo = status
    }
  },
  getters: {},
  actions: {
    // 登录
    handleLogin ({ commit }, { userName, password }) {
      userName = userName.trim()
      return new Promise((resolve, reject) => {
        login({
          userName,
          password
        }).then(res => {
          const data = res.data
          // 设置token
          commit('setToken', data.token)
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 退出登录
    handleLogOut ({ state, commit }) {
      return new Promise((resolve, reject) => {
        // logout(state.token).then(() => {
        commit('setToken', '')
        commit('setAccess', [])
        resolve()
        // }).catch(err => {
        //   reject(err)
        // })
        // 如果你的退出登录无需请求接口，则可以直接使用下面三行代码而无需使用logout调用接口
        // commit('setToken', '')
        // commit('setAccess', [])
        // resolve()
      })
    },
    // 获取用户相关信息
    getUserInfo ({ state, commit }) {
      return new Promise((resolve, reject) => {
        try {
          getUserInfo(state.token).then(res => {
            const data = res.data
            commit('setAvatar', data.avatar)
            commit('setUserName', data.name)
            commit('setUserId', data.user_id)
            commit('setAccess', data.access)
            commit('setHasGetInfo', true)
            resolve(data)
          }).catch(err => {
            reject(err)
          })
        } catch (error) {
          reject(error)
        }
      })
    }
  }
}
