// pages/onlineTax/onlineTax.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fcObj: null
  },
  onLoad: function() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    }) 
    // 获取纳税信息
    let fcObj = JSON.parse(wx.getStorageSync('fcItem'))
    fcObj.totalMoney = (+fcObj.payTax + (+fcObj.payment)).toFixed(2)+ ''
    this.setData({
      fcObj: fcObj
    })
  }, 
  onReady: function() {
    wx.hideLoading()
  },
  payTax: function() {
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        console.log(res)
      },
      'fail': function (res) {
        console.log(res)
      }
    })
    wx.navigateTo({
      url: '/pages/success_pay/success_pay',
    })
  } 
})