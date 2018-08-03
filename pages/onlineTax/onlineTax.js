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
    // fcObj.totalMoney = (+fcObj.payTax + (+fcObj.payment)).toFixed(2)+ ''
    this.setData({
      fcObj: fcObj
    })
  }, 
  onReady: function() {
    wx.hideLoading()
  },
  payTax: function() {
    wx.showModal({
      title: '温馨提示',
      content: '请核对纳税信息，点击确定，进行支付。',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
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

          if (Math.random() > 0.5) {
            wx.navigateTo({
              url: '/pages/success_pay/success_pay',
            })
          } else {
            wx.navigateTo({
              url: '/pages/fail_pay/fail_pay',
            })
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
    
  } 
})