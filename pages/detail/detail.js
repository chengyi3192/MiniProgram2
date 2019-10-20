// pages/detail/detail.js
Page({
  
  onLoad: function (options) {
    // 这里输出的就是跳转页面传过来的数据
    console.log(options)
  },
  onUnload() {
    // 1.获取页面的页面对象
    // getCurrentPages返回当前所有活跃的页面
    const pages = getCurrentPages()
    const home = pages[pages.length-2]

    // 2.调用页面对象的setData
    home.setData({
      title: '呵呵和'
    })
  },
  handleBackHome(){
    wx.navigateBack({
      delta: 1
    })
  }
})




