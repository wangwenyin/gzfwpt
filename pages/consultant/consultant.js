// pages/consultant/consultant.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: true
  },
  clickHistory() {
    if (this.data.show) {
      this.setData({
        show: !this.data.show
      })
    }
  },
  clickHot() {
    if (!this.data.show) {
      this.setData({
        show: !this.data.show
      })
    }
  },
  toAnswer() {
    wx.navigateTo({
      url: '/pages/answer/answer',
    })
  },
  makePhoneCall() {
    wx.makePhoneCall({
      phoneNumber: '4001234888',
    })
  },
  toOnlineApp() {
    wx.navigateTo({
      url: '/pages/onlineApp/onlineApp',
    })
  }
})