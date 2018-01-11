

Page({

  readClick: function (e) {
    var that = this;
    wx.navigateTo({
      url: "/pages/book-view/view?id=" + e.currentTarget.dataset.book + "&pageid=" + e.currentTarget.dataset.id
    })
  },


  onLoad: function (option) {
    console.log(option)
    var that = this;
    wx.request({
      url: 'https://xyxxxx.com/book/titles?id=' + option.id,
      method: 'GET',
      success: function (res) {
        if (res) {
          console.log(res);
          var arr=res.data.titles.split('-');
          var titleData=[];
          for(var i=0;i<arr.length;i++){
            var titleobj={};
            titleobj.id=i+1;
            titleobj.title=arr[i];
            titleobj.book = option.id;
            titleData.push(titleobj)   
          };
          console.log(titleData)
          that.setData({
            'titleData': titleData
          })
          wx.setNavigationBarTitle({
            title: res.data.name
          })
        }
      }
    });



  }



});