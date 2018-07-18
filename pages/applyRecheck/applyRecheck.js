// pages/applyRecheck/applyRecheck.js
const util = require('../../utils/util.js')

Page({
  data: {
    array: ['个人', '代理'],
    index: 0,
    date: ''
  },
  onLoad: function () {
    this.setData({
      date: util.formatDate(new Date())
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})