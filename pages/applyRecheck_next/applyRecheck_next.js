// pages/applyRecheck_next/applyRecheck_next.js
Page({
  data: {
    arrayFc: ['房产', '土地'],
    arraySqr: ['张三', '李四', '王五'],
    indexFc: 0,
    indexSqr: 0
  },
  onLoad: function () {
    
  },
  bindFcPickerChange: function (e) {
    this.setData({
      indexFc: e.detail.value
    })
  },
  bindSqrPickerChange: function (e) {
    this.setData({
      indexSqr: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})