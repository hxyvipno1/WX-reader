
var app = getApp();

Page({
  data:{
    likes: [],
    booksDetails:{}
  },

  readClick: function(e){
    var that = this;
    wx.navigateTo({
      url: "/pages/book-view/view?id=" + e.currentTarget.dataset.id  + "&pageid=1"
    })
  },

  titleClick: function(e){
    var that = this;
    wx.navigateTo({
      url: "/pages/book-title/title?id=" + e.currentTarget.dataset.id 
    })
  },

  loadBook:function(id){
    wx.request({
      url: 'https://xyxxxx.com/book/booklist?id=' + id,
      method: 'GET',
      success: function (res) {
        if (res) {
          console.log(res);
          that.setData({
            booksDetails: res.data,
            likes: res.data.like.split('-')
          });
        }
      }
    });
  },

  onLoad:function(option){
    console.log(option)
    var that = this;
    wx.request({
      url: 'https://xyxxxx.com/book/booklist?id='+option.id,
      method: 'GET',
      success: function (res) {
        if (res) {
          console.log(res);
          that.setData({
            booksDetails: res.data,
            likes: res.data.like.split('-')
          }); 
          wx.setNavigationBarTitle({
            title: res.data.name
          })
        }
      }
    });

    
   
  }





})