//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    selectedbox: 'swordsman',
    booktype: [
      { 'name': '玄幻', 'unit': 'swordsman', 'id': '1'}, 
      { 'name': '修真', 'unit': 'fantasy', 'id': '2'}, 
      { 'name': '都市', 'unit': 'urban', 'id': '3'}, 
      { 'name': '历史', 'unit': 'romance', 'id': '4'}, 
      { 'name': '游戏', 'unit': 'campus', 'id': '5'}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  loadData: function (type) {
    var that=this;
    wx.request({
      url: 'https://xyxxxx.com/book/type?type='+type,
      method: 'GET',
      success: function (res) {
        if (res) {
          console.log(res);
          that.setData({
            booklist: res.data
          })
        }
      }
    });
  },

  tabClick: function(e) {
    var that=this;
    switch (e.currentTarget.id){
      case 'swordsman': that.loadData('1');
              break;
      case 'fantasy': that.loadData('2');
              break;
      case 'urban': that.loadData('3');
              break;
      case 'romance': that.loadData('4');
              break;
      case 'campus': that.loadData('5');
              break;
    }
    this.setData({
      selectedbox: e.currentTarget.id
    })
  },

  itemClick: function(e){
    wx.navigateTo({
      url: "/pages/books-details/details?id=" + e.currentTarget.dataset.id
    })


  },

  onLoad: function () {
    console.log('onLoad')
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });

    wx.request({
      url: 'https://xyxxxx.com/book/type?type=1',
      method: 'GET',
      success: function(res) {
        if (res) {
         console.log(res);
         that.setData({
           booklist: res.data
         })
        }
      }
    });
  },

})
