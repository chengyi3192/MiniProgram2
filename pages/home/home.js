// pages/home/home.js
//getApp()获取App()产生的示例对象
//const app = getApp()
//const name = app.globalData.name;
//const age = app.globalData.age;

//注册一个页面
//页面也有自己的生命周期
Page({

  /**
   * 页面的初始数据
   */
  // ------------ 2.初始化一些数据，方便xml引用展示 ---------
  data: {
    message: '哈哈哈',
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    const _this = this;
    // ------------ 1.生命周期函数中发送网络请求 ---------
    wx.request({
      url: 'http://123.207.32.32:8000/api/v1/recommend',
      success: function(res) {
        console.log(res)
        _this.setData({
          list: res.data.data.list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  // ------------ 3.监听xml中相关的一些事情 ---------
  handleViewClick(){
    console.log('哈哈哈被点击了')
  },

  // ------------ 4.监听其他事件 ---------
  // 监听页面的滚动
  onPageScroll(obj) {
    console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log('监听页面滚动到底部！')
  },
  // 监听下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})