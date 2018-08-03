//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fcList: [],
    fcList_origin: [],
    inputValue: '',
    focus: false
  },
  onLoad: function() {
    const _this = this
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    
    wx.request({
      url: app.globalData.baseUrl + '/owner/query',
      data: {
        type: '1',
        zjhm: app.globalData.zjhm,
        bdcqh: '44030500551000001009C'
      },
      method: 'Post',
      success: function(res) {
        console.log(res)
        if(res.data.code === 200) {
          let fcList = res.data.data
          _this.setData({
            fcList: fcList,
            fcList_origin: fcList.slice()
          })
        }
      }
    })
  },
  onReady: function() {
    wx.hideLoading()
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    if(!this.data.inputValue) {
      this.setData({
        fcList: this.data.fcList_origin
      })
    }
  },
  search: function() {
    // let fcList_filter = this.data.fcList_origin.filter(item => {
    //   return item.cert_no.indexOf(this.data.inputValue) > -1
    // })
    // this.setData({
    //   fcList: fcList_filter,
    //   focus: false
    // })
    const _this = this
    wx.request({
      url: app.globalData.baseUrl + '/owner/query',
      data: {
        type: '2',
        bdcqh: this.data.inputValue
      }, 
      method: 'Post',
      success: function (res) {
        if (res.data.msg === 'ok') {
          _this.setData({
            fcList: res.data.data
          })
          wx.showToast({
            title: '没找到房产！',
          })
        }
      }
    })
  },
  //事件处理函数
  toFcDetail: function(e) {
    let index = e.currentTarget.dataset.index
    let fcItem = JSON.stringify(this.data.fcList[index])
    try {
      wx.setStorageSync('fcItem', fcItem)
    } catch(e) {
      console.log(e)
    }
    wx.navigateTo({
      url: `/pages/fcDetail/fcDetail`,
    })
  },
  toApplyList: function() {
    wx.navigateTo({
      url: '/pages/applyList/applyList',
    })
  }
})