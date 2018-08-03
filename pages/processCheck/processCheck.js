// pages/processCheck/processCheck.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyObj: null,
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
        desc: '复核评估。'
      },
      {
        done: false,
        current: false,
        desc: '终审。'
      }
    ]
  },
  onLoad: function() {
    let applyObj = JSON.parse(wx.getStorageSync('applyItem'))
    this.setData({
      applyObj: applyObj
    })
    wx.request({
      url: app.globalData.baseUrl + '/apply/progress',
      data: {
        id: '123'
      },
      success: function(res) {
        console.log(res)
      }
    })
  },
  // 如果业主没有提交过复核申请，进去应该是暂无复核申请页面
  toReview: function() {
    wx.navigateTo({
      url: '/pages/review/review',
    })
  }   
}) 