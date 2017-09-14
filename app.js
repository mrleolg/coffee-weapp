//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {

  },

  getUserInfo: function (userinfo) {

    var that = this;

    if (this.globalData.userInfo) {

      typeof userinfo == 'function' && userinfo(this.globalData.userInfo);

    } else {

      wx.getUserInfo({
        withCredentials: true,
        lang:'zh_CN',
        success: function (res) {
            typeof userinfo == 'function' && userinfo(that.globalData.userInfo = res.userInfo);
        },
        fail: function (res) {
        },
        complete: function (res) {
        }

      });

    }

  },

  globalData: {
    userInfo: null
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  }
})
