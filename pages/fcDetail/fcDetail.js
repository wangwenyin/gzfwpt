// pages/fcDetail/fcDetail.js
Page({
  data: {
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
    let fcList = options.data
    console.log(fcList, typeof fcList)
    console.log(fcList[0])
    // if (typeof fcList === 'string') {
    //   fcList = JSON.parse(fcList)
    // }
    console.log(typeof fcList, fcList[0])
  },
  toApplyRecheck: function() {
    wx.navigateTo({
      url: '/pages/applyRecheck/applyRecheck',
    })
  }
});