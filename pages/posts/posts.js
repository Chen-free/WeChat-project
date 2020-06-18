// pages/posts/posts.js
var postData=require( '../../data/posts-data.js'
)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:"Sep 18 2020",
    title:"正是虾肥蟹壮时"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({ posts_key: postData.postList})/*全部复制传入data中*/
  },

  onPostTap:function(e){
    // console.log(e)
    var postId= e.currentTarget.dataset.postid
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId
      /*参数和路径是用？链接，？id1=1&id2=2&id3=3*/
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

  }
})