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
        totalPrice: 5000000.00,
        freePart: 2000000.00,
        taxBase: 3000000.00,
        taxRate: '1%',
        payTax: 30000.00,
        time: '2018-4-3'
      },
      {
        fcName: '华茂苑 301',
        fcNumber: '300000123',
        unitPrice: 50000,
        area: 100,
        totalPrice: 5000000.00,
        freePart: 2000000.00,
        taxBase: 3000000.00,
        taxRate: '1%',
        payTax: 30000.00,
        time: '2018-4-3'
      },
      {
        fcName: '华茂苑 201',
        fcNumber: '300000123',
        unitPrice: 50000,
        area: 100,
        totalPrice: 5000000.00,
        freePart: 2000000.00,
        taxBase: 3000000.00,
        taxRate: '1%',
        payTax: 30000.00,
        time: '2018-4-3'
      }
    ],
  },
  //事件处理函数
  toFcDetail: function(e) {
    // let fcList = JSON.stringify(this.data.fcList)
    let fcList = this.data.fcList
    console.log(fcList)
    wx.navigateTo({
      url: `/pages/fcDetail/fcDetail?data=${fcList}`,
    })
    // 哪一个item
    console.log(e.currentTarget.dataset.index)
  },
  toProcessCheck: function() {
    wx.navigateTo({
      url: '/pages/processCheck/processCheck',
    })
  }
})