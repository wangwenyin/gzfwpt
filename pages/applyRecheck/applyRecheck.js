// pages/applyRecheck/applyRecheck.js
const app = getApp()
const util = require('../../utils/util.js')

Page({
  data: {
    array: ['个人', '企业'],
    showTip1: false,
    showTip2: false,
    index: 0,
    date: ''
  },
  onLoad: function () {
    this.setData({
      date: util.formatDate(new Date())
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function (e) {
    let formData1 = e.detail.value
    formData1.yzlx += ''
    for (let key in formData1) {
      if (formData1[key] === '') {
        this.setData({
          showTip: true
        })
        return 
      }
    }
    if (formData1.lxrdh.length !== 11) {
      this.setData({
        showTip2: true
      })
      return
    }
    app.globalData.formData1 = formData1
    wx.navigateTo({
      url: '/pages/applyRecheck_next/applyRecheck_next',
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})