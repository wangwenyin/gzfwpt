// pages/onlineApp/onlineApp.js
const app = getApp()
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateTimeArray: null,
    dateTime: null,
    startYear: 2018,
    endYear: 2030,
    loading: false,
    showTip1: false,
    showTip2: false
  },
  onLoad: function () {
    // 获取完整的年月日 时分秒，以及默认显示的数组
    let obj = util.dateTimePicker(this.data.startYear, this.data.endYear);
    // 精确到分的处理，将数组的秒去掉
    obj.dateTimeArray.pop();
    obj.dateTime.pop();

    this.setData({
      // 二维数组
      dateTimeArray: obj.dateTimeArray,
      // 普通数组
      dateTime: obj.dateTime
    });
  },
  changeDateTimeColumn(e) {
    let arr = this.data.dateTime, dateArr =  this.data.dateTimeArray;  

    arr[e.detail.column] = e.detail.value;
    // 闰年月份天数处理
    dateArr[2] = util.getMonthDay(dateArr[0][arr[0]], dateArr[1][arr[1]]);

    this.setData({
      dateTimeArray: dateArr,
      dateTime: arr
    });
  },
  formSubmit: function (e) {
    const _this = this
    let formData = e.detail.value
    formData.xzyysj = util.formatDateArray(formData.xzyysj, _this)
    for (let key in formData) {
      if (formData[key] === '') {
        this.setData({
          showTip1: true
        })
        return
      }
    }
    if (formData.sj.length !== 11) {
      this.setData({
        showTip2: true
      })
      return
    }

    this.setData({
      loading: true
    })
    console.log(formData)
    this.submitData(formData)
  },
  submitData: function (formData) {
    const _this = this
    wx.request({
      url: app.globalData.baseUrl + '/question/addYysq',
      data: formData,
      method: 'POST',
      success: function (res) {
        _this.setData({
          loading: false
        })
        if (res.data.msg === 'ok') {
          wx.showToast({
            title: '信息提交成功！',
          })
          setTimeout(() => {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }, 1000)
        } else {
          // 可以自定义icon
          wx.showToast({
            title: '提交失败，请重新提交！',
          })
        }
      }
    })
  },
})