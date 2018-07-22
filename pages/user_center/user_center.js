// pages/user_center/user_center.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } 
  },
  logout: function() {
    const _this = this
    // 是微信授权登录
    if (this.data.hasUserInfo) {
      // redirectTo 不需要回退按钮
      wx.redirectTo({
        url: '/pages/login/login',
        success: function() {
          app.globalData.userInfo = null
          _this.setData({
            userInfo: null,
            hasUserInfo: false
          })
        }
      })
    } else {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
  }
})