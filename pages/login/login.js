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
    wx.switchTab({
      url: '/pages/index/index',
    })
    this.setData({
      hasUserInfo: true
    })
  },
  login() {
    
  }
})