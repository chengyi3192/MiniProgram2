// pages/wxml/wxml.js
Page({
  data: {
    message: '你好小程序',
    firstName: 'keby',
    lastname: 'bryant',
    age: 20,
    nowTime: new Date().toLocaleString(),
    isActive: false,
    isShow: true,
    score: 50,
    movies:['星际穿越','盗梦空间','大话西游'],
    nums: [
      [10,20,30],
      [11, 21, 31],
      [12, 22, 32]
    ],
    letters: ['a', 'b', 'c']
  },
  handeSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6
    })
  },
  onLoad(){
    setInterval(() => {
      this.setData({
        nowTime: new Date().toLocaleString()
      })
    },1000)
  },
  handleSwitchColor(){
    this.setData({
      isActive: !this.data.isActive
    })
  }
})