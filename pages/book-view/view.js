var app = getApp();

Page({
  data:{
    scrollTop: 0
  },

  go: function(e){
    var that = this;
    var pageid = e.currentTarget.dataset.id - 0 + 1;
    that.bookData(e.currentTarget.dataset.book, pageid, that.goTop)   
  },

  back: function (e) {
    var that = this;
    var pageid = e.currentTarget.dataset.id -1;
    that.bookData(e.currentTarget.dataset.book, pageid,that.goTop)   
  },

  goTop: function (e) {
    wx.pageScrollTo({
      scrollTop: 0,
    })  
  },

  bookData: function(bookid,pageid,callback){
    var that = this;
    wx.request({
      url: 'https://xyxxxx.com/book/book?book=' + bookid + '&id=' + pageid,
      method: 'GET',
      success: function (res) {
        if (res) {
          console.log(res);
          var content = res.data.content.replace(/-/g, "\n      ");
          content = '   ' + content;
          console.log(content)
          that.setData({
            'bookid':bookid,
            'bookdetails': res.data,
            'title': res.data.title,
            'content': content
          });
          wx.setNavigationBarTitle({
            title: res.data.bookName
          });
          if (callback) {
            callback();
          };
        }
      }
    });
    
  },

  onLoad: function(e) {
    console.log(e)
    var that=this;
    that.bookData(e.id,e.pageid)
   
  
  }

})