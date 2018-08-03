// pages/login/login.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
  },
  onReady: function() {
    wx.hideLoading()
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    wx.showToast({
      title: '授权登录成功！',
    })
    wx.switchTab({
      url: '/pages/index/index',
    })
    this.setData({
      hasUserInfo: true
    })
  },
  login: function() {
    wx.request({
      url: app.globalData.baseUrl + '/user/login',
      data: {
        dlyhm: 'yezhu',
        dlmm: '123',
        yhlx: '2'
      },
      method: 'POST',
      success: function (res) {
        let data = res.data
        console.log(res)
        app.globalData.zjhm = res.data.data.zjhm
        console.log(app.globalData.zjhm)
        if (data.code === 200) {
          wx.showToast({
            title: '登录成功！'
          })
          wx.switchTab({
            url: '/pages/index/index',
          })
        }
      }
    })
  }
})