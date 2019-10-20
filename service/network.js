// es6导出方式
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.dasta || {},
      success: resolve,
      fail: reject
    })
  })
}

// export default function request(options){
//   return new Promise((resolve,reject) => {
//     wx.request({
//       url: options.url,
//       method: options.method || 'get',
//       data: options.dasta || {},
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (err) {
//         reject(err)
//       }
//     })
//   })
// }