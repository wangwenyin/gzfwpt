// pages/processCheck/processCheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    steps: [
      {
        done: true,
        current: false,
        desc: '申请已提交。'
      },
      {
        done: true,
        current: false,
        desc: '数据审核。'
      },
      {
        done: false,
        current: true,
        desc: '现场查勘。'
      },
      {
        done: false,
        current: false,
        desc: '估计系统估价。'
      },
      {
        done: false,
        current: false,
        desc: '复核评估。'
      },
      {
        done: false,
        current: false,
        desc: '终审。'
      }
    ]
  },
  toReview: function() {
    wx.navigateTo({
      url: '/pages/review/review',
    })
  }   
})