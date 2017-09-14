var utils = require('../../utils/utils');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentState: true,
    /**
     * 焦点图变量
     */
    imgsUrl: [
      {
        imgsId: 1,
        imgUrl: 'img/swiper-img1.jpg'
      },
      {
        imgsId: 2,
        imgUrl: 'img/swiper-img1.jpg'
      },
      {
        imgsId: 3,
        imgUrl: 'img/swiper-img1.jpg'
      }
    ],
    indicatorDots: true,
    autoPlay: true,
    interval: 4000,
    duration: 300,
    /**
     * 领取会员卡变量
     */
    memberCardDescription: "领取VIP会员卡，尊享会员特权\n赠200积分 赠50优惠券",
    getMemberCard: "领卡",
    /**
     * 领取优惠券
     */
    couponList: [{
        id: "1",
        couponValue: 20,
        couponName: "午餐优惠券",
        couponCondition: "满100元即可使用",
        expDate: "2017.12.30",
        state:true
      }, {
        id: "2",
        couponValue: 30,
        couponName: "下午茶优惠券",
        couponCondition: "满150元即可使用",
        expDate: "2017.08.30",
        state:false
      }, {
        id: "3",
        couponValue: 50,
        couponName: "酒水优惠券",
        couponCondition: "满200元即可使用",
        expDate: "2017.09.30",
        state:true
      }
    ],
    /**
     * 广告图
     */
    advImgUrl:"../../images/adv.jpg",
    /**
     * 推荐产品列表
     */
    recListAarry: [{
      id: 1,
      proImg: "../../images/proimg-1.jpg",
      proName: "台式烤肠"
    }, {
      id: 2,
      proImg: "../../images/proimg-2.jpg",
      proName: "抹茶拿铁"
    }, {
      id: 3,
      proImg: "../../images/proimg-3.jpg",
      proName: "水果沙拉"
    }],
    /**
     * wifi账号密码
     */
    wifiName:'ASDFSDFWE',
    wifiPwd:'sdfwert1235'
  },

  /**
   * 领取会员卡
   */
  getMemberCard:function(event){
    this.setData({
      getMemberCard: "已领取"
    })
  },

  /**
   * 领取优惠券
   */
  getCoupon: function (e) {
    var param = {};
    var state = "couponList["+e.currentTarget.dataset.index+"].state";
    param[state] = false;
    this.setData(param);
    console.log(param);
  },

  /**
   * 品牌视频错误捕获
   */
  videoErrorCallback: function(e){
    console.log(e.detail.errMsg)
  },

  /**
   * 一键复制
   */
  onekeyCopy:function(){
    utils.onKeyCopy(this.data.wifiPwd);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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