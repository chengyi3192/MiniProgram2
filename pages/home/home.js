Page({
  data: {
    name: "Codewhy",
    age: 18,
    students: [
      { id: 100, name: "kobe", age: 18},
      { id: 101, name: "james", age: 19 },
      { id: 102, name: "jack", age: 20 },
      { id: 103, name: "marry", age: 21 }
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1.错误的做法：界面是不会刷新的
    //this.data.counter += 1
    //console.log(this.data.counter)

    // 2.this.setData()
    this.setData({
      counter: this.data.counter + 1 
    })
  },

  handleSubtraction(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})