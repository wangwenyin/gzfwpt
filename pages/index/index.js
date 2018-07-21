//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    fcList: [{
        fcName: '华茂苑 402',
        fcNumber: '300000123',
        unitPrice: 50000,
        area: 100,
        totalPrice: '5000000.00',
        freePart: '2000000.00',
        taxBase: '3000000.00',
        taxRate: '1%',
        payedTax: 0,
        payTax: '30000.00',
        payment: '1256.00',
        time: '2018-4-3'
      },
      {
        fcName: '华茂苑 302',
        fcNumber: '300000123',
        unitPrice: 50000,
        area: 100,
        totalPrice: '5000000.00',
        freePart: '2000000.00',
        taxBase: '3000000.00',
        taxRate: '1%',
        payedTax: 0,
        payTax: '30000.00',
        payment: '1256.00',
        time: '2018-4-3'
      },
      {
        fcName: '华茂苑 201',
        fcNumber: '300000123',
        unitPrice: 50000,
        area: 100,
        totalPrice: '5000000.00',
        freePart: '2000000.00',
        taxBase: '3000000.00',
        taxRate: '1%',
        payedTax: 0,
        payTax: '30000.00',
        payment: '1256.00',
        time: '2018-4-3'
      }
    ],
  },
  onLoad: function() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
  },
  onReady: function() {
    wx.hideLoading()
  },
  //事件处理函数
  toFcDetail: function(e) {
    let index = e.currentTarget.dataset.index
    // 之所以叫json字符串，因为字符串的格式符合json的格式,如常见的对象属性名也显示的用双引号,控制台打印内容可以显示
    // obj.toString得到的是普通的字符串，并不符合json格式,console结果是 [object Object],不能用JSON.parse转
    let fcItem = JSON.stringify(this.data.fcList[index])
    try {
      wx.setStorageSync('fcItem', fcItem)
    } catch(e) {
      console.log(e)
    }
    wx.navigateTo({
      url: `/pages/fcDetail/fcDetail?data=${index}`,
    })
  },
  toProcessCheck: function() {
    wx.navigateTo({
      url: '/pages/processCheck/processCheck',
    })
  }
})