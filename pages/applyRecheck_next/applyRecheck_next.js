// pages/applyRecheck_next/applyRecheck_next.js
const app = getApp()

Page({
  data: {
    arrayFc: ['住宅', '商业', '办公', '工厂'],
    arraySqr: ['业主', '代理'],
    indexFc: 0,
    indexSqr: 0,
    showTip: false,
    disabled: true,
    loading: false,
    // 保存上传的文件string(可用于在界面展示)，回传
    sfz: '',
    fczs: '',
    sqs: ''
  },
  onLoad: function () {

  },
  bindFcPickerChange: function (e) {
    this.setData({
      indexFc: e.detail.value
    })
  },
  bindSqrPickerChange: function (e) {
    if (e.detail.value === '1') {
      this.setData({
        disabled: false
      })
    }
    this.setData({
      indexSqr: e.detail.value
    })
  },
  formSubmit: function (e) {
    let formData2 = e.detail.value
    console.log(formData2)
    formData2.fclb += '' 
    formData2.sqr += ''
    let otherData = {}
    if (this.data.disabled) {
      otherData = {
        cqzh: app.globalData.cert_no,
        qlrsfzhyyzz: this.data.sfz,
        fdczs: this.data.fczs
      }
    } else {
      otherData = {
        cqzh: app.globalData.cert_no,
        qlrsfzhyyzz: this.data.sfz,
        fdczs: this.data.fczs,
        sqs: this.data.sqs
      }
    }
    formData2 = Object.assign({}, formData2, otherData)
    for (let key in formData2) {
      if (formData2[key] === '') {
        console.log(key)
        this.setData({
          showTip: true
        }) 
        return
      }
    }
    let formData1 = app.globalData.formData1
    
    let formData = Object.assign({}, formData1, formData2)
    console.log(formData)

    this.setData({
      loading: true
    })
    
    this.submitData(formData)
  },
  submitData: function (formData) {
    const _this = this
    wx.request({
      url: app.globalData.baseUrl + '/apply',
      data: formData,
      method: 'POST',
      success: function (res) {
        if (res.data.msg === 'ok') {
          wx.showToast({
            title: '申请提交成功！',
          })
          setTimeout(() => {
            wx.navigateTo({
              url: '/pages/fcDetail/fcDetail',
            })
          }, 2000)
        } else {
          // 可以自定义icon
          wx.showToast({
            title: '提交失败，请重新提交！',
          })
        }
        _this.setData({
          loading: false
        })
      }
    })
  },
  formReset: function () { 
    console.log('form发生了reset事件')
  },
  uploadFile: function(e) {
    const _this = this
    let index = e.target.dataset.index
    wx.chooseImage({
      success: function (res) {
        let tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: app.globalData.baseUrl + '/file/singleUpload',  
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success: function (res) {
            console.log(res)
            let data = JSON.parse(res.data)
            if (data.code === 200) {
              index === '1' && _this.setData({ sfz: data.data})
              index === '2' && _this.setData({ fczs: data.data})
              index === '3' && _this.setData({ sqs: data.data})
              wx.showToast({
                title: '上传成功！',
              })
            } else {
              wx.showToast({
                title: '上传失败！', 
              })
            }
          }
        })
      }
    })
  }
})