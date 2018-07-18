// pages/fcDetail/fcDetail.js
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
    // 路由接收参数(参数会被转化成string,但不符合JSON格式)
    // let fcList = JSON.parse(options.data)
    let index = +options.data
    let fcList = JSON.parse(wx.getStorageSync('fcList'))
    this.setData({
      fcObj: fcList[index]
    })
  },
  toApplyRecheck: function() {
    wx.navigateTo({
      url: '/pages/applyRecheck/applyRecheck',
    })
  }
});