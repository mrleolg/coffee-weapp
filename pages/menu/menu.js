// menu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * 活动提示语
     */
    tipsTxt:"午后的咖啡物语·全场商品&买一送一",

    /**
     * 产品列表
     */
    menuList: [],
    curNav: 1,
    curIndex: 0
  },

  /**
   * 菜单切换
   */
  switchRightTab:function(e){
    let id = e.target.dataset.id,
        index = e.target.dataset.index;
    this.setData({
      curNav:id,
      curIndex:index
    })
    console.log(e.target.dataset)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/59af9cbde0dc6633419eca70/wxapp-coffe/menu',
      method:'GET',
      success:function(res){
        that.setData({
          menuList:res.data
        })
      },
      fail:function(res){
        console.log(res);
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
  
  }
})