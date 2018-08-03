// pages/applyList/applyList.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    applyList: []
  },
  onLoad: function() {
    console.log(app.globalData.zjhm)
    const _this = this
    wx.request({
      url: app.globalData.baseUrl + '/apply/progressList',
      data: {
        zjhm: app.globalData.zjhm
      },
      method: 'POST',
      success: function(res) {
        console.log(res)
        if(res.data.code === 200) {
          _this.setData({
            applyList: res.data.data
          })
        }
      }
    })
  },
  toProcessCheck(e) {
    let index = e.currentTarget.dataset.index
    let applyItem = JSON.stringify(this.data.applyList[index])
    try {
      wx.setStorageSync('applyItem', applyItem)
    } catch (e) {
      console.log(e)
    }
    wx.navigateTo({
      url: '/pages/processCheck/processCheck',
    })
  }
})