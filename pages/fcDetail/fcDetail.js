// pages/fcDetail/fcDetail.js
const app = getApp()

Page({
  data: {
    fcObj: null,
    imgUrls: [
      '/images/swiper_01.png',
      '/images/swiper_02.png',
      '/images/swiper_01.png'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    indicatorActiveColor: '#fff',
    interval: 5000,
    duration: 1000
  },
  onLoad: function(options) {
    wx.showNavigationBarLoading()
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    // 路由接收参数(参数会被转化成string,但不符合JSON格式)
    // let fcList = JSON.parse(options.data)
    // 刷新会index状态丢失
    // let index = +options.data 
    let fcObj = JSON.parse(wx.getStorageSync('fcItem'))
    // fcObj.payTaxC = (fcObj.taxBase * (fcObj.taxRate.replace('%', '') / 100)).toFixed(2)
    this.setData({
      fcObj: fcObj
    })
    app.globalData.cqzh = fcObj.cert_no
  },
  onReady: function() {
    wx.hideLoading()
    wx.hideNavigationBarLoading()
  },
  toApplyRecheck: function() {
    app.globalData.cert_no = this.data.fcObj.cert_no
    wx.navigateTo({
      url: '/pages/applyRecheck/applyRecheck',
    })
  }
});